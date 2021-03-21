var number = process.argv;
console.log('The number is '+number[2]);
if(number[2] == 1){
    console.log('Not Prime');
}else {
    for(let  i = 2; i <= number[2] ; i++) {
        if(i == number[2]){
            console.log('Prime Number')
            break;
        }
        if(number[2] % i == 0) {
            console.log('Not a Prime Number');
            break;
        }
    }
} 