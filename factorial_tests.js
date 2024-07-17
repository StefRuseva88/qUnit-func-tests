const { factorial } = require("./test_functions.js")

QUnit.module("factorial function testing", () => {
    QUnit.test("Positive number", function(assert) {
        assert.equal(factorial(5), 120, "Positive number");
    });

    QUnit.test("Zero as input", function(assert) {
        assert.equal(factorial(0), 1, "Zero number");
    });

    QUnit.test("Negative number", function(assert) {
        assert.equal(factorial(-3), 1, "Negative number");
    });
})
