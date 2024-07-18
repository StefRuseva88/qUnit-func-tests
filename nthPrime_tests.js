const { nthPrime } = require("./test_functions.js");

QUnit.module("nthPrime function testing", () => {
    QUnit.test("1th Prime", function(assert) {
        assert.equal(nthPrime(1), 2, "1st prime number");
    });

    QUnit.test("5th Prime", function(assert) {
        assert.equal(nthPrime(5), 11, "5th prime number");
    });

    QUnit.test("10th Prime ", function(assert) {
        assert.equal(nthPrime(11), 31, "11th prime number");
    });
})
