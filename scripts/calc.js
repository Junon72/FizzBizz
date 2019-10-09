fizzBuzz = function (number) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
        return "FizzBuzz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (typeof(number) !== "number") {
        return "Not a number";
    }
    else if (Number.isInteger(number) !== true) {
        return "Not an Integer";
    } else{
        alert("Try again with another number!");
    }
};