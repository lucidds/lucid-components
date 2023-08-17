# Contributing to Lucid Design System :large_blue_diamond:

Thank you for your interest in contributing to the Lucid Design System! This guide will walk you through the process of creating a new component for the system.

## Index

1. [Prerequisites](#prerequisites)
2. [Setting up your development environment](#setting-up-your-development-environment)
3. [Creating a new component](#creating-a-new-component)
4. [Testing your component](#testing-your-component)
5. [Documentation and examples](#documentation-and-examples)
6. [Submitting your component for review](#submitting-your-component-for-review)

## Prerequisites

Before starting, ensure you have:

- Node.js and Yarn installed on your machine.
- A fork of the Lucid Design System repository.

## Setting up your development environment

1. Clone your forked repository:

```bash
git clone git@github.com:lucidds/lucid-components.git
```

2. Clone your forked repository:

```bash
yarn install
```

## Creating a new component

1. Navigate to the `packages/core/components` directory.
2. Create a new directory with the name of your component (e.g., `Button`).
3. Inside the component directory, create the following files:
   - `ComponentName.js`: Where `ComponentName` is the name of your component. This file will contain your component's logic.
   - `Index.js`: This file will export your component.
   - `ComponentName.test.js`: Optional, but recommended. This file will contain tests for your component.
4. In `ComponentName.js`, define your component following the example below:
```javascript
class ComponentName extends HTMLElement {
  // Your component logic here
}

customElements.define('lucid-componentname', ComponentName);

```
5. In `Index.js`, export your component:
```javascript
export { default } from './ComponentName.js';

```

## Testing your component

1. Write tests for your component in `ComponentName.test.js` using Jest and Testing Library.
2. Run the tests:
```bash
yarn test
```

## Documentation and examples

Please provide detailed documentation for your component, including:

- Description and use case.
- Example usage.
- List of all properties, attributes, and methods.

## Submitting your component for review

1. Commit and push your changes to your forked repository.
2. Create a pull request to the main Lucid Design System repository.
3. Ensure all tests pass and you've followed the guidelines mentioned above.
4. Await review and address any feedback.

Thank you for contributing to the Lucid Design System! Your efforts help improve our community and products. :blue_heart:
