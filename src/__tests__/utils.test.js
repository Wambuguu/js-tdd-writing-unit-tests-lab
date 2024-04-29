import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true when the word is the same forward and backward", () => {
    const palindrome = "racecar";

    const result = isPalindrome(palindrome);

    expect(result).toBe(true);
  });

  it("returns false when the word is not the same forward and backward", () => {
    const nonPalindrome = "car";

    const result = isPalindrome(nonPalindrome);

    expect(result).toBe(false);
  });

  it("returns true for words that are a combination of uppercase and lowercase letters", () => {
    const mixedCasePalindrome = "RaCecar";

    const result = isPalindrome(mixedCasePalindrome);

    expect(result).toBe(true);
  });

  it("throws an error if the input has any non-alphabetic characters", () => {
    const wordWithNonAlphabetic = "race car";

    expect(() => isPalindrome(wordWithNonAlphabetic)).toThrow();
  });

  it("throws an error if the input is an empty string", () => {
    const emptyString = "";

    expect(() => isPalindrome(emptyString)).toThrow();
  });
});
