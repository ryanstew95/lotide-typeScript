export const assertEqual = function (actual: any, expected: any): void {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Example Usage:
assertEqual(2 + 2, 4);
assertEqual("hello", "hello");
assertEqual(true, false);
