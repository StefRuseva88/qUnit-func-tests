const { isPerfectSquare } = require("./test_functions.js");

QUnit.module("isPerfectSquare function testing", () => {
    QUnit.test("1 as parameter", function(assert) {
        assert.ok(isPerfectSquare(1), "1 as parameter");
    });

    QUnit.test("4 as parameter", function(assert) {
        assert.ok(isPerfectSquare(4), "4 as parameter");
    });

    QUnit.test("9 as parameter", function(assert) {
        assert.ok(isPerfectSquare(9), "9 as parameter");
    });

    QUnit.test("16 as parameter", function(assert) {
        assert.ok(isPerfectSquare(16), "16 as parameter");
    });

    QUnit.test("2 as parameter", function(assert) {
        assert.notOk(isPerfectSquare(2), "2 as parameter");
    });

    QUnit.test("15 as parameter", function(assert) {
        assert.notOk(isPerfectSquare(15), "15 as parameter");
    });
})
