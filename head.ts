import { assertEqual } from "./assertEqual";

const head = function<T>(array: T[]): T | undefined {
  return array[0];
};

// testing:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head([]), undefined);