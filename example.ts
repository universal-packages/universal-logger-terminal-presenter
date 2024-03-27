import { Logger } from '@universal-packages/logger'
import { TerminalPresenter } from '@universal-packages/terminal-presenter'
import { Measurement } from '@universal-packages/time-measurer'

import { TerminalPresenterTransport } from './src'

process.env['NODE_ENV'] = 'development'

async function example(): Promise<void> {
  const logger = new Logger({ transports: [{ transport: new TerminalPresenterTransport() }] })
  await logger.prepare()

  const measurement = new Measurement(93882362364n)

  TerminalPresenter.start()

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
      metadata: process.env
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
      metadata: process.env,
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

  await logger.dispatcher.waitFor('finished')

  TerminalPresenter.stop()
}

example()
