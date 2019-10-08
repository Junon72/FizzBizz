describe('FizzBuzz game', function() {
    describe("number you gave", function() {
        it("should be divisible by 3", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("should be deivisible by 5", function() {
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("should be divisible by 3 and 5", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("is not a number at all, and cannot be divided", function() {
            expect(fizzBuzz("String")).toBe("Not a number");
        });
        it("is not an integer", function() {
            expect(fizzBuzz(6.34)).toBe("Not an Integer");
        });
    });
});