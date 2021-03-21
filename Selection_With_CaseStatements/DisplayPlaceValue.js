const UNIT =1;
const TEN =2;
const HUNDRED =3;
let num = Math.ceil(Math.random()*1000);
console.log("Number is: "+number);
let choice = Math.floor(Math.random()*10)%3+1;
switch(randomChoice){
    case UNIT:
        console.log("UNIT: ");
        console.log(number%10);
        break;
    case TEN:
        console.log("TEN: ");
        console.log(Math.floor(number/10)%10);
        break;
    case HUNDRED:
        console.log("HUNDRED: ");
        console.log(Math.floor(number/100)%100);
} 