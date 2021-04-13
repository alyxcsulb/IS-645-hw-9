// load the module
const circle = require("./circle.js");

// set radius to 3 per instructions 
const radius = 3;

// export functions to console log
console.log(`The circumference of a circle with a radius of ${radius} is ${circle.Circumference(radius)}`);
console.log(`Its area is ${circle.Area(radius)}`);