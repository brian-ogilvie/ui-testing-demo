# Example: Rendering and Testing a React Component

## Assignment

Database Service Selector Component

## Requirements

- Render a select menu of DB services by their name.
- State of selected value is managed by parent component (probably a form).
- No initial selectoion.
- Should update selected serviceID in the parent component when user makes a selection.
- List should be dynamically populated with options from server.

## Approach

- Pick a requirement that seems easy to test first.
- Start with hardcoded data, not data from the server.
- Where should we hardcode the data?
  - Depends on your app. Maybe we use a GraphQL backend. In that case, most components get a fragmentRef passed in as props.
  - We'll simulate that paradigm by passing our hardcoded data in as props.
  - Easy to replace later with graphQL data.

## Coding Time!

Open [DBServiceSelector-start.test.js](../src/Components/__tests__/DBServiceSelector-start.test.js) and folow the instructions.

If you get stuck, you can see an example solution in [DBServiceSelector-done.test.js](../src/Components/__tests__/DBServiceSelector-done.test.js)

To see what the finished version actually looks like in the browser, fire up the app (`npm start`) and head over to `localhost:3000`.
