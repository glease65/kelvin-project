// The variable of kelvin is equal to 293
var kelvin = 250;

// The variable of celsius is equal to the kelvin variable minus 273
var celsius = kelvin - 273;

// The variable of farenheit is equal to celsius multiplied by nine fifths then add 32
var farenheit = (celsius * (9/5)) + 32;

// This will take the farenheit answer and round it down to the whole number
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);



// EXTRA CREDIT
// var newton = celsius * (33/100);

// newton = Math.floor(newton);

// console.log(`The temperature is ${newton} degrees Newton.`);
