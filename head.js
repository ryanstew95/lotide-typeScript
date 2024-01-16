"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assertEqual_1 = require("./assertEqual");
var head = function (array) {
    return array[0];
};

// testing:
// (0, assertEqual_1.assertEqual)(head([5, 6, 7]), 5);
// (0, assertEqual_1.assertEqual)(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// (0, assertEqual_1.assertEqual)(head([2]), 2);
// (0, assertEqual_1.assertEqual)(head([]), undefined);
