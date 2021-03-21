let number = process.argv;

let startRange = number[2];
let endRange = number[3];
console.log(startRange);
console.log(endRange);

if(endRange>startRange) {
    if(startRange==1) {
        console.log("Not Prime");
    }
    else {
        for(let i=startRange;i<=endRange;i++) {
            for(let j=2;j<=i;j++) {
                if(j==i) {
                    console.log("Prime number: "+i);
                }
                if(i%j==0)
                    break;   
            }
        }
    }
}  