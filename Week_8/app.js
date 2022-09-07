const users = {
	Alex: {
		email: "alex@alex.com",
		skills: ["HTML", "CSS", "JavaScript"],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: "asab@asab.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"Redux",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: "daniel@daniel.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: "daniel@alex.com",
		skills: ["HTML", "CSS", "JavaScript", "Python"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: "john@john.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: "thomas@thomas.com",
		skills: ["HTML", "CSS", "JavaScript", "React"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: "paul@paul.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

const users2 = [
	{
		_id: "ab12ex",
		username: "Alex",
		email: "alex@alex.com",
		password: "123123",
		createdAt: "08/01/2020 9:00 AM",
		isLoggedIn: false,
	},
	{
		_id: "fg12cy",
		username: "Asab",
		email: "asab@asab.com",
		password: "123456",
		createdAt: "08/01/2020 9:30 AM",
		isLoggedIn: true,
	},
	{
		_id: "zwf8md",
		username: "Brook",
		email: "brook@brook.com",
		password: "123111",
		createdAt: "08/01/2020 9:45 AM",
		isLoggedIn: true,
	},
	{
		_id: "eefamr",
		username: "Martha",
		email: "martha@martha.com",
		password: "123222",
		createdAt: "08/01/2020 9:50 AM",
		isLoggedIn: false,
	},
	{
		_id: "ghderc",
		username: "Thomas",
		email: "thomas@thomas.com",
		password: "123333",
		createdAt: "08/01/2020 10:00 AM",
		isLoggedIn: false,
	},
];

const products = [
	{
		_id: "eedfcf",
		name: "mobile phone",
		description: "Huawei Honor",
		price: 200,
		ratings: [
			{ userId: "fg12cy", rate: 5 },
			{ userId: "zwf8md", rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: "aegfal",
		name: "Laptop",
		description: "MacPro: System Darwin",
		price: 2500,
		ratings: [],
		likes: ["fg12cy"],
	},
	{
		_id: "hedfcg",
		name: "TV",
		description: "Smart TV:Procaster",
		price: 400,
		ratings: [{ userId: "fg12cy", rate: 5 }],
		likes: ["fg12cy"],
	},
];

// Exercise leevel 1

/*1 */
let dog = {};

/*2 */
console.log(dog);

/*3 */
dog.name = "kunbi";
dog.legs = 4;
dog.color = "Coffe brown";
dog.age = 1;
dog.bark = function (qty) {
	return "woof ".repeat(qty);
};
console.log(dog.bark(2));

/*4 */
console.log(Object.values(dog));

/*5 */
dog.breed = "Husky";

// Exercise level 2

/*1 */
// who has the most skills
const skilled = () => {
	let max = "";
	let winner = "";
	for (let x in users) {
		users[x].skills.length > max.length ? (max = users[x].skills) : max;
		if (users[x].skills == max) {
			winner = x;
		}
	}
	console.log(max);
	return winner;
};
console.log(skilled());
// I'm super proud of myself for this last one. I hope the creative and dynamic thinking flows through for the next couple of questions
// I'm starting to get the hang of this for in loop, i don't like it just yet though

/*2 */
// so many counting
// count logged in users
const countLoggedIn = () => {
	console.log(users2);
	let count = 0;
	for (let x in users2) {
		if (users2[x].isLoggedIn) count++;
	}
	return count;
};
console.log(countLoggedIn());

// count users having 50 points and above
const countHighPoints = () => {
	console.log(users);
	let count = 0;
	for (let x in users) {
		if (users[x].points >= 50) count++;
	}
	return count;
};
console.log(countHighPoints());

/*3 */
// find MERN Stack developers
let mernStack = ["MongoDB", "Express", "React", "Node"];
const findMern = () => {
	let mern = [];
	for (let x in users) {
		let theSkills = users[x].skills;
		if (theSkills.includes(...mernStack)) mern.push(x);
	}
	return mern;
};
console.log(findMern());

/*4 */
// add a new user without modifying the original

const myObj = Object.assign({}, users);
myObj.Tamara = {
	email: "preyemichael116@gmail.com",
	skills: ["HTML", "CSS", "Bootstrap", "Tailwind", "Javascript"],
	age: 22,
	isLoggedIn: false,
	points: 70,
};

console.log(myObj);

/*5 */
console.log(Object.keys(users));

/*6 */
console.log(Object.values(users));

/*7 */
import { countries_data } from "./countries.js";
console.log(countries_data);
// since i can't import variables from another file, I would comment out the code for this questiion

for (let data of countries_data) {
	console.log(data.name, data.capital, data.population, data.languages);
}

// Exercise level 3
/*1 */
const personAccount = {
	firstName: "Omobolaji",
	lastName: "Anosike",
	incomes: [
		{
			name: "salary",
			description: "monthly salary at corporate job",
			amount: 4000000,
		},
		{
			name: "realEstate",
			description: "returns on real estate investment, rent paid by tenants",
			amount: 6000000,
		},
		{
			name: "hirePurchase",
			description:
				"returns on hire purchases businesses, with vehicles. Instalmental",
			amount: 5000000,
		},
	],
	expenses: [
		{
			name: "necessaries",
			description: ["food", "utilities", "bills"],
			amount: 4500000,
		},
		{
			name: "gifts",
			description: [
				"givings in church",
				"givings to friends",
				"givings to family",
				"givings to wifey",
			],
			amount: 500000,
		},
		{
			name: "carreer expenses",
			description: ["courses", "further education", "workshops and events"],
			amount: 500000,
		},
	],
	totalIncome: function () {
		let sum = 0;
		this.incomes.forEach((x) => {
			sum += x.amount;
		});
		return sum;
	},
	totalExpense: function () {
		let sum = 0;
		this.expenses.forEach((x) => {
			sum += x.amount;
		});
		return sum;
	},
	accountInfo: function () {
		let savings = 0.4 * this.accountBalance();
		let current = this.accountBalance() - savings;
		return { savings, current };
	},
	addIncome: function () {
		this.incomes.push({
			name: "stocks",
			description: "returns from investments in stocks",
			amount: 100000,
		});
		return this.incomes;
	},
	addExpense: function () {
		this.expenses.push({
			name: "vacations and staycations",
			description:
				"travelling, fine dining, adventourous and romantic dates at resorts, hotels and fun places",
			amount: 3500000,
		});
		return this.expenses;
	},
	accountBalance: function () {
		return this.totalIncome() - this.totalExpense();
	},
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

/*2 */
// questions based on users2 and products
function makeId(num) {
	let result = "";
	let characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let characterLength = characters.length;
	for (let i = 0; i < num; i++) {
		result += characters.charAt(Math.floor(Math.random() * characterLength));
	}

	return result;
}
const signUp = (email) => {
	let present = new Date();
	let now =
		present.getDate() +
		"/" +
		(present.getMonth() + 1) +
		"/" +
		present.getFullYear() +
		" " +
		present.getHours() +
		":" +
		present.getMinutes();
	for (let key of users2) {
		console.log(key.email);
		if (key.email.includes(email)) {
			return "You already have an account";
		}
		if (!key.email.includes(email)) {
			users2.push({
				_id: makeId(6),
				username: "Farrah",
				email: email,
				password: "123211",
				createdAt: now,
				isLoggedIn: true,
			});

			return `we're creating a new account, see ${users2}`;
		}
	}
};

console.log(signUp("alex@ale.com"));
console.log(users2[5]._id);
console.log(users2);

/*2b */
function signIn(y) {
	users2.forEach((x) => {
		x.isSignedIn = false;
		if (y == "in" && x.isLoggedIn == false) x.isSignedIn = true;
		if (y == "out") x.isSignedIn = false;
	});
	return users2;
}
console.log(signIn("in"));

/*3 */
//function which rates product
const rateProduct = (name, database) => {
	// first get into the array of objects with a loop
	let result = "Enter the name of the product";
	let sum = 0;
	let overall = 0;
	for (let x of database) {
		let inside = x.ratings;
		// first provide for the product that has no ratings yet
		if (x.name == name && !inside.length) {
			result = "This product has no ratings yet";
		}
		// then get into the array which is a value of a property in an object
		for (let inner of inside) {
			// now rate the product. if the rating is one, rate it straight up. If it is more than one, calculate
			// the average and use that to rate it
			if (x.name === name && inside.length == 1) {
				if (inner.rate >= 4 && inner.rate <= 5) result = "Excellent";
				if (inner.rate >= 3.1 && inner.rate <= 4) result = "good";
				if (inner.rate >= 2.1 && inner.rate <= 3) result = "not so good";
				if (inner.rate >= 1 && inner.rate <= 2) result = "poor";
			}

			if (x.name === name && inside.length > 1) {
				sum += inner.rate;
				overall = sum / inside.length;
				if (overall >= 4.1 && overall <= 5) result = "Excellent";
				if (overall >= 3.1 && overall <= 4) result = "good";
				if (overall >= 2.1 && overall <= 3) result = "not so good";
				if (overall >= 1 && overall <= 2) result = "poor";
			}
		}
	}
	return result;
};
console.log(rateProduct("TV", products));

// average has been calculated as overall in the questiion
const averageRating = (name, database) => {
	let average = 0;
	let sum = 0;
	database.forEach((x) => {
		let rates = x.ratings;
		if (x.name == name && rates.length > 1) {
			rates.forEach((a) => (sum += a.rate));
			average = sum / rates.length;
		}
		if (x.name == name && rates.length == 1) average = rates[0].rate;
		if (x.name == name && !rates.length) average = 0;
	});
	return average;
};
console.log(averageRating("mobile phone", products));

/*4 */
// function that helps user like the product
// just add user id when liked and remove user id when unliked
function likeProduct(name, id, database) {
	//if id has liked, the click should remove the like and if it hasnt, it should add it
	database.forEach((item) => {
		item.likes.forEach((x) => {
			if (item.name == name && x == id)
				item.likes.splice(item.likes.indexOf(id), 1);
			if (item.name == name && x != id) item.likes.push(id);
		});
	});
	return database;
}
console.log(likeProduct("TV", "2edght", products));
console.log(products[2]);
