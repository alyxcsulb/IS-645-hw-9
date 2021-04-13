// Declare const
const PI = Math.PI;
const Circumference = radius => 2 * PI * radius;
const Area = radius => PI * radius ** 2;

// Export the circumference module
module.exports.Circumference = Circumference;

// Export the area module
module.exports.Area = Area;