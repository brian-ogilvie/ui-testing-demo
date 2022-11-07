# Basics of testing with Jest

## What is Jest?

Jest is Facebook’s open-source JavaScript testing framework

- Powerful, descriptive API for writing assertions
- Easy Mocking
- Learn more at [Jest.io](https://jestjs.io/)

## How do I organize my tests?

Every team and code base is different. Here's what I recommend:

- Name test files with the name of the file you're testing, adding `.test` in the extension.
- Save test files in a `__tests__` directory next to the file you're testing.
- Example:

```
some_directory
  |-- MyComponent.js
  |-- __tests__
    |-- MyComponent.test.js
```

The use of a `__tests__` folder matches with how Jest is configured by tools like `create-react-app`, telling the Jest crawler which files to run during testing.

## How do I run a test?

If you've used `create-react-app`, you'll have an npm script `test` in your `package.json`.
For example, with the above file structure, you would test `MyComponent` by running this in your CLI:

```
npm run test MyComponent
```

NOTE: ReactScripts actually adds the `--watch` flag to the jest command, which runs the test in watch mode, automatically running the test again any time files are saved.

If you have a different WebPack/Rollup/JestConfig setup in your code base, your run command may be different.

## Basic Jest Syntax

```
// SomeModule.test.js
import SomeModule from '../SomeModule';

// Any global setup or mocking with jest.mock() or jest.fn()

describe('SomeModule', () => {
  beforeEach(() => {
    // Clear your mock calls?
  });

  afterEach(() => {
    // Any necessary cleanup. Reset DOM? Unmock a module?
  });

  test('does something', () => {
    // ...invoke your code
    expect(/* result */).toBe(/* expected result */);
  });

  test('does something else', () => {
    // ...invoke and assert
  });
});
```

## Jest Assertions: expect… what?

### About Equality:

- `.toBe()` -> Strict, referential equality
- `.toEqual()` -> Shallow, value equality

### About DOM Elements:

- `.toBeInTheDocument()`
- `.toBeVisible()`
- `.toHaveTextContent(<string or RegEx>)`

### About Mock Functions:

- `.toHaveBeenCalled()`
- `.toHaveBeenCalledWith(<...args>)`
- `.toHaveBeenCalledTimes(<number>)`

### Negative Assertions:

- `.not.toBe...` or `.not.toHave...`
