//Q2. Write a program to have 3 variables (all three are number) and output the highest/greatest/maximum of all three.
 var num1 = 3; 
 var num2 = 9; 
 var num3 = 7; 
var largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);                                    