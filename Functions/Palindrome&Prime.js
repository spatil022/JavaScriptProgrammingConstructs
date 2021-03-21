function primeNumberChecker(number){
    console.log("Number is: "+number);
    if(number==1)
        console.log("Not Prime");
    else{
        for(let i=2;i<=number;i++){
            if(i==number){
                console.log("Prime");
                return true;     
            }
            if(number%i==0){
                console.log("Not prime");
                return false;
            }
        }
    }
}

function getPalindrome(number){
    let palindrome=0;
    while(number>0){
        let remainder = number%10;
        palindrome = palindrome*10 +remainder;
        number=Math.floor(number/10);
    }
    return palindrome;
}

let number = process.argv; 
let isPrime = primeNumberChecker(number[2]);
if(isPrime==false)
    console.log(" Number is not a Palindrome ");
if(isPrime){
    console.log("Number is prime. Check for Palindrome .....")
    let palindrome = getPalindrome(number[2]);
    primeNumberChecker(palindrome);
}