import { assertEqual } from "./assertEqual";

const head = function<T>(array: T[]): T | undefined {
  return array[0];
};

const exampleArray: number[] = [1, 2, 3];
const result = head(exampleArray);
console.log(result); // Output: 1
