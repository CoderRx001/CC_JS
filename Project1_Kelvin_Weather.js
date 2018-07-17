// this is a constant veriable 
const kelvin = 293;

// this converts kelvin to celsius
let celsius = kelvin - 273;

// equation for fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// this rounds the sum down
fahrenheit = Math.floor(fahrenheit);

//equation for newton
let newton = celsius * (33/100);
// this rounds the sum down
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${newton} degrees Newton.`);