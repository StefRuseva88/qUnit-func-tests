const { isPalindrome } = require("./test_functions.js");

QUnit.module("isPalindrome function testing", () => {
    QUnit.test("Single palindrome word", function(assert) {
        assert.ok(isPalindrome("racecar"), "Single palindrome word");
    });

    QUnit.test("Palindrome sentence", function(assert) {
        assert.ok(isPalindrome("A man, a plan, a canal, Panama!"), "Palindrome sentence");
    });

    QUnit.test("Not a palindrome word", function(assert) {
        assert.notOk(isPalindrome("hello"), "Identifying 'hello' as not a palindrome");
    });

    QUnit.test("Empty string", function(assert) {
        assert.notOk(isPalindrome(""), "Identifying empty string as not a palindrome");
    });
})
