const { isEven } = require("./test_functions.js")

QUnit.module("isEven function testing", () => {
    QUnit.test("Even numbers", function(assert) {
        assert.ok(isEven(2), "Identifying even number: 2");
        assert.ok(isEven(10), "Identifying even number: 10");
        assert.ok(isEven(100), "Identifying even number: 100");
    });

    QUnit.test("Odd numbers", function(assert) {
        assert.notOk(isEven(3), "Identifying odd number: 3");
        assert.notOk(isEven(3), "Identifying odd number: 9");
        assert.notOk(isEven(3), "Identifying odd number: 21");
    });

    QUnit.test("Zero as input", function(assert) {
        assert.ok(isEven(0), "Identifying even number: 0");
    });
})  
