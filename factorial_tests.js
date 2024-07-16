const { factorial } = require("./test_functions.js")

QUnit.module("factorial function testing", () => {
    QUnit.test("Positive number", function(assert) {
        assert.equal(factorial(5), 120, "Factorial of 5 is 120");
    });

    QUnit.test("Zero as parameter", function(assert) {
        assert.equal(factorial(0), 1, "Factorial of 0 is 1");
    });

    QUnit.test("Negative number", function(assert) {
        assert.equal(factorial(-3), 1, "Factorial of -1 is 1");
    });
})