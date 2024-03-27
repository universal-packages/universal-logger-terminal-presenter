import { LogLevel, TransportInterface, TransportLogEntry } from '@universal-packages/logger'
import {
  BlueColor,
  Border,
  BrownColor,
  Color,
  DocumentDescriptor,
  GrayColor,
  GreenColor,
  OrangeColor,
  PinkColor,
  PurpleColor,
  RedColor,
  RowDescriptor,
  TerminalDocument,
  WhiteColor,
  YellowColor
} from '@universal-packages/terminal-document'
import { TerminalPresenter } from '@universal-packages/terminal-presenter'
import { getTerminalColumns } from '@universal-packages/terminal-presenter/getTerminalColumns'
import util from 'util'

import { TerminalPresenterTransportLogConfiguration, TerminalPresenterTransportOptions } from './TerminalPresenterTransport.types'

const LEVEL_COLORS: Record<LogLevel, { primary: Color; secondary: Color }> = {
  ERROR: { primary: RedColor.Crimson, secondary: RedColor.FireBrick },
  FATAL: { primary: RedColor.FireBrick, secondary: GrayColor.DarkSlateGray },
  WARNING: { primary: YellowColor.Gold, secondary: BrownColor.Goldenrod },
  QUERY: { primary: PurpleColor.MediumSlateBlue, secondary: PurpleColor.DarkOrchid },
  INFO: { primary: BlueColor.SteelBlue, secondary: BlueColor.DeepSkyBlue },
  DEBUG: { primary: GrayColor.DarkGray, secondary: GrayColor.DimGray },
  TRACE: { primary: GrayColor.Silver, secondary: WhiteColor.White }
}

const ENVIRONMENT_COLORS: Record<string, { primary: Color; secondary: Color }> = {
  development: { primary: OrangeColor.OrangeRed, secondary: WhiteColor.White },
  production: { primary: PurpleColor.DarkMagenta, secondary: WhiteColor.White },
  test: { primary: PinkColor.MediumVioletRed, secondary: WhiteColor.White },
  other: { primary: PurpleColor.Purple, secondary: WhiteColor.White }
}

const TAG_COLORS = [
  RedColor.IndianRed,
  RedColor.Crimson,
  RedColor.FireBrick,
  PinkColor.DeepPink,
  PinkColor.MediumVioletRed,
  OrangeColor.OrangeRed,
  OrangeColor.DarkOrange,
  PurpleColor.RebeccaPurple,
  PurpleColor.MediumSlateBlue,
  PurpleColor.Purple,
  GreenColor.LimeGreen,
  GreenColor.SeaGreen,
  GreenColor.DarkGreen,
  GreenColor.DarkCyan,
  BlueColor.SteelBlue,
  BlueColor.DarkBlue,
  BrownColor.SaddleBrown,
  BrownColor.DarkGoldenrod,
  BrownColor.Brown,
  GrayColor.DarkSlateGray,
  GrayColor.DimGray
]

const BORDER_STYLE_DEFAULT = 'dash-2-thick'

export default class TerminalPresenterTransport implements TransportInterface {
  public readonly options: TerminalPresenterTransportOptions

  public constructor(options?: TerminalPresenterTransportOptions) {
    this.options = { withHeader: false, ...options }
  }

