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
function runtimey(fn, ...params){
	fn(...params);
}

runtimey(console.log, 'test123', 456);
