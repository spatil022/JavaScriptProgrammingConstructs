let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);

let firstOperation = a + b*c;
let secondOperation = c + a/b;
let thirdoperation = a%b + c;
let fourthoperation = a*b + c;

let maxNumber = firstOperation;
let flag = 'firstOperation';
if(maxNumber < secondOperation) {
    maxNumber = secondOperation
    flag = 'secondOperation';
} else if(maxNumber < thirdoperation) {
    maxNumber = thirdoperation;
    flag = 'thirdOperation';
} else {
    maxNumber = fourthoperation;
    flag = 'fourthOperation';
}

console.log('Maximum Values is of '+flag+' operation with value '+ maxNumber);