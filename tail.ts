import { assertEqual } from "./assertEqual";

const tail = function<T>(array: T[]): T | undefined {
  return array.slice(1)[0];
};

// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);