  public async log(logEntry: TransportLogEntry, configuration?: TerminalPresenterTransportLogConfiguration): Promise<void> {
    const documentDescriptor: DocumentDescriptor = { rows: [] }
    const headerRow = this.buildHeaderRow(logEntry, configuration)
    documentDescriptor.rows.push(headerRow)

    if (logEntry.message) {
      const isUnique = !logEntry.metadata && !logEntry.error && !logEntry.tags
      const messageRow: RowDescriptor = { blocks: [] }

      messageRow.blocks.push({
        border: [false, false, isUnique, false],
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        free: true,
        text: logEntry.message
      })
      documentDescriptor.rows.push(messageRow)
    }

    if (logEntry.error) {
      const isUnique = !logEntry.metadata && !logEntry.tags
      const errorMessageRow: RowDescriptor = { blocks: [] }

      errorMessageRow.blocks.push({
        free: true,
        color: LEVEL_COLORS[logEntry.level].secondary,
        style: ['bold', 'italic'],
        text: logEntry.error.message
      })
      documentDescriptor.rows.push(errorMessageRow)

      const errorStackRow: RowDescriptor = { blocks: [] }
      const stackLines = logEntry.error.stack
        .split('\n')
        .splice(1)
        .map((line) => {
          const fileLineAndColumnMatch = line.match(/\/(\w*\..*:\d*:\d*)/g)

          if (!fileLineAndColumnMatch) return line

          const fileLineAndColumn = fileLineAndColumnMatch[0].substring(1)
          const miniTerminalDocument = new TerminalDocument()

          return line.replace(
            fileLineAndColumn,
            miniTerminalDocument.describe({ rows: [{ blocks: [{ style: 'bold', text: fileLineAndColumn, color: LEVEL_COLORS[logEntry.level].secondary }] }] }).trim()
          )
        })
        .join('\n')

      errorStackRow.blocks.push({
        border: [false, false, isUnique, false],
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        free: true,
        text: stackLines
      })
      documentDescriptor.rows.push(errorStackRow)
    }

    if (logEntry.metadata) {
      const isUnique = !logEntry.tags
      const isTop = !logEntry.message && !logEntry.error
      documentDescriptor.rows.push({
        blocks: [
          {
            border: [!isTop, false, true, false],
            borderStyle: ['dash-3', BORDER_STYLE_DEFAULT, isUnique ? BORDER_STYLE_DEFAULT : 'dash-3', BORDER_STYLE_DEFAULT],
            borderColor: LEVEL_COLORS[logEntry.level].primary,
            free: true,
            text: util
              .inspect(logEntry.metadata, { depth: 5, colors: true, sorted: true })
              .replace(/[\r\n]+/g, ' ')
              .replace(/ +/g, ' ')
          }
        ]
      })
    }

    if (logEntry.tags) {
      const tagsRows: RowDescriptor[] = []
      const terminalColumns = getTerminalColumns()
      let currentRowBlocks = []
      let currentTagsSize = 0

      for (let i = 0; i < logEntry.tags.length; i++) {
        const currentTag = logEntry.tags[i]

        currentTagsSize += currentTag.length + 5

        if (currentTagsSize > terminalColumns) {
          tagsRows.push({ blocks: currentRowBlocks })
          currentTagsSize = 0
          currentRowBlocks = []
        }

        currentRowBlocks.push({
          backgroundColor: getTagColorBayHashingTag(currentTag),
          color: WhiteColor.White,
          style: 'bold',
          text: ` ${currentTag} `,
          width: 'fit'
        })
        currentRowBlocks.push({ text: ' ' })
      }

      if (currentRowBlocks.length > 0) tagsRows.push({ blocks: currentRowBlocks })

      tagsRows[tagsRows.length - 1] = {
        ...tagsRows[tagsRows.length - 1],
        border: [false, false, true, false],
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary
      }

      for (let i = 0; i < tagsRows.length; i++) {
        documentDescriptor.rows.push(tagsRows[i])
      }
    }

    TerminalPresenter.printDocument(documentDescriptor)
  }

  private buildHeaderRow(logEntry: TransportLogEntry, configuration?: TerminalPresenterTransportLogConfiguration): RowDescriptor {
    const isUnique = !logEntry.message && !logEntry.metadata && !logEntry.error && !logEntry.tags
    const infoBorder: Border = [true, false, isUnique, false]
    const headerRow: RowDescriptor = { blocks: [] }

    headerRow.blocks.push({
      border: [true, true, true, false],
      borderStyle: BORDER_STYLE_DEFAULT,
      borderColor: LEVEL_COLORS[logEntry.level].primary,
      color: LEVEL_COLORS[logEntry.level].secondary,
      style: 'bold',
      text: ` ${this.pad(logEntry.index)} `,
      verticalAlign: 'middle',
      width: 'fit'
    })

    if (logEntry.title) {
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        color: LEVEL_COLORS[logEntry.level].secondary,
        style: 'bold',
        text: ` ${logEntry.title} `,
        height: 1
      })
    } else {
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        color: LEVEL_COLORS[logEntry.level].secondary,
        style: 'bold',
        text: ` ${logEntry.level} `
      })
    }

    if (logEntry.measurement) {
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].secondary,
        style: ['italic', 'bold'],
        text: ` ${logEntry.measurement.toString()} `,
        verticalAlign: 'middle',
        width: 'fit'
      })
    }

    if (logEntry.category) {
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        backgroundColor: configuration?.categoryBackgroundColor || LEVEL_COLORS[logEntry.level].primary,
        color: configuration?.categoryColor || LEVEL_COLORS[logEntry.level].secondary,
        style: 'bold',
        text: ` ${logEntry.category} `,
        verticalAlign: 'middle',
        width: 'fit'
      })
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        text: ' ',
        width: 'fit'
      })
    }

    if (logEntry.environment) {
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        backgroundColor: (ENVIRONMENT_COLORS[logEntry.environment] || ENVIRONMENT_COLORS.other).primary,
        color: (ENVIRONMENT_COLORS[logEntry.environment] || ENVIRONMENT_COLORS.other).secondary,
        style: 'bold',
        text: ` ${logEntry.environment.toUpperCase()} `,
        verticalAlign: 'middle',
        width: 'fit'
      })
      headerRow.blocks.push({
        border: infoBorder,
        borderStyle: BORDER_STYLE_DEFAULT,
        borderColor: LEVEL_COLORS[logEntry.level].primary,
        text: ' ',
        width: 'fit'
      })
    }

    headerRow.blocks.push({
      border: infoBorder,
      borderStyle: BORDER_STYLE_DEFAULT,
      borderColor: LEVEL_COLORS[logEntry.level].primary,
      color: WhiteColor.Azure,
      style: ['bold', 'inverse'],
      text: ` ${logEntry.timestamp.toLocaleTimeString()} `,
      verticalAlign: 'middle',
      width: 'fit'
    })

    return headerRow
  }

  private pad(number: number): string {
    if (number < 10) return `0${number}`

    return `${number}`
  }
}

function getTagColorBayHashingTag(tag: string): Color {
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  const index = Math.abs(hash) % TAG_COLORS.length

  return TAG_COLORS[index]
}
