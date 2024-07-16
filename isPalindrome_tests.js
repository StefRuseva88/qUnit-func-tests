const { isPalindrome } = require("./test_functions.js");

QUnit.module("isPalindrome function testing", () => {
    QUnit.test("Single palindrome word", function(assert) {
        assert.ok(isPalindrome("racecar"), "Identifying 'racecar' as a palindrome");
    });

    QUnit.test("Pasindrome sentence", function(assert) {
        assert.ok(isPalindrome("A man, a plan, a canal, Panama!"), "Identifying 'A man, a plan, a canal, Panama!' as a palindrome");
    });

    QUnit.test("Not a palindrome word", function(assert) {
        assert.notOk(isPalindrome("hello"), "Identifying 'hello' as not a palindrome");
    });

    QUnit.test("Empty string", function(assert) {
        assert.notOk(isPalindrome(""), "Identifying empty string as not a palindrome");
    });
})