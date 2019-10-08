# CodeInstitute

Interactive Frontend Development - Test-Driven Development Using Jasmine

## FizzBuzz

Your challenge is to write some tests for the FizzBuzz game.

FizzBuzz is a classic programming problem that is often asked as an interview question. Create a function called fizzBuzz. This function should take in number as a parameter. The function should do the following:

-   If the number is divisible by 3 and 5, then return "FizzBuzz"
-   If the number is divisible by 3, then return "Fizz"
-   If the number is divisible by 5, then return "Buzz"
-   Else just return the number

Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function meets the above requirements. Make sure that you test all different "types" of inputs that the function may receive.

###Steps:
1.  Described the FizzBuzz game

        a. Testing if number is divisible by 3 and 5, 3 or 5
        b. Want to see result 0
        c. Expecting 9 % 3 to return "Fizz"
        d. Expecting 10 % 5 to return "Buzz"
        e. Expecting 15 % 3 & to return "FizzBuzz"

2.  Translated to a code in calc.js
        (fizzBuzz 9, 3).toBe("Fizz")
```
describe('FizzBuzz game', function() {
    describe("Number to divide", function() {
        it("should be divisible by 3", function() {
            expect(fizzBuzz(9%3)).toBe("Fizz");
        });
    });
});
```
Test results failure - fizzBuzz is not defined

3.  Write the FizzBuzz function in calc.js