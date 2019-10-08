describe('FizzBuzz game', function() {
    describe("number you gave", function() {
        it("should be divisible by 3", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
    });
});