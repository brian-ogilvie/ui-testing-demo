const DOG = /_/;

describe('DOG regex pattern', () => {
  test('should recognize `dog` by itself', () => {
    /*
      Step 1:
      - Update the `expect` statement below and save.
      - Run the test: `npm run test Dog-start`
      - The test should be failing now.
      - Change the DOG regex variable above to make the test pass.
    */

    // replace '_' with 'dog' to test the correct behavior
    expect(DOG.test('_')).toBe(true);
  });

  /*
    Step 2:
    - Uncomment the test block below and save.
    - This test should fail.
    - Change the DOG regex variable to make the test pass.
    - Hint: The Regular Expression for a word break is `\b`.
  */
  // test('should ignore `dog` as part of another word', () => {
  //   expect(DOG.test('hotdogman')).toBe(false);
  // });

  /*
    Step 3:
    - Write a test that shows the RegEx can find 'dog'
      in the middle of a sentence.
    - If it fails, make it pass.
  */

  /*
    Step 4:
    - Write a test that shows the RegEx can find 'Dog' or 'DOG'.
    - If it fails, make it pass.
  */
});
