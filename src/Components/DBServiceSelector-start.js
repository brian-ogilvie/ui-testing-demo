
export default function DBServiceSelector(
  // Step 1: Add `services` to Props 
) {

  /*
    Step 2:
    - Replace the return statement below.
    - Map the services from props
    - Use <select> and <option> to render the list.
    - REMEMBER: Only enough code to get the test to pass!
      - You can pass placeholder props to <select> for now.
        e.g. value={null} onChange={() => {}}
    - Stop here when the test passes. Return to the test file.
  */
  return (
    <div />
  );
}

/*
  Step 3:
  - Add to the Props type definition above.
    - serviceID: ?number, setServiceID: number => void
  - Pass those values into <select> where appropriate.
  - Hint: You'll probably need to create an event handler to read the new value
    from an onChange event, and pass that into setServiceID. 
  - Save to run the test. If it's passing, return to the test file.
*/