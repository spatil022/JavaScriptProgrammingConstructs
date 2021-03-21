let day = process.argv[2];
let month = process.argv[3];

if((day >= 20 && day <= 31 && month == 'March') || (day >= 1 && day <= 20 && month == 'June') ||
                         (day >= 1 && day <= 30 && month == 'April') || (day >= 1 && day <= 30 && month == 'May')) {
        console.log(true);
}
else {
    console.log(false);
}