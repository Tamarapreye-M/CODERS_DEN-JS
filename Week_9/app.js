// import countriesDatabase from ''
// console.log(countriesDatabase);
let countries = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bhutan",
	"Bolivia",
	"Bosnia and Herzegovina",
	"Botswana",
	"Brazil",
	"Brunei",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cape Verde",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Colombi",
	"Comoros",
	"Congo (Brazzaville)",
	"Congo",
	"Costa Rica",
	"Cote d'Ivoire",
	"Croatia",
	"Cuba",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"East Timor (Timor Timur)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Ethiopia",
	"Fiji",
	"Finland",
	"France",
	"Gabon",
	"Gambia, The",
	"Georgia",
	"Germany",
	"Ghana",
	"Greece",
	"Grenada",
	"Guatemala",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Honduras",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea, North",
	"Korea, South",
	"Kuwait",
	"Kyrgyzstan",
	"Laos",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macedonia",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Mauritania",
	"Mauritius",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russia",
	"Rwanda",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Vincent",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia and Montenegro",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Swaziland",
	"Sweden",
	"Switzerland",
	"Syria",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Togo",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Vatican City",
	"Venezuela",
	"Vietnam",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];
// learn to work with filter and map. Sort is quite straight forward
// filter an map can be set to variables, for filter, just simply do condition and return true

// Exercise level 1
const countriesShort = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
	{ product: "banana", price: 3 },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: 8 },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];
/*1 */

// Difference between foreach, map, filter and reduce
// forEach serves as a regular for of loop, taking in a callback funtion to modify an array, what differenciates it from map and filter is that it does not return a new array
// map returns a new array, the same length as the array map over
// filter returns a new array with only elements that meets the condition presented in the callback function
// reduce returns a single element and it takes in two parameters, the callback function and the acccumulator. The callback function takes in four parameters, the accumulator being the first.

/*2 */
//map
function upper(x) {
	return x.toUpperCase();
}
let strArr = ["bingo", "barks", "like", "this"];
let newStrArr = strArr.map(upper);
newStrArr;

//used map because forEach does not return anything

//filter
const b = (a) => a.startsWith("b");

let bArr = strArr.filter(b);
console.log(bArr);

//reduce
const fullSent = (a, i) => `${a} ${i[0].toUpperCase() + i.slice(1)}`;
const reduced = strArr.reduce(fullSent, "yo!");
console.log(reduced);

/*3 */
//for each to log all countries to the console
countriesShort.forEach((x) => console.log(x));

/*4 */
names.forEach((x) => console.log(x));

/*5 */
numbers.forEach((x) => console.log(x));

/*6 */
const highCountries = countriesShort.map((x) => x.toUpperCase());
console.log(highCountries);

/*7 */
const lengthy = countriesShort.map((x) => x.length);
console.log(lengthy);

/*8 */
const squaredAway = numbers.map((x) => x ** 2);
console.log(squaredAway);

/*9 */
const highNames = names.map((x) => x.toUpperCase());
console.log(highNames);

/*10 */
const mapProducts = products.map((x) => `${x.product}: ${x.price}`);
console.log(mapProducts);

/*11 */
const landedCountries = countriesShort.filter((x) => x.includes("land"));
console.log(landedCountries);

/*12 */
const sixCountries = countriesShort.filter((x) => x.length === 6);
console.log(sixCountries);

/*13 */
const sixAboveCountries = countriesShort.filter((x) => x.length >= 6);
console.log(sixAboveCountries);

// I'm trying hard to keep at the front of my head the reason for these repitions before I lose my mind
/*14 */
const eFirstCountries = countriesShort.filter(
	(x) => x.startsWith("e") || x.startsWith("E")
);
console.log(eFirstCountries);
// looking back at this last question, they actually specifically asked for capital E
// but I'm feeling myself for thinking of using the or operator so imma leave it just like that
// on to the next!

/*15 */
const hasPrice = products.filter((x) => x.price && typeof x.price == "number");
console.log(hasPrice);
//okay this question tricked me a bit.
// I promised i stopped at filter but i looked at the question again and I'm not being 'too much' when I say
// it asked for prices that has values so I chained with map and it gave only the values of the prices.
// then I looked again and that wasn't what i imagined, i wanted to return an object with price as the only property
// but i would have to use reduce for that. It defeats the entire purpose of specifically asking to use filter to answer the question
// enough of my rant, sorry to whoever is reading

/*16 */
const getStrings = (arr) => arr.filter((x) => typeof x === "string");
console.log(
	getStrings([
		1,
		"2",
		"I am a bird",
		false,
		{ peter: "Is a goat" },
		["Chiwawa"],
	])
);

/*17 */
const summed = numbers.reduce((acc, curr) => acc + curr);
console.log(summed);

/*18 */
let cv = [];
const stateSentence = countriesShort.reduce((acc, curr, i, arr) => {
	acc = arr.slice(0, -1);
	return `${acc.join(", ")} and ${arr.slice(-1)} are European Countries`;
});
console.log(stateSentence);

/*19 */
//some checks if some of the elements are similar in an aspect while every checks if all are similar

/*20 */
console.log(names.some((x) => x.length > 7));

/*21 */
console.log(countriesShort.every((x) => x.includes("land")));

/*22 */
//find returns the element while findIndex returns the position

/*23 */
console.log(countriesShort.find((x) => x.length == 6));

/*24 */
console.log(countriesShort.findIndex((x) => x.length == 6));

/*25 */
console.log(countriesShort.findIndex((x) => x == "Norway"));

/*26 */
console.log(countriesShort.findIndex((x) => x == "Russia"));

//Exercise level 2
/*1 */
//total price of products by chaining

const totalPrice = products
	.filter((x) => x.price && typeof x.price == "number")
	.map((x) => x.price)
	.reduce((a, c) => a + c);
console.log(totalPrice);

/*2 */
const sumWithBigR = products.reduce((acc, product) => {
	if (typeof product.price !== "string") {
		result = product.price + acc;
	}
	return result;
}, 0);
console.log(sumWithBigR);

/*3 */
const categorizeCountries = (a) => countries.filter((x) => x.includes(a));
console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("Island"));

/*4 */

let beginWith = (key) => {
	return countries.reduce((acc, curr) => {
		// let key = curr.slice(0, 1).toLowerCase()
		if (!acc[key]) acc[key] = [];
		if (curr.startsWith(key)) acc[key].push(curr);
		return acc;
	}, {});
};
console.log(beginWith("B"));
// to print out an object conatining all countries starting with a letter as key, value pairs, go staright to reduce and define key

/*5 */
const getTenCountries = countries.filter((x, i) => i <= 9);
console.log(getTenCountries);
const getFirstTenCountries = countries.reduce((acc, curr, i) => {
	if (i <= 9) acc.push(curr);
	return acc;
}, []);
console.log(getFirstTenCountries);

/*6 */
const getLastTen = countries.filter(
	(x, i, arr) => i <= arr.length && i >= arr.length - 10
);
console.log(getLastTen);

/*7 */
let mostStartWith = (arr) => {
	let frequency = arr.reduce((acc, curr) => {
		let key = curr.slice(0, 1);
		if (!acc[key]) {
			if (curr.startsWith(key)) acc[key] = 1;
		} else {
			acc[key]++;
		}

		return acc;
	}, {});
	console.log(frequency);
	let val = Math.max(...Object.values(frequency));
	console.log(val);
	for (let x in frequency) {
		if (frequency[x] == val) return x;
	}
};
console.log(mostStartWith(countries));


