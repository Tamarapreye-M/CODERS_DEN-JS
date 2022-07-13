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
    'Iceland',
    'Japan',
    'Kenya'
  ]
 let countriesFull = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];
  let webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  let mernStack = ['MongoDB', 'Express', 'React', 'Node'];


  // Exercise level 1

  /*1 */
  //iterate 0 - 10 using for, while and do while loop

  //for 
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

  // while
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }

  // do while
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j <= 10);

  /*2 */
  // iterate 10 -0 using for, while, do while loop

  //for
  for(let i = 10; i >= 0; i--){
    console.log(i);
  }

  // while
  let a = 10;
  while(a >= 0){
    console.log(a);
    a--;
  }

  // do while
  let b = 10;
  do{
    console.log(b);
    b--;
  } while(b >= 0)


  /*3 */
//   for(let i = 0; i > 0; i++){
// console.log(i);
//   }

/*4 */
let triangle = ""
for (let i = 0; i <= 7; i++) {
triangle += '#';
console.log(triangle);
}

/*5 */

for(let i = 0; i <= 10; i++){
   
    console.log(`${i} x ${i} = ${i * i}`);

}

/*6 */
let solution ='';
let inc ='';
for(let j = 0; j < 2; j++){
    inc += 'i \t i^2 \t i^3'
    if (j == 1) break
    console.log(inc);
for(let i = 0; i <= 10; i++){
    // let inc = 'i \t i^2 \t i^3';
    if (j == 1) break;
    console.log(inc);

   solution = `${inc}` + ` \n ${i} \t ${Math.floor(Math.pow(i, 2))} \t ${Math.floor(Math.pow(i, 3))}`
  
    console.log(solution);

}
}

/*7 */
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }

}

/*8 */
for(let i = 0; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }

}
/*9 */
// prime numbers
for(let i = 0; i <= 100; i++){
    
    let notPrime = false;
    for(let j = 2; j <= i; j++){
        if(i % j === 0 && i !== j){
            notPrime = true;
        }
    }
    if(notPrime == false){
        console.log(i);
    }

}
/*10 */
// print sum of all numbers from 0-100
let summ = 0;
for(let i = 0; i <= 100; i++){
    summ += i;
}
console.log(summ);

/*11 */
// sum of all even and sum of all odd
let evenSum = 0;
let oddSum = 0;
for(let i = 0; i <= 100; i++){
    i % 2 === 0 ? evenSum += i: oddSum += i;
}
console.log(evenSum);
console.log(oddSum);

/*12 */
arrOfBoth = [evenSum, oddSum];
console.log(arrOfBoth);

/*13 */

let randoArr = []
for(let i = 0; i < 5; i++){
    console.log(Math.floor(Math.random() * 20));
    randoArr.push(Math.floor(Math.random() * 20))

}
console.log(randoArr);

/*15 */
let uniqueArr = [];
// I understand the while loop
// for(i = 0; i < 5; i++){
while (uniqueArr.length < 5) {
    let i = Math.floor(Math.random() * 8);
    if(!uniqueArr.includes(i)){
        uniqueArr.push(i)
    }
}
// }
console.log(uniqueArr);

/*16 */
// random characters 

let result = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let characterLength = characters.length;
for(let i = 0; i < 5; i++){
    result += characters.charAt(Math.floor(Math.random() * characterLength))

}
console.log(result);



// Exercise level 2

/*1 */
// Generate any number
function makeId(num){
    let result = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let characterLength = characters.length;
for(let i = 0; i < num; i++){
    result += characters.charAt(Math.floor(Math.random() * characterLength))

}
return result;
}
console.log(makeId(20));


/*2 */
function makeHex(num){
    let result = '';
    // a-f and 0-9
let characters = 'abcdef0123456789';
let characterLength = characters.length;
for(let i = 0; i < num; i++){
    result += characters.charAt(Math.floor(Math.random() * characterLength))

}
return result;
}
console.log(`#${makeHex(5)}`);

/*3 */
function makeRGB(){
let arr = []
while (arr.length < 3) {
    let r = Math.floor(Math.random() * 100 ) + 50;
    arr.push(r)
}
return arr.join(', ');
}
console.log(makeRGB());
console.log(`rgb(${makeRGB()})`);

// or just use the while loop 
let arr = []
while (arr.length < 3) {
    let r = Math.floor(Math.random() * 100 ) + 50;
    arr.push(r)
}
let resultArr = arr.join(', ')
console.log(`rgb(${resultArr})`);

