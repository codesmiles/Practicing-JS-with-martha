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


let firstName = "Martha";
let lastName = "young";

console.log(`Welcome ${firstName}, ${lastName}`);


let add = 35, something = 30;

console.log(`Your answer is ${add + something}`);


let input = prompt(`Enter a month`, `value goes here`)

let month = input.toLowerCase();

/*switch (month) {
	case `january` || `march` || `december` || `may` || `july` || `august` || `october`:
		console.log(`${month} has 31 days.`);
		break;

	case `febuary`:
		console.log(`${month} has 28 days.`);
		break;

	case `april` || `september` || `june` || `november`:
		console.log(`${month} has 30 days.`)
		break;

	default: console.log(`${month} isn't a month`);


}*/

month === `january` || month ===`march` || month === `december` || month === `may` || month === `july` || month === `august` || month === `october` 
? console.log(`${month} has 31 days.`)
: month === `febuary`
? console.log(`${month} has 28 days.`)
: month === `april` || month === `september` ||month === `june` || `november` 
? console.log(`${month} has 30 days.`)
: console.log(`${month} isn't a month`)