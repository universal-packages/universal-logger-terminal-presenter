import { Color } from '@universal-packages/terminal-document'

export interface TerminalPresenterTransportOptions {
  withHeader?: boolean
}

export interface TerminalPresenterTransportLogConfiguration {
  categoryBackgroundColor?: Color
  categoryColor?: Color
}
