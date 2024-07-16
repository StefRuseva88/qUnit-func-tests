const { isEven } = require("./test_functions.js")

QUnit.module("isEven function testing", () => {
    QUnit.test("Even number", function(assert) {
        assert.ok(isEven(2), "Identifying even number: 2");
        assert.notOk(isEven(3), "Identifying odd number: 3");
        assert.ok(isEven(0), "Identifying even number: 0");
    });

    QUnit.test("Odd number", function(assert) {
        assert.notOk(isEven(3), "Identifying odd number: 3");
    });

    QUnit.test("Zero as parameter", function(assert) {
        assert.ok(isEven(0), "Identifying even number: 0");
    });
})  