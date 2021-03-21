let input = process.argv;
let feet = input[2];
let plotLengthFeet = input[3];
let plotBreadthFeet = input[4];
let totalPlots = input[5];

let inch = (feet / 12);
console.log(inch);
let plotAreaInMetres = (plotLengthFeet * plotBreadthFeet * 3.2804^2);
console.log(plotAreaInMetres);
let totalPlotArea = (totalPlots * plotAreaInMetres);
console.log(totalPlotArea);