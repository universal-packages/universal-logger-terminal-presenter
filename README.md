# Logger Terminal Presenter Transport

[![npm version](https://badge.fury.io/js/@universal-packages%2Flogger-terminal-presenter.svg)](https://www.npmjs.com/package/@universal-packages/logger-terminal-presenter)
[![Testing](https://github.com/universal-packages/universal-logger-terminal-presenter/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-logger-terminal-presenter/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-logger-terminal-presenter/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-logger-terminal-presenter)

Terminal presenter transport for the universal logger where [TerminalPresenter](https://github.com/universal-packages/universal-terminal-presenter) is present.

## Install

```shell
npm install @universal-packages/logger-terminal-presenter

npm install @universal-packages/terminal-presenter-transport
```

## TerminalPresenterTransport

By installing the package you can configure the logger to use it by name.

> Avoid the default `terminal` transport that comes with the logger package since it will conflict with the terminal presenter functionality.

```js
import { Logger } from '@universal-packages/logger'

const logger = new Logger({ transports: ['terminal-presenter', 'local-file'] })
```

### Log configuration

When printing categories you can configure the background color and the text color. See [TerminalDocument Colors](https://github.com/universal-packages/universal-terminal-document?tab=readme-ov-file#colors).

```js
logger.log({ level: 'INFO', message: 'Hello World', category: 'MY_APP' }, { categoryBackgroundColor: 'red', categoryColor: 'white' })
```

## Typescript

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
