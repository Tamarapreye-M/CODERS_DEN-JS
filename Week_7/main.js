// Exercise level 1

/*1 */
function fullName() {
	console.log(`my name is Tamara`);
}
fullName();

/*2 */
function myFullName(myFirstName, myLastName) {
	//return myFirstName + ' ' + myLastName; //same as below
	return `${myFirstName} ${myLastName}`;
}
console.log(myFullName("Tamara", "Michael"));

/*3 */
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(7, 235));

/*4 */
// find the area of a rectangle
// using function expression and anonymous self invoking function at the same time
const areaOfRectangle = (function (length, width) {
	return length * width;
})(7, 8);
console.log(areaOfRectangle);

// using arrow function

const area = (length, width) => length * width;
console.log(area(20, 10));

/*5 */
// calculate perimeterOfRectangle
// using function declaration
function perimeterOfRectangle(length, width) {
	let perimeter = 2 * (length + width);
	return perimeter;
}
console.log(perimeterOfRectangle(4, 5));

// using arrow function

const perimeter = (length, width) => 2 * (length + width);
console.log(perimeter(5, 5));

/*6 */
// using only arrow function
const volumeOfRectPrism = (length, width, height) => length * width * height;
console.log(volumeOfRectPrism(2, 3, 4));

/*7 */
// using self invoking functions
const areaOfCircle = (function (r) {
	let solution = Math.PI * r * r;
	// return Math.round(solution); or
	return solution.toFixed(2);
})(7);
console.log(areaOfCircle);

// using arrow
const circleArea = (r) => (Math.PI * r * r).toFixed(2);
console.log(circleArea(7));

/*8 */
// using only arrow function
const circumOfCircle = (r) => (2 * Math.PI * r).toFixed(3);
console.log(circumOfCircle(7));

/*9 */
const density = (mass = 10, vol = 5) => mass / vol;
console.log(density());
console.log(density(12));
console.log(density(12, 6));

/*10 */
const speed = (distance, time) => distance / time;
console.log(speed("2", 60));

/*11 */
const findWeight = (mass, gravity) => mass * gravity;
console.log(findWeight(200, 3));

/*12 */
const convert = (oF, oC) => (oF = (oC * 9) / 5 + 32);
console.log(convert(3000, 100));

/*13 */
const bmiCalculator = (weight, height) => {
	let bmi = weight / (height * height);
	switch (true) {
		case bmi < 18.5:
			return "Underweight";
		case bmi >= 18.5 && bmi <= 24.9:
			return "Normal weight";
		case bmi >= 25 && bmi <= 29.9:
			return "Overweight";
		case bmi > 30:
			return "Obese";
		default:
			return "Can't read bmi";
	}
	// return bmi;
};
console.log(bmiCalculator(63.4, 1.8));

/*14 */
const checkSeason = (input) => {
	let month = input.toLowerCase();
	switch (month) {
		case "december":
		case "january":
		case "february":
			return "Winter";
		case "march":
		case "april":
		case "may":
			return "Autumn";
		case "june":
		case "july":
		case "august":
			return "Spring";
		case "september":
		case "october":
		case "november":
			return "fall";
		default:
			return "Please enter a month";
	}
};
console.log(checkSeason("JAnuary"));

/*15 */
// finding max without using math.max

const findMax = (...argument) => {
	let max = 0;
	for (let num of argument) {
		num > max ? (max = num) : max;

		// using conditionals in functions is tricky
		// switch (true) {
		//   case num > max:
		//     return max = num;
		// }
	}
	return max;
};
console.log(findMax(0, 10, 5, 789, 9085577));
10;
console.log(findMax(0, -10, -2));
0;

// Exercise level 2

/*1 */
const solveLinEquation = (x, y) => {
	let a = 5;
	let b = 10;
	let c = 20;
	let solution = a * x + b * y + c;
	return solution;
};

console.log(solveLinEquation(5, 3));

/*2 */
// program to solve quadratic equation
function solveQuadEquation(a, b, c) {
	let root1, root2;

	// let a = 1;
	// let b = -6;
	// let c = 9;

	// calculate discriminant
	let discriminant = b * b - 4 * a * c;

	// condition for real and different roots
	if (discriminant > 0) {
		root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

		// result
		return `The roots of quadratic equation are ${root1} and ${root2}`;
	}

	// condition for real and equal roots
	else if (discriminant == 0) {
		root1 = root2 = -b / (2 * a);

		// result
		return `The roots of quadratic equation are ${root1} and ${root2}`;
	}

	// if roots are not real
	else {
		let realPart = (-b / (2 * a)).toFixed(2);
		let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

		// result
		return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
	}
}
console.log(solveQuadEquation(1, -6, 9));

/*3 */
function printArray(arguments) {
	for (let a of arguments) {
		console.log(a);
	}
}
console.log(printArray([1, 2, 3]));

/*4 */

/*5 */
// swap values
const swapValues = (x, y) => {
	let t = x;
	x = y;
	y = t;
	return `x = ${x}, y = ${y}`;
};
console.log(swapValues(4, 3));

/*6 */
const reverseArray = (arr) => {
	let reverseO = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reverseO.push(arr[i]);
	}
	return reverseO;
};
console.log(reverseArray([1, 2, 3, 4]));

let myArr = [1, 2, 3, 4];
myArr.forEach((x, index, arr) => {
	let reversed = arr[arr.length - 1 - index];
	console.log(reversed);
});

/*7 */
let randArr = ["India", "Pakinstan", "four"];
const capitalizeArr = (arr) => {
	let upper = [];
	for (const x of arr) {
		upper.push(x.toUpperCase());
	}
	return upper;
};
console.log(capitalizeArr(randArr));

let capitalized = randArr.map((value) => value.toUpperCase());
console.log(capitalized);

randArr.forEach((arr) => console.log(arr.toUpperCase()));

/*8 */
// add item
let missingItem = ['This', "Tamara", "loves", "to"];
const addItem = (x) => {
	missingItem.push(x);
	return missingItem;
};
console.log(addItem('flex'));

/*9 */
const removeItem = x => {
  missingItem.splice(x, 1)
  return missingItem;
}
console.log(removeItem(1));

/*10 */
const sumOfNumbers = num => {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i
  }
  return sum
}
console.log(sumOfNumbers(100));

/*11 */
const sumOfOdds = num => {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(num % 2 !== 0) sum += i
  }
  return sum
}
console.log(sumOfOdds(7));

/*12 */
const sumOfEvens = num => {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(num % 2 === 0) sum += i
  }
  return sum
}
console.log(sumOfEvens(76));

/**13 */
const evenAndOdds = num => {
  let even = 0;
  let odd = 0;
  for(let i = 0; i <= num; i++){
    if(i % 2 !== 0) odd++
    if(i % 2 === 0) even++ 
  }
  return `The number of odds are ${odd}\n The number of evens are ${even}`
}
console.log(evenAndOdds(100));

/*14 */

const returnSum = (...args) => {
  let sum = 0;
  for(let a of args){
    sum += a
  }
  return sum
}
console.log(returnSum(1, 2, 3,572893263));