/*4 */
let capitalCountries = [];
for(let country of countries){
    console.log(country.toUpperCase());
    capitalCountries.push(country.toUpperCase())

}
console.log(capitalCountries);

/*5 */
let countriesLength = [];
for(let i = 0; i < countries.length; i++){
    console.log(countries[i].length);
    countriesLength.push(countries[i].length);

}
console.log(countriesLength);

/*6 */
let newCountryCount = [];
for(let state of countries){
    let newArr = [];
    newArr.push(state, state.slice(0, 3), state.length);
    console.log(newArr);
    newCountryCount.push(newArr)
}
console.log(newCountryCount);

/*7 */

for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        console.log(countries[i]);
    } else{
        console.log('All countries are without land');
    }

}

/*8 */
 for(let state of countries){
    if(state.endsWith('ia')){
        console.log(state);

    } else{
        console.log('These countries end without \'ia\'');
    }
 }

/*9 */
for(let i = 0; i < countries.length; i++){
    // write a condition that checks which length matches the highest, maximum number in the length array already created
    if (countries[i].length == Math.max(...countriesLength)) {
        console.log(countries[i]);
    }
}


/*10 */
for(let i = 0; i < countries.length; i++){
   
    if (countries[i].length == 5 ) {
        console.log(countries[i]);
    }
}

/*11 */
// first create an array of all length, just like countriesLength
let webLength = [];
for (let tech of webTechs){
    console.log(tech.length);
    webLength.push(tech.length);
}
console.log(webLength);

// Then find what webTech.length matches the maximum length in the length array already created
for(let tech of webTechs){
    if (tech.length == Math.max(...webLength)) {
        console.log(tech);
    }
}


/*12 */
let nameandLength = [];
for(let tech of webTechs){
    console.log(tech, tech.length);
    nameandLength.push([`${tech}, ${tech.length}`])
}

console.log(nameandLength);

/*13 */
mernStack

let mern = [];
for(let i =0; i < mernStack.length; i++){
    console.log(`${mernStack[i][0]}`);
    mern.push(`${mernStack[i][0]}`)
    console.log(mern);
}

console.log(mern.join('.'));

/*14 */
for(let i = 0; i <  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"].length; i++){
    console.log( ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"][i]);
}

/*15 */
let fruitArr = ['banana', 'orange', 'mango', 'lemon'];
let newFruits = []
for(let f = fruitArr.length - 1; f >= 0; f--){
    console.log(fruitArr[f]);
    newFruits.push(fruitArr[f])
}
console.log(newFruits);

/*16 */
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  // using for loop
for(let i = 0; i < fullStack.length; i++){
    console.log(fullStack[i]);
        for(let j = 0; j < fullStack[i].length; j++){
            console.log(fullStack[i][j]);
        }
}

// using for of loop
for(let inside of fullStack){
    for(let inner of inside){
        console.log(inner);
    }
}

// Exercise level 3

/*1 */
let copyCountries = [];
for(let i = 0;  i < countries.length; i++){
    copyCountries.push(countries[i]);
}
console.log(copyCountries);

/*2 */

let sortedCountries = copyCountries.sort();

console.log(sortedCountries);

/*3 */

console.log(webTechs.sort());
console.log(mernStack.sort());

/*4 */
// countries containing land
let landed = [];

for(let land of countriesFull){
    if(land.includes('land')){
        console.log(land);
    }
}

/*5 */
// countries with 4 characters
for(let land of countriesFull){
    if(land.length == 4){
        console.log(land);
    }
}

/*6 */
// highest number of characters

// first create an array that gets length of all countries
let fullLength = [];

for(let i = 0; i < countriesFull.length; i++){

    fullLength.push(countriesFull[i].length);
}
console.log(fullLength);

//then loop through the countries array to see which country's length matches the highest in the previous array
for (const i of countriesFull) {
    if(i.length == Math.max(...fullLength)){
        console.log(i);
    }
}

// /*7 */ is repeated



/*8 */
// countries containing two or more words
for(let state of countriesFull){
    if(state.includes(' ')){
        console.log(state);
    }
}

/*9 */
// reverse the countries array, capitalize and store it in anoother array

let reversedAndUppercase = []
for(let i = countriesFull.length - 1; i >= 0; i-- ){
    reversedAndUppercase.push(countriesFull[i].toUpperCase())
}
console.log(reversedAndUppercase);


















