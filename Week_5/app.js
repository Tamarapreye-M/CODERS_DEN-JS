// Exercise level 1

/*1 */
let emptyArr = [];
/*2 */
let fiveOrMoreArr = [1, 2, /3/, '4', 'five', [6, 'seven', `8`]];
/*3 */
console.log(fiveOrMoreArr.length);

/*4 */
//find first item
console.log(fiveOrMoreArr[0]);

//find middle item
console.log(fiveOrMoreArr[Math.floor(fiveOrMoreArr.length / 2)]); //if odd
console.log(fiveOrMoreArr[Math.floor((fiveOrMoreArr.length -1 )/ 2)]); //if even. my array is even

//find last item
console.log(fiveOrMoreArr[fiveOrMoreArr.length -1]);

/*5 */
let mixedDataTypes = [1, 2, /3/, '4', 'five', [6, 'seven', `8`], false, undefined, [null]];
console.log(mixedDataTypes.length);

/*6 */
let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle',  'Amazon'];

/*7 */
console.log(itCompanies);

/*8 */
console.log(itCompanies.length);

/*9 */
// first
console.log(itCompanies[0]);
//middle
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
//last
console.log(itCompanies[itCompanies.length -1]);

/*10 */
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);

/*11 */
console.log(itCompanies[0].toUpperCase())// using loop would save me the stress 
let newCompanies = '';
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
    newCompanies = itCompanies[i].toUpperCase();

    console.log(newCompanies);
}

/*12 */
console.log(`${itCompanies.slice(0, 6).join(', ')} and ${itCompanies[itCompanies.length -1] } are big IT compamies.`);

/*13 */
let companyExist = itCompanies[itCompanies.indexOf('Google')];
if(itCompanies.includes(companyExist)){
    console.log(`${companyExist}`);
} else{
    console.log(`${companyExist} does not exist`);
}

/*14 */


let compWithTwoOs = [];
let compWithLessThanTwoOs =[];
for(let company of itCompanies){ 
    
    
    let normalCompanies = company;
    
    console.log(normalCompanies);
if(company.match(/o/gi) != null){
    if(company.match(/o/gi).length > 1){
        
        // compWithTwoOs.push(company);
        // console.log(compWithTwoOs);
        compWithTwoOs.push(company);
         console.log(compWithTwoOs);
         
    } 
    
    // console.log(company);

}


// if (itCompanies.includes(compWithTwoOs)){
// //  console.log(itCompanies)
// } else {
//     console.log(company);
//     let solution = company;
//     compWithLessThanTwoOs.push(company);
//     console.log(solution);

// }
}
console.log(compWithTwoOs);


/*15 */
console.log(itCompanies.sort());
console.log(itCompanies);

/*16 */
console.log(itCompanies.reverse());

/*17 */
itCompanies.sort();
console.log(itCompanies.slice(0, 3));

/*18 */
console.log(itCompanies.slice(-3));

/*19 */

console.log(itCompanies.slice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length / 2)]), 4));

/*20 */
console.log(itCompanies.slice(1));

/*21 */
 console.log(itCompanies.splice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length / 2)]), 1));
 console.log(itCompanies);

 /*22 */
 console.log(itCompanies.splice(-1));
 console.log(itCompanies);

 /*23 */
 console.log(itCompanies.splice(0, itCompanies.length));
 console.log(itCompanies)
console.log( itCompanies.length);

// Exercise level 2

/*2 */
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/[,.]/g, ''));
console.log(text.split(' '));

let words = text.split(' ');
console.log(words);
console.log(words.length);

/*3 */
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat')
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);


/*4 */
let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];

countries.includes('Ethiopia') ? console.log('ethiopia'.toUpperCase()): countries.push('Ethiopia');
// console.log(countries);

/*5 */
let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];

  webTechs.includes('Sass') ? console.log('Sass is a css processor'): webTechs.push('Sass');
  console.log(webTechs);

  /*6 */
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']


// instead of using frontend.concat(backend), use spread operator.
let fullStack = [...frontEnd, ...backEnd]

console.log(fullStack);

// Exercise level 3

/*1 */
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//sort array
console.log(ages.sort());
// min and max of array
let minAge = Math.min(...ages)
console.log(minAge);

let maxAge = Math.max(...ages)
console.log(maxAge);
// median of array
console.log(ages[Math.floor((ages.length -1) / 2) ]);

// average age
let sum = 0;
for (let age of ages) {
    sum += age;
    
}
console.log(sum);
let average = Math.round(sum/ages.length)
console.log(average);

// range of ages
console.log((maxAge - minAge));

// comparing value of max and min of array

console.log(Math.abs(minAge - average));
console.log(Math.abs(maxAge - average));


/*2 */
console.log(countries.slice(0,10));

/*3 */
//middle country
console.log(countries.length);
console.log(countries[Math.floor(countries.length /2)]);

/*4 */
let firstHalf;
let secondHalf;
if (countries.length % 2 === 0){
    firstHalf = countries.slice(0, countries.indexOf(countries[Math.floor((countries.length - 1) /2)]));
    secondHalf = countries.slice(countries.indexOf(countries[Math.floor((countries.length - 1) /2)]), countries.indexOf(countries[countries.length -1]))


} else {
    firstHalf = countries.slice(0, countries.indexOf(countries[Math.floor((countries.length /2) + 1 )]))
    secondHalf = countries.slice(countries.indexOf(countries[Math.floor((countries.length  /2)) +1]))
}

console.log(firstHalf);
console.log(secondHalf);

console.log(countries.indexOf('Kenya' ));
console.log(countries.indexOf(countries[Math.floor((countries.length  /2)) +1]));






















