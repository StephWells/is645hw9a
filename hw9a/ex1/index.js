//Load the module in the index file
const circle = require("./circle.js");

//testing circle measurements with a radius equal to 3
const circleMeasurements = circle();
console.log(circleMeasurements .circumference(3));
console.log(circleMeasurements .area(3));