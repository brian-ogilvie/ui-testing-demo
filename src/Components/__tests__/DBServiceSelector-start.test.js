import DBServiceSelector from '../DBServiceSelector-start';

import * as React from 'react';
import { render } from '@testing-library/react';

// eslint-disable-next-line no-unused-vars
const SERVICES = [
  {
    service_id: 1,
    service_name: 'SQL Server',
  },
  {
    service_id: 2,
    service_name: 'MySQL',
  },
];

describe('DBServiceSelector', () => {
  // eslint-disable-next-line no-unused-vars
  function TestRenderer() {
    return <DBServiceSelector />;
  }

  /*
    Step 1:
    - Update the TestRenderer code to pass `SERVICES` into the `DBServiceSelector` as a prop.
    - Write a test that checks that each service is rendered.
      - Hint: You can query the rendered DOM using the `screen` object from testing libary.
      - Hint: `screen` has a ton of useful query methods that start with `getBy...` or `queryBy...`
      - Hint: `getByLabelText()` could be useful.
      - Hint: `.toBeInTheDocument()` is a helpful jest assertion.
        For example: `expect(screen.getByLabelText('some text')).toBeInTheDocument();`
    - Run the test `npm run test DBServiceSelector-start`, and see it fail.
  */
  test('make me a real test', () => {
    // test body here.
    render(<DBServiceSelector />);
  });

  /*
    Step 2:
    - Open `DBServiceSelector-start.react.js`.
    - Follow the instructions there to make the test pass.
    - Come back here when it's passing!
  */

  /*
    Step 3:
    - Create a mock function `mockSetServiceID` at the top of the describe block.
    - Create a beforeEach block, and clear that mock function before each test. `jest.clearAllMocks()`
    - Update the TestRenderer code to pass two new props into DBServiceSelector:
      serviceID: null
      setServiceID: mockSetServiceID
    - Write a test verifying that clicking the list items sets the service ID.
      - Hint: You may need to trigger a `change` browser event on the selector.
      - Hint: Click on each list item using `fireEvent.change()`.
      - Hint: You can check the arguments to a mock function call
        using `.toHaveBeenCalledWith()`.
        For example: `expect(myMock).toHaveBeenCalledWith('some string');`
    - Save to run the test, and see it fail.
  */

  /*
    Step 4:
    - Open `DBServiceSelector-start.react.js`.
    - Follow the instructions there, starting at Step 3.
    - Come back here when the test is passing.
  */
});