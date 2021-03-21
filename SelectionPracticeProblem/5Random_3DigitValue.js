let number1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number3 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number4 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let number5 = Math.floor(Math.random() * (999 - 100 + 1) + 100);

let maxNumber = number1;
let minNumber = number1;

if(maxNumber < number2) {
    maxNumber = number2;
}
if(maxNumber < number3) {
    maxNumber = number3;
}
if(maxNumber < number4) {
    maxNumber = number4;
}
if(maxNumber < number5) {
    maxNumber = number5;
}

if(minNumber > number2) {
    minNumber = number2;
}
if(minNumber > number3) {
    minNumber = number3;
}
if(minNumber > number4) {
    minNumber = number4;
}
if(minNumber > number5) {
    minNumber = number5;
}

console.log('Maximum number is : '+ maxNumber);
console.log('Minimum number is : '+ minNumber);