import { Logger } from '@universal-packages/logger'
import { printDocument } from '@universal-packages/terminal-presenter'
import { Measurement } from '@universal-packages/time-measurer'

import { TerminalPresenterTransport } from '../src'

jest.mock('@universal-packages/terminal-presenter/getTerminalColumns', () => ({ getTerminalColumns: () => 60 }))
jest.mock('@universal-packages/terminal-presenter', () => {
  return {
    printDocument: jest.fn()
  }
})

beforeAll((): void => {
  Date.prototype.toLocaleTimeString = (): string => 'date'
})

describe(TerminalPresenterTransport, (): void => {
  it('Uses terminal presenter to log entries', async (): Promise<void> => {
    const logger = new Logger({ transports: [{ transport: new TerminalPresenterTransport() }] })
    await logger.prepare()

    const measurement = new Measurement(93882362364n)

    logger.log(
      {
        level: 'INFO',
        title: 'This is some read worthy information, this is some read worthy information',
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'INFO',
        title: 'This is some read worthy information, this is some read worthy information',
        measurement,
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'INFO',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'INFO',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS',
        metadata: { some: 'metadata' }
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'INFO',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS',
        metadata: { some: 'metadata' },
        tags: [
          'tag1',
          'tag2',
          'tag3',
          'tag4',
          'tag5',
          'tag6',
          'tag7',
          'tag8',
          'tag9',
          'tag10',
          'tag11',
          'tag12',
          'tag13',
          'tag14',
          'tag15',
          'tag16',
          'tag17',
          'tag18',
          'tag19',
          'tag20'
        ]
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'TRACE',
        title: 'This is some read worthy information, this is some read worthy information',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'DEBUG',
        title: 'This is some read worthy information, this is some read worthy information',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'QUERY',
        title: 'This is some read worthy information, this is some read worthy information',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'WARNING',
        title: 'This is some read worthy information, this is some read worthy information',
        measurement,
        message:
          'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'REDIS'
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'ERROR',
        measurement,
        category: 'REDIS',
        error: new Error('This is an error')
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    logger.log(
      {
        level: 'FATAL',
        measurement,
        category: 'REDIS',
        error: new Error('This is an error')
      },
      { categoryBackgroundColor: 'red', categoryColor: 'white' }
    )

    await logger.waitForLoggingActivity()

    const printDocumentMock = printDocument as jest.Mock

    expect(printDocumentMock.mock.calls).toEqual([
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' 01 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' 02 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'deep-sky-blue',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' 03 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' INFO '
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'deep-sky-blue',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' 04 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' INFO '
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'deep-sky-blue',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [true, false, true, false],
                  borderStyle: ['dash-3', 'dash-2-thick', 'dash-2-thick', 'dash-2-thick'],
                  borderColor: 'steel-blue',
                  free: true,
                  text: "{ some: \u001b[32m'metadata'\u001b[39m }"
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' 05 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'deep-sky-blue',
                  style: 'bold',
                  text: ' INFO '
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'deep-sky-blue',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit',
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'steel-blue',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [true, false, true, false],
                  borderStyle: ['dash-3', 'dash-2-thick', 'dash-3', 'dash-2-thick'],
                  borderColor: 'steel-blue',
                  free: true,
                  text: "{ some: \u001b[32m'metadata'\u001b[39m }"
                }
              ]
            },
            {
              blocks: [
                {
                  backgroundColor: 'fire-brick',
                  color: 'white',
                  style: 'bold',
                  text: ' tag1 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'deep-pink',
                  color: 'white',
                  style: 'bold',
                  text: ' tag2 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' tag3 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'orange-red',
                  color: 'white',
                  style: 'bold',
                  text: ' tag4 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'dark-orange',
                  color: 'white',
                  style: 'bold',
                  text: ' tag5 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'rebecca-purple',
                  color: 'white',
                  style: 'bold',
                  text: ' tag6 ',
                  width: 'fit'
                },
                {
                  text: ' '
                }
              ]
            },
            {
              blocks: [
                {
                  backgroundColor: 'medium-slate-blue',
                  color: 'white',
                  style: 'bold',
                  text: ' tag7 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'purple',
                  color: 'white',
                  style: 'bold',
                  text: ' tag8 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'lime-green',
                  color: 'white',
                  style: 'bold',
                  text: ' tag9 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'orange-red',
                  color: 'white',
                  style: 'bold',
                  text: ' tag10 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'dark-orange',
                  color: 'white',
                  style: 'bold',
                  text: ' tag11 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'rebecca-purple',
                  color: 'white',
                  style: 'bold',
                  text: ' tag12 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'medium-slate-blue',
                  color: 'white',
                  style: 'bold',
                  text: ' tag13 ',
                  width: 'fit'
                },
                {
                  text: ' '
                }
              ]
            },
            {
              blocks: [
                {
                  backgroundColor: 'purple',
                  color: 'white',
                  style: 'bold',
                  text: ' tag14 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'lime-green',
                  color: 'white',
                  style: 'bold',
                  text: ' tag15 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'sea-green',
                  color: 'white',
                  style: 'bold',
                  text: ' tag16 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'dark-green',
                  color: 'white',
                  style: 'bold',
                  text: ' tag17 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'dark-cyan',
                  color: 'white',
                  style: 'bold',
                  text: ' tag18 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'steel-blue',
                  color: 'white',
                  style: 'bold',
                  text: ' tag19 ',
                  width: 'fit'
                },
                {
                  text: ' '
                },
                {
                  backgroundColor: 'dark-blue',
                  color: 'white',
                  style: 'bold',
                  text: ' tag20 ',
                  width: 'fit'
                },
                {
                  text: ' '
                }
              ],
              border: [false, false, true, false],
              borderStyle: 'dash-2-thick',
              borderColor: 'steel-blue'
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  color: 'white',
                  style: 'bold',
                  text: ' 06 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  color: 'white',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'white',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'silver',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  color: 'dim-gray',
                  style: 'bold',
                  text: ' 07 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  color: 'dim-gray',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dim-gray',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-gray',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  color: 'dark-orchid',
                  style: 'bold',
                  text: ' 08 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  color: 'dark-orchid',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-orchid',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'medium-slate-blue',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  color: 'goldenrod',
                  style: 'bold',
                  text: ' 09 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  color: 'goldenrod',
                  style: 'bold',
                  text: ' This is some read worthy information, this is some read worthy information ',
                  height: 1
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'goldenrod',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'gold',
                  free: true,
                  text: 'This is a message tha is extra large and stuff, I am even going to start to tell you the lorem thing that goes like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  color: 'fire-brick',
                  style: 'bold',
                  text: ' 10 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  color: 'fire-brick',
                  style: 'bold',
                  text: ' ERROR '
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  free: true,
                  color: 'fire-brick',
                  style: ['bold', 'italic'],
                  text: 'This is an error'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'crimson',
                  free: true,
                  text: expect.any(String)
                }
              ]
            }
          ]
        }
      ],
      [
        {
          rows: [
            {
              blocks: [
                {
                  border: [true, true, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  color: 'dark-slate-gray',
                  style: 'bold',
                  text: ' 11 ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  color: 'dark-slate-gray',
                  style: 'bold',
                  text: ' FATAL '
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'dark-slate-gray',
                  style: ['italic', 'bold'],
                  text: ' 1min 33.882sec ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  backgroundColor: 'red',
                  color: 'white',
                  style: 'bold',
                  text: ' REDIS ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  backgroundColor: 'medium-violet-red',
                  color: 'white',
                  style: 'bold',
                  text: ' TEST ',
                  verticalAlign: 'middle',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  text: ' ',
                  width: 'fit'
                },
                {
                  border: [true, false, false, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  color: 'azure',
                  style: ['bold', 'inverse'],
                  text: ' date ',
                  verticalAlign: 'middle',
                  width: 'fit'
                }
              ]
            },
            {
              blocks: [
                {
                  free: true,
                  color: 'dark-slate-gray',
                  style: ['bold', 'italic'],
                  text: 'This is an error'
                }
              ]
            },
            {
              blocks: [
                {
                  border: [false, false, true, false],
                  borderStyle: 'dash-2-thick',
                  borderColor: 'fire-brick',
                  free: true,
                  text: expect.any(String)
                }
              ]
            }
          ]
        }
      ]
    ])
  })
})
