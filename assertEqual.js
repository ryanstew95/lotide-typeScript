var assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log("\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 Assertion Passed: ".concat(actual, " === ").concat(expected));
    }
    else {
        console.log("\uD83E\uDD2C\uD83E\uDD2C\uD83E\uDD2C Assertion Failed: ".concat(actual, " !== ").concat(expected));
    }
};
// Example Usage:
assertEqual(2 + 2, 4);
assertEqual("hello", "hello");
assertEqual(true, false);
