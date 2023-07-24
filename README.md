# Lucid Design System - Components :large_blue_diamond:

![lucid-logo](https://github.com/lucidds/lucid-components/assets/39086256/cc13625a-15b8-4812-9e9d-28bde48a9ff0)

The Lucid Design System is a modular and reusable design system, built with Web Components and optimized for React, Vue, and Angular.

## Index

- [Lucid Design System - Components](#)
  - [Index](#index)
  - [How to use](#how-to-use)
    - [Web Components](#web-components)
    - [Angular](#angular)
    - [React](#react)
    - [Vue](#vue)
  - [Installation](#installation)
  - [Development](#development)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure

The project is organized into a monorepo using [Lerna](https://lerna.js.org/) and [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/). Here is the project structure:

```bash
/lucid-design-system
../packages
..../core
....../components
....../tokens
....../utils
..../react
....../components
..../vue
....../components
..../angular
....../components
../docs
```

## Installation

To install all project dependencies, run:

```bash
yarn install
```

## Development

To start developing, navigate into the package you want to work on and start your local development environment.

For example, to start working on the core package:

```bash
cd packages/core
yarn start
```

## Documentation

The project's documentation can be found in the `/docs` folder.

## Contributing

We are always open to contributions. Please read our contribution guide for more information.

## License

This project is licensed under the [MIT Licens](LICENSE).

