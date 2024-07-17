const { fibonacci } = require("./test_functions.js");

QUnit.module("fibonacci function testing", () => {
    QUnit.test("Zero parameter", function(assert) {
        assert.deepEqual(fibonacci(0), [], "Zero as input");
    });

    QUnit.test("One as parameter", function(assert) {
        assert.deepEqual(fibonacci(1), [0], "1 as input");
    });

    QUnit.test("Five as parameter", function(assert) {
        assert.deepEqual(fibonacci(5), [0, 1, 1, 2, 3], "5 as input");
    });

    QUnit.test("Ten as parameter", function(assert) {
        assert.deepEqual(fibonacci(10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], "10 as input");
    });
})
