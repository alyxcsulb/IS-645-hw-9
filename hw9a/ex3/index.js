// use the moment from moment.js

var moment = require('moment'); // require
moment().format(); 

// Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// Compute the number of years since the specified date
console.log(moment("1976-11-26").fromNow());