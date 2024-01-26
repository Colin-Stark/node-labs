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

/*
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
*/

/*
const s1 = 'hello';
const s2 = new String('world');
console.log(typeof s1);
console.log(typeof s2);
*/

// function Car(make ,model,year){
// 	this.make = make;
// 	this.model=model;
// 	this.year=year;
// 	this.metadata={
// 		name: "test"
// 	}
// 	this.print=()=>{
// 		console.log(`${this.make} ${this.year}`)
// 	}
// }

// const car1 = new Car('plaid','Tesla', 2023);

/*
const word = "winner";
console.log(word.charAt(1));
*/


// concepts
/**
 * padStart && padEnd
 * endsWith
 */

// const pa = "blame";
// const sw = pa.s
// console.log(pa.padEnd(6,'s'));

/**
 * AARRAYS IN JAVASCRIPT
 */

// const arr = [1, 'hello', 1.4, '1'];

// // console.log(arr);
// console.log[1];

/**
 * 
 * ARRAY DESTRUCTURING
 * 
 * same as doing
 * const first = arr[0];
 * const greeting = arr[1];
 */
// const[first,greeting]=arr; 

// console.log(first, greeting);

// useful example

// const student = [10023, 'JOHN', 'DOE', '1ST SEMESTER' ];

// const [ID, FIRSTNAME, LASTNAME, SEMESTER]=student;

// console.log(ID, FIRSTNAME, LASTNAME, SEMESTER);

// const dateString = '17/04/2024';
// const elms = dateString.split('/');
// console.log(elms);
// const [DD, MM, YYYY]=elms;
/**
 * ASSUMING WE DONT WANT THE FIRST VALUE 
 * IGNORING THE FIRST VALUE
 */
// const [, months, year] =elms;
// console.log(DD,MM,YYYY)
// console.log(months, year);
// console.log('Month: '+ months + ' ' + 'Year: '+ year);

/**
 * Using String literals
 * to simplify things
 */

// console.log(`Month:${months} Year:${year}`);

// const dateString = '17/02/2024';
// const elm=dateString.split('/');
// elm[1]='06'; // works even though elm is a constant
// console.log(elm);

/**
 * Transversing an array using foreach 
 */

// function printValue(value){
// 	console.log(`you have ${value}`)
// }

/**
 * 
 * @param {a} arraying  - parameter 1
 * @param {*} foo - parameter 2
 */

//part 1 style
// function modifiedForEach(arraying,foo){
// 	for(let i=0; i<arraying.length; i++){
// 		foo(arraying[i]);
// 	}
// }

// part 2 style using arrow function
// const modifiedForEach = (arraying,foo)=>{
// 	for(let i=0; i<arraying.length; i++){
// 		foo(arraying[i]);
// 	}
// }
// modifiedForEach(arr,printValue)

// arr.forEach(printValue);


/**
 * moving through an array
 */

// for(const value of arr){
// 	console.log(`i saw ${value}`);
// }


// arr.push(123); // add 123 as a suffix
// console.log(arr);
// arr.pop();// removes the last element , so 123 goes away
// console.log(arr);
// arr.pop() // removes the next last element which is '1' (object)
// console.log(arr);


/**
 * Removing specific element in array with array.splice
 * 
 * Difference between delete and splice is that
 * 	DELETE-  removes the value of the element and leave it empty
 * 	SPLICE - remove the index and the value
 * 	CONCAT - Combines two array together
 * 	JOIN - Combines all element in an array and seperates them with character that is specified
 */

const learnMapArray = [1, 2, 3];
const multiplier = learnMapArray.map(function(elm){
	return elm*2
})

console.log(multiplier);



