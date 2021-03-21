let number = process.argv;
let factorial = 1;
for(let i = 1; i <= number[2]; i++) {
    factorial *= i; 
}

console.log('factorial of '+number[2]+' is '+factorial); 