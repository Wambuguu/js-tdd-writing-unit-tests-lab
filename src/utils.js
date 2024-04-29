// Your code here
export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  const cleanWord = word.replace(/[^A-Za-z]/g, "").toLowerCase();

  return cleanWord === reverse(cleanWord);
}

function reverse(string) {
  return string.split("").reverse().join("");
}
