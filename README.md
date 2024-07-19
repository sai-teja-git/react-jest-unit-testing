# Vite + React + TS + Jest Unit testing

## Description

This project is a web application built using Vite, React, and TypeScript. It is designed to provide a fast and efficient development experience with modern JavaScript tools. The application is thoroughly tested with Jest to ensure code quality and reliability.

## Features

- **Vite**: Fast and modern build tool optimized for web development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Jest**: Delightful JavaScript Testing Framework with a focus on simplicity.
- **Unit Testing**: Comprehensive test cases using Jest to ensure the application functions correctly.

## Getting Started

### Prerequisites

Ensure you have the following software installed on your local development machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sai-teja-git/react-jest-unit-testing.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd react-jest-unit-testing
   ```

3. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, use the following command:

Using npm:

```bash
npm run dev
```

The application will be available at `http://localhost:3200` or the specified port.

### Running Unit Tests

To execute the unit tests using Jest, run the following command:

Using npm:

```bash
npm run test
```

### Unit testing set up

for new repo, install jest and its dependency packages

```sh
npm i -D @testing-library/jest-dom jest @types/jest ts-jest jest-environment-jsdom
```

```sh
npm i -D @testing-library/react @testing-library/user-event identity-obj-proxy ts-node jest-transformer-svg
```

add/update `test` command in package.json

```package.json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest"
  }
```

To check whether jest is working or not add basic code in `App.tsx` file

```tsx
// src/App.spec.tsx

test("demo", () => {
  expect(true).toBe(true);
});
```

After that add basic case

```tsx
// src/App.spec.tsx

import { render } from "@testing-library/react";
import App from "../App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
```

it will fail because we haven't configured jest config. create `jest.config.ts` in your root directory and add below code

```ts
// jest.config.ts

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },

  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
};
```

create `jest.setup.ts` file in test folder and add below import

```ts
// src/test/jest.setup.ts

import "@testing-library/jest-dom";
```

add compiler options in `tsconfig.json`

```json
{
  .... other config
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react-jsx",
  },
  "include": [
    "src"
  ]
}
```

### Coverage

install `jest-html-reporter` for unit test case report.

```sh
npm i -D jest-html-reporter
```

update `jest.config.ts` with following config.

```ts
export default {
  // jest.config.ts

  //  ...other config
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test/coverage",
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "./test/report.html",
      },
    ],
  ],
};
```

you can set the coverage and report generation path

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
