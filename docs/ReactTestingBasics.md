# Rendering and Testing a React Component

**"Arrange. Act. Assert"** --basic framework for any automated test.
<br/>
Testing React code will require more **Arranging** than plain JS.
<br/>
For that, we need a rendering library.

## React Testing Library

- Provides APIs for rendering React code and interacting with the generated DOM nodes.
- Useful for testing the application components in the way the user would use it.
- Learn more: [testing-library.com](https://testing-library.com/)

## Most Important Testing Library Imports

- `render()`: Exactly what it sounds like. Renders a react tree to a simulated browser.
- `screen`: Mutable object representing the current state of the DOM
  - Contains query methods for finding DOM elements.
- `fireEvent`: Take actions in the DOM as the user would.
  - e.g. `fireEvent.click(screen.getByText('Submit'))`;
- `cleanup()`: Return the screen to its state before the test.
  - NOTE: most new projects don't need this, as it is configured as the default, but it's good to be aware it exists when working in older projects.
