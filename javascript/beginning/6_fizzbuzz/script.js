var canDivide = function(devidedNumber, devidingNumber) {
    return (devidedNumber % devidingNumber) === 0;
}

var outputFizzBuzz = function(number) {
    if (canDivide(number, 15)) {
        return "FizzBuzz!";
    }
    if (canDivide(number, 5)) {
        return "Buzz!";
    }
    if (canDivide(number, 3)) {
        return "Fizz!";
    }
    return number;
}

var outputList = function(number) {
    for (i = 1; i <= number; i++) {
        var li = document.createElement('li');
        li.textContent = outputFizzBuzz(i);
        document.getElementById('fizzbuzz').appendChild(li);
    }
}

outputList(93);