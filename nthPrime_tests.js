const { nthPrime } = require("./test_functions.js");

QUnit.module("nthPrime function testing", () => {
    QUnit.test("1th Prime", function(assert) {
        assert.equal(nthPrime(1), 2, "1st prime number is 2");
    });

    QUnit.test("5th Prime", function(assert) {
        assert.equal(nthPrime(5), 11, "5th prime number is 11");
    });

    QUnit.test("10th Prime ", function(assert) {
        assert.equal(nthPrime(10), 29, "10th prime number is 29");
    });
})