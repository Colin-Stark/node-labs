// function to convert something
// what it does, we don't know yet
// function multiplyThreeNumbers(a, b, c) {
//     let d = a * b * c;
// }


//  Second style to create Function


// create a variable to hold your function
// const add = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };

// console.log('your added number is ' + add(2, 5));

// arguement objects
// console.log()


// function multiply(a, b) {
// 	console.log(arguments);
// 	let result = 1;
// 	for (let index = 0; index < arguments; index++) {
// 		result *= arguments[index];
// 	}
// 	return result;
// }

// console.log('Checking this argument stuff ' + multiply(2, 3, 4, 5, 6));


// function mult(a, b) {
// 	return a * b ?? "no number given";
// }
// console.log(mult());


// runtime function
// function runtimey(fn, ...params){
// 	fn(...params);
// }

// runtimey(console.log, 'test123', 456);
//example scenario
// function add(a,b){
// 	return a+b;
// }

// const result = add(5);
// isNaN(result)? console.log("invalid operation"): console.log(result);

// console.log(add(4));

// Using standard Libraries
// let maxvale = Math.max(1,24, 500);
// console.log(maxvale);

/*
*	scope
*/

// function foos(){
// 	const a = 10;
// 	console.log('your answer is',a);
// }

// foos();

// console.log(a);

/**
 * Any variable described with var has a functional scope
 * so var is now moved to line 79(imaginarily)
 */
// function fo(){

// 	{
// 		var a = 10;
// 	}
// 	{
// 		console.log(a);
// 	}
// }

// fo();

/**
 * try with let or const does not offer the same possibility
 * try this for confirrmed errors
 */
// function foo(){
// 	{
// 		const c =20;
// 	}
// 	{
// 		console.log(c);
// 	}
// }

// foo();

/**
 * This is a block scope so it would work
 * to drive the importance of this concept
 * move the statement in line 111 to line 115
 * and add a console.log(z) in line 125
 */
// function foo(){
// 	let z = 10;
// 	{
//
// 		{
//
// 			{
// 				console.log(z);
// 			}
// 		}
//
// 	}

// }

// foo();


// works
// foo()

// function foo(){
// 	console.log('foo invoked');
// }

// // doesnt work

// foo()
// const foo=()=>console.log('foo invoked');


// doesnt works
// foo()
// var foo=()=>console.log('foo invoked');

/**
 * WHY DOES IT NOT WORK
 * function created with the function keyword perfoms hoisting
 * function created with const expression or arrow are not hoisting
 * Read up on hoisiting in javascript
 */



/**
 * CLOSURE
 * Using closure to access what is not accessible.
 */
// function foo(){
// 	let a =5;
// 	return function fool(){
// 		a+=5;
// 		console.log(a);
// 	}
// }

// const bar = foo();
// let anotherResult = bar();
// anotherResult = bar();
// console.log(anotherResult);


/**
 * Functions without return type will give undefined
 * 
 */

function foo(){
	let a =5;
	return function fool(){
		a+=5;
		return a;
	}
}

const bar = foo();
let anotherResult = bar();
anotherResult = bar();
console.log(anotherResult);