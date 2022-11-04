const DOG = /\bdog\b/i;

describe('DOG regex pattern', () => {
  test('should recognize `dog` by itself', () => {
    expect(DOG.test('dog')).toBe(true);
  });

  test('should ignore `dog` as part of another word', () => {
    expect(DOG.test('hotdogman')).toBe(false);
  });

  test('should recognize `dog` in the middle of a sentence', () => {
    expect(DOG.test("I'd rather walk a dog than fly a cat.")).toBe(true);
  });

  test('is case insensitive', () => {
    expect(DOG.test('DOG')).toBe(true);
  });
});
