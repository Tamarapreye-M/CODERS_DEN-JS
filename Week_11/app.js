// Destructuring and spreading

// Exercise level 1

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
	width: 20,
	height: 10,
	area: 200,
	perimeter: 60,
};
const users = [
	{
		name: "Brook",
		scores: 75,
		skills: ["HTM", "CSS", "JS"],
		age: 16,
	},
	{
		name: "Alex",
		scores: 80,
		skills: ["HTM", "CSS", "JS"],
		age: 18,
	},
	{
		name: "David",
		scores: 75,
		skills: ["HTM", "CSS"],
		age: 22,
	},
	{
		name: "John",
		scores: 85,
		skills: ["HTML"],
		age: 25,
	},
	{
		name: "Sara",
		scores: 95,
		skills: ["HTM", "CSS", "JS"],
		age: 26,
	},
	{
		name: "Martha",
		scores: 80,
		skills: ["HTM", "CSS", "JS"],
		age: 18,
	},
	{
		name: "Thomas",
		scores: 90,
		skills: ["HTM", "CSS", "JS"],
		age: 20,
	},
];

/*1 */
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

/*2 */
const [fin, est, sw, den, nor] = countries;

/*3 */
const { width, height, area, perimeter } = rectangle;

// Exercise level 2
/*1 */
// they asked for the keys, not values
for (let names of users) {
	let [theirName, theScores, theSkills, usersAge] = Object.keys(names);
	console.log(theirName, theScores, theSkills, usersAge);
}

/*2 */
// less than two skills
for (let { skills, name } of users) {
	if (skills.length < 2) console.log(name);
}

// Exercise level 3
/*1 */
import { countries_data } from "./countries.js";
console.log(countries_data);


for (let { name, capital, population, languages } of countries_data) {
	console.log(name, capital, population, languages);
}

// destructuring countries object. I need to import the file

/*2 */
const studentArr = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

let [name, skills, [, , jsScore, reactScore]] = studentArr;

console.log(name, skills, jsScore, reactScore);

/*3 */
// function that converts to object
const students = [
	["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
	["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

let studentObject = {};
const convertArrayToObject = (arr) => {
	let newArr = [];
	for (let [name, skills, scores] of arr) {
		newArr.push({ name: name, skills: skills, scores: scores });
	}
	return newArr;
};
console.log(convertArrayToObject(students));

// trying with reduce, one liner

const convertArr = (arr) =>
	arr.reduce(
		(acc, [name, skills, scores]) => [
			...acc,
			{ name: name, skills: skills, scores: scores },
		],
		[]
	);
console.log(convertArr(students));

/*4 */
const student = {
	name: "David",
	age: 25,
	skills: {
		frontEnd: [
			{ skill: "HTML", level: 10 },
			{ skill: "CSS", level: 8 },
			{ skill: "JS", level: 8 },
			{ skill: "React", level: 9 },
		],
		backEnd: [
			{ skill: "Node", level: 7 },
			{ skill: "GraphQL", level: 8 },
		],
		dataBase: [{ skill: "MongoDB", level: 7.5 }],
		dataScience: ["Python", "R", "D3.js"],
	},
};

let newStudent = JSON.parse(JSON.stringify(student));

console.log(newStudent);

newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");
console.log(newStudent);
