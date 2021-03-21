let number = process.argv;

while(number[2] % 2 == 0) {
    console.log(2+' ');
    number[2] /= 2;
}

for(let i = 3; i*i <= number[2]; i++) {
    while(n[2] % i == 0) {
        console.log(i+' ');
        number[2] /= i;
    }
}

if(number[2] > 2) {
    console.log(n[2]);
}