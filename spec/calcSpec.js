describe('FizzBuzz game', function() {
    describe("Number to divide", function() {
        it("should be divisible by 3", function() {
            expect(fizzBuzz(9%3)).toBe("Fizz");
        });
    });
});