// Set and maps

//Exercise level 1:
/*1 */
let emptySet = new Set();
/*2 */
let oneToTen = new Set();
for(let i = 0; i <= 10; i++) {
oneToTen.add(i);
}
console.log(oneToTen);

/*3 */
console.log(oneToTen.delete(10));
console.log(oneToTen);

/*4 */
let companies = ['Google', 'Microsoft', 'Apple', 'Facebook', 'Twitter']
let randSet = new Set(companies);
console.log(randSet.clear());

/*5 */
let techCompaniesSet = new Set(companies);

/*6 */
let countriesMap = new Map();
countriesMap.set('Nigeria', 'Nigeria'.length)
countriesMap.set('Ghana', 'Ghana'.length)
countriesMap.set('kenya', 'kenya'.length)
countriesMap.set('Ethiopia', 'Ethiopia'.length)

console.log(countriesMap);

// Exerccise level 2
/*1 */
//union of sets
let a = [1, 2, 3, 4, 5]
let b = [6, 7, 8, 9, 3, 6,1]
let c = new Set([...a, ...b])
console.log(c);

/*2 */
// intersect of sets
let setA = new Set(a)
let setB = new Set(b)

let arrC = a.filter((num) => setB.has(num))
let setC = new Set(arrC)
console.log(setC);

/*3 */
// difference of sets
console.log(new Set(a.filter((num) => !setB.has(num))));

// Exercise level 3


