const { isPerfectSquare } = require("./test_functions.js");

QUnit.module("isPerfectSquare function testing", () => {
    QUnit.test("One as parameter", function(assert) {
        assert.ok(isPerfectSquare(1), "Identifying 1 as a perfect square");
    });

    QUnit.test("Four as parameter", function(assert) {
        assert.ok(isPerfectSquare(4), "Identifying 4 as a perfect square");
    });

    QUnit.test("Nine as parameter", function(assert) {
        assert.ok(isPerfectSquare(9), "Identifying 9 as a perfect square");
    });

    QUnit.test("Sixteen as parameter", function(assert) {
        assert.ok(isPerfectSquare(16), "Identifying 16 as a perfect square");
    });

    QUnit.test("Two as parameter", function(assert) {
        assert.notOk(isPerfectSquare(2), "Identifying 2 as not a perfect square");
    });

    QUnit.test("Fifteen as parameter", function(assert) {
        assert.notOk(isPerfectSquare(15), "Identifying 15 as not a perfect square");
    });
})