let countHeads = 0, countTails = 0;
 do {
    let coinFlip = Math.floor((Math.random() * 10 % 2 )+ 1 );
    if(coinFlip == 1) {
        countHeads++;
        console.log('Heads');
    } else {
        countTails++;
        console.log('Tails');
    }
}while(countHeads != 11 && countTails != 11);

console.log("No of Head counts "+countHeads);
console.log("No of Tail counts "+countTails);