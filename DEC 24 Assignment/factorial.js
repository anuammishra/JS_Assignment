//Q.1 Factorial of a number input is 5. factorial of 5 -> 5 * 4 * 3 * 2 * 1 factorial of 7 -> 7 * 6 * 5 * 4 * 3 * 2 * 1 -> Take n from the user and alert the factorial of that number.
const number = parseInt(prompt('Enter a positive integer: '));

if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

else if (number === 0) {
    console.log('The factorial of ' + number + ' is 1.');
}

else {
    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact =fact * i;
        console.log('The factorial of ' + number + ' is ' + fact);    
    }
    
}
