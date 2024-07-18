const { pascalsTriangle } = require("./test_functions.js");

QUnit.module("pascalsTriangle function testing", () => {
    QUnit.test("0 as parameter", function(assert) {
        assert.deepEqual(pascalsTriangle(0), [], "Pascal's triangle with 0 rows");
    });

    QUnit.test("1 as parameter", function(assert) {
        assert.deepEqual(pascalsTriangle(1), [[1]], "Pascal's triangle with 1 row");
    });

    QUnit.test("5 as parameter", function(assert) {
        assert.deepEqual(pascalsTriangle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], "Pascal's triangle with 5 rows");
     });

    QUnit.test("8 as parameter", function(assert) {
        assert.deepEqual(pascalsTriangle(8), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1]], "Pascal's triangle with 8 rows");
    });
})
