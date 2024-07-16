# qUnit functions and tests

![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
### This is a test project for **Front-End Technologies** May 2024 Course @ SoftUni

## Table of Contents
1. [Create Functions for Testing](#create-functions-for-testing)
2. [Export / Import Functions (CommonJS)](#export--import-functions-commonjs)
3. [Install QUnit](#install-qunit)
4. [Write Tests for All Functions](#write-tests-for-all-functions)
   - [Test "isEven" Function](#test-iseven-function)
   - [Test "factorial" Function](#test-factorial-function)
   - [Test "isPalindrome" Function](#test-ispalindrome-function)
   - [Test "fibonacci" Function](#test-fibonacci-function)
   - [Test "nthPrime" Function](#test-nthprime-function)
   - [Test "pascalsTriangle" Function](#test-pascalstriangle-function)
   - [Test "isPerfectSquare" Function](#test-isperfectsquare-function)
5. [Asynchronous Testing](#asynchronous-testing)
   - [Test "fetchData" Function](#test-fetchdata-function)
   - [Test "fakeDelay" Function](#test-fakedelay-function)
6. [Contributing](#Contributing)
7. [License](#License)
8. [Contact](#Contact)

## Create Functions for Testing

Before we start testing with QUnit, we need to create a few functions to use as our test objects. Follow these steps to write your functions for testing:

### Steps

1. **Create your VS Code folder and file for functions:**
   - First, create a folder named `function_and_tests`.
   - Open this folder. Choose `File`, then `Open Folder` from the menu.
   - Right-click on the `EXPLORER` tab and choose `New File…`.

2. **Create a JS file and name it `test_functions.js`:**

3. **Open the file and write the functions we will test later.**
   
### Functions

- **Sum Function**: Returns the sum of two numbers.
- **isEven Function**: Checks if a given number is even and returns a boolean.
- **Factorial Function**: Calculates the factorial of a number using recursion.
- **isPalindrome Function**: Checks if a string is a palindrome.
- **Fibonacci Function**: Generates the Fibonacci sequence up to the specified number of terms.
- **nthPrime Function**: Finds the nth prime number.
- **pascalsTriangle Function**: Generates Pascal's triangle up to the specified number of rows.
- **isPerfectSquare Function**: Checks if the given parameter number is a perfect square.

## Export / Import Functions (CommonJS)

Now that we have the functions ready for testing, we need to export them so we can import them into another file where we will write our tests.

### Steps

1. **Export Functions**: In `test_functions.js`, add the following code to export the functions:
    ```javascript
    module.exports = {
        sum,
        isEven,
        factorial,
        isPalindrome,
        fibonacci,
        nthPrime,
        pascalsTriangle,
        isPerfectSquare
    };
    ```

2. **Import Functions**: Create a JS file named `sum_tests.js` and write the following code to import the `sum` function:
    ```javascript
    const { sum } = require('./test_functions');
    ```

3. **Check Import**: Test if the import is working properly by executing the code.

## Install QUnit

To write tests, we need a test framework. We will install QUnit.

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

2. Run Tests: Open `package.json` and change the value of the `test` sub-property to `"qunit"`. Then, execute the command `npm test sum_tests.js`.

## Write Tests for All Functions

### Test "isEven" Function

1. Create a new file named `isEven_tests.js`.
2. Import the `isEven` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test isEven_tests.js`.

### Test "factorial" Function

1. Create a new file named `factorial_tests.js`.
2. Import the `factorial` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test factorial_tests.js`.

### Test "isPalindrome" Function

1. Create a new file named `isPalindrome_tests.js`.
2. Import the `isPalindrome` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test isPalindrome_tests.js`.

### Test "fibonacci" Function

1. Create a new file named `fibonacci_tests.js`.
2. Import the `fibonacci` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test fibonacci_tests.js`.

### Test "nthPrime" Function

1. Create a new file named `nthPrime_tests.js`.
2. Import the `nthPrime` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test nthPrime_tests.js`.

### Test "pascalsTriangle" Function

1. Create a new file named `pascalsTriangle_tests.js`.
2. Import the `pascalsTriangle` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test pascalsTriangle_tests.js`.

### Test "isPerfectSquare" Function

1. Create a new file named `isPerfectSquare_tests.js`.
2. Import the `isPerfectSquare` function.
3. Write tests to check various cases.
4. Run tests by executing `npm test isPerfectSquare_tests.js`.

## Asynchronous Testing

### Test "fetchData" Function

1. Create a file named `async_test_functions.js`.
2. Write two async functions – one for asynchronous fetch and another to simulate an asynchronous delay.
3. Export these functions.

### Test "fetchData" Function

1. Create a file named `fetchData_tests.js`.
2. Import the `fetchData` function.
3. Write tests for various cases using the Zippopotamus API.
4. Execute the tests with the command `npm test fetchData_tests.js`.

### Test "fakeDelay" Function

1. Create a file named `fakeDelay_tests.js`.
2. Import the `fakeDelay` function.
3. Write a test with a delay of 1000 milliseconds.
4. Execute the test with the command `npm test fakeDelay_tests.js`.

## Contributing
Contributions are welcome! If you have any improvements or bug fixes, feel free to open a pull request.

## License
This project is licensed under the [MIT License](LICENSE). See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or suggestions, please open an issue in the repository.
