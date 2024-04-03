import { Color, OrangeColor, PinkColor, PurpleColor, WhiteColor } from '@universal-packages/terminal-document'
import { BlockController, BlockControllerConfiguration } from '@universal-packages/terminal-presenter'

import { EnvironmentTagBlockOptions } from './EnvironmentTagBlock.types'

let ID = 0

const ENVIRONMENT_COLORS: Record<string, { primary: Color; secondary: Color }> = {
  development: { primary: OrangeColor.Tomato, secondary: WhiteColor.White },
  production: { primary: PurpleColor.DarkMagenta, secondary: WhiteColor.White },
  test: { primary: PinkColor.MediumVioletRed, secondary: WhiteColor.White },
  other: { primary: PurpleColor.Purple, secondary: WhiteColor.White }
}

export function EnvironmentTagBlock(options?: EnvironmentTagBlockOptions): BlockController {
  const ENVIRONMENT_COLOR = ENVIRONMENT_COLORS[process.env.NODE_ENV] || ENVIRONMENT_COLORS.other

  const id = `environment-tag-${ID++}`

  let configuration: BlockControllerConfiguration

  return {
    descriptor: {
      id,
      backgroundColor: ENVIRONMENT_COLOR.primary,
      color: ENVIRONMENT_COLOR.secondary,
      style: 'bold',
      text: ` ${String(process.env.NODE_ENV).toUpperCase()} `,
      verticalAlign: 'middle',
      width: 'fit',
      ...options
    },
    requestUpdate: () => {},
    configure: (config: BlockControllerConfiguration) => (configuration = config)
  }
}
