// console.log(typeof 9.8 === typeof 10);
/*let a = Math.round(9.8);
console.log(a)
console.log(a === 10);*/

// Check if 'on' is found in both python and jargon
/*
let py = 'python';
let jg = 'jargon';
console.log(py.includes("on"),jg.includes("on"));*/


// console.log(Math. floor(Math. random() * (100 - 50 + 1)) + 50);


// Access the 'JavaScript' string characters using a random number.

// assigned a value
let js = "javascript";
console.log(js);

// converted the value to an array using the split('') method

js = js.split('');
console.log(js);

// set a variable that generates random numbers
let rdm = Math.random();

// Ensure the number generated is between 0 and 9
rdm = rdm * 10;
console.log(rdm)

// rounding them up to a whole number
rdm = Math.floor(rdm);
console.log(rdm);

// Access the array initially generated with the random number generated
js = js[rdm];
console.log(js);

