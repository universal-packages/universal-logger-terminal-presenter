import { BlockDescriptor } from '@universal-packages/terminal-document'

export interface EnvironmentTagBlockOptions extends Omit<BlockDescriptor, 'id' | 'text'> {}
