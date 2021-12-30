//Q.3 Write a program to check the given number is a perfect square or not! (Don't use function).
var n=prompt("Enter a number ");
n=parseInt(n);

if(Math.sqrt(n)%1===0){
    alert( n+" is Perfect Square.");
}else{
    alert( n+ " is Not Perfect Square.");
}