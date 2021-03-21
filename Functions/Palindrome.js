let number = process.argv;
 number1 = number[2];
 number2= number[3];

function checkPalindrome(number1,number2){
    let reverseNumber=0;
    while(number1>0){
        let rem = number1%10;
        reverseNumber = reverseNumber*10 +rem;
        number1=Math.floor(number1/10);
    }
    if(reverseNumber == number2)
        return true;
    else 
        return false;
}

let isPalindrome = checkPalindrome(number1,number2);
console.log("Numbers: "+number1+", "+number2);
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);
