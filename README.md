# qUnit functions and tests

[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![QUnit](https://img.shields.io/badge/tested%20with-QUnit-9C4CB4.svg)](https://qunitjs.com/)

### This is a test project for **Front-End Technologies** May 2024 Course @ SoftUni
---
   
### Functions

- **Sum Function**: Adds two numbers and returns their sum.
- **isEven Function**: Determines if a given number is even and returns true or false.
- **Factorial Function**: Computes the factorial of a number recursively.
- **isPalindrome Function**: Verifies whether a string is a palindrome.
- **Fibonacci Function**: Generates the Fibonacci sequence up to a given number of terms.
- **nthPrime Function**: Returns the nth prime number.
- **pascalsTriangle Function**: Produces Pascal's Triangle up to a specified number of rows.
- **isPerfectSquare Function**: Checks whether a number is a perfect square.
- **fetchData Function**: Makes an API call to retrieve data from a specified URL and returns the response.
- **fakeDelay Function**: Simulates a delay by returning a promise that resolves after a specified number of milliseconds.
  
## Install QUnit
To write tests we will install QUnit.

### Steps
1. Open the Terminal in VS Code from `View` -> `Terminal`.
2. Write the command `npm init -y`.
3. After running the command, you should see the `package.json` file in the EXPLORER.
4. Install QUnit through npm by executing the command `npm install --save-dev qunit`.

### Write Tests
1. Create a QUnit module in `sum_tests.js`:
    ```javascript
    QUnit.module('Sum Function Tests', () => {
        QUnit.test('Sum of two positive numbers', assert => {
            assert.equal(sum(2, 3), 5, '2 + 3 should be 5');
        });
    });
    ```

2. Run the tests by modifying the test script in `package.json` to use QUnit:
    ```javascript
   "scripts": {
    "test": "qunit"
    }
    ```
## Tests for All Functions
1. **Sum Function** Tests:
- Test 1: Validate the sum of two positive numbers.
- Test 2: Check for the sum of a positive and a negative number.
- Test 3: Ensure the sum of two negative numbers works correctly.
- Test 4: Handle edge cases, such as summing zero with another number.
2. **isEven Function** Tests
- Test 1: Verify if an even number returns `true`.
- Test 2: Confirm that an odd number returns `false`.
- Test 3: Check boundary values like 0 and negative even/odd numbers.
3. **Factorial Function** Tests
- Test 1: Compute the factorial of a positive integer (e.g., 5!).
- Test 2: Ensure that the factorial of 0 returns 1.
- Test 3: Test for large numbers to evaluate function performance and accuracy.
4. **isPalindrome Function** Tests
- Test 1: Confirm that a valid palindrome string (e.g., "racecar") returns true.
- Test 2: Check for non-palindrome strings.
- Test 3: Ensure the function is case-insensitive and handles punctuation.
5. **Fibonacci Function** Tests
- Test 1: Generate the first 5 terms of the Fibonacci sequence.
- Test 2: Test edge cases like generating 1 or 0 terms.
- Test 3: Check if the function handles large inputs efficiently.
6. **nthPrime Function** Tests
- Test 1: Return the 5th prime number (which should be 11).
- Test 2: Handle boundary cases like the 1st prime number.
- Test 3: Check performance for larger prime numbers.
7. **pascalsTriangle Function** Tests
- Test 1: Generate Pascal’s Triangle for 5 rows and check the structure.
- Test 2: Ensure that invalid inputs (e.g., negative numbers) are handled gracefully.
- Test 3: Test the function for a single row.
8. **isPerfectSquare Function** Tests
- Test 1: Verify that perfect squares (e.g., 16) return true.
- Test 2: Ensure non-perfect square numbers return false.
- Test 3: Handle edge cases like 0 and 1, which are both perfect squares.
9. **fetchData Function** Tests
- Test 1: Validate the response from the API endpoint. Check that all keys and values match the expected output, including the properties inside the "places" array.
- Test 2: Test for a non-existent postcode and ensure that the response is undefined.
- Test 3: Handle an incorrect URL and check that an error or undefined is returned.
10. **fakeDelay Function** Tests
- Test 1: Ensure that the promise resolves after a 1000-millisecond delay. Use an assertion to verify the correct execution time.
- Test 2: Test for various delay times (e.g., 500ms, 2000ms) to verify the function handles different intervals.
- Test 3: Check for invalid inputs (e.g., negative numbers or non-numeric values) and confirm that the function returns an appropriate error or behavior.

## License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please open an issue in the repository.

--- 
### Happy Testing! 🚀
