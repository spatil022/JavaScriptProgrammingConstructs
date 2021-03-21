let magicNumber = Math.floor(Math.random() * 100 );
let userNumber = process.argv;
let start = 1;
let end = 100;

while(userNumber[2] != magicNumber) {
    if(userNumber[2] == magicNumber) {
        console.log('The magic number is '+ magicNumber);
    } else if(userNumber[2] < magicNumber) {
            userNumber[2] = (userNumber[2] + magicNumber)/2;
    } else {
        userNumber[2] = (userNumber[2] + magicNumber)/2;
    }
}