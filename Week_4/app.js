// exercise level 1

/*1 */
let userAge = 17;
theAge = Number(userAge);
if (userAge == 17) {
    console.log('You are left with ' + (18 - userAge) + ' year to drive');
} else if (userAge < 17 ) {
    console.log(`You are left with  ${18 - userAge} years to drive`);
} else if (userAge >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log('I asked for your age!')
}
// for this question and the next, I had to figure out how to use the back tick method to concat with calculations in my strings


/*2 */
let myAge = 22;
let yourAge = 21;
inputAge = Number(yourAge);

if (yourAge > myAge && (yourAge - myAge != 1)){
    console.log('You are ' + (yourAge - myAge) + ' years older than me');
} else if (yourAge > myAge && (yourAge - myAge == 1)) {
    console.log(`You are ${yourAge - myAge} year older than me`)
} else if (yourAge == myAge){
    console.log('Yay! We are age mates!');
} else if (yourAge < myAge && (myAge - yourAge != 1)){
    console.log(`I am ${myAge - yourAge} years older than you`);
} else if (yourAge < myAge && (myAge - yourAge == 1)) {
    console.log(`I am ${myAge - yourAge} year older than you`);
} else {
    console.log(`I said enter your age, what are you typing?`);
} 

/*3 */
let a = 4
let b = 3

if (a > b){
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

let checkNum = 45 /*prompt('Enter a number');*/
correctNum = Number(checkNum);

checkNum % 2 === 0 ? console.log(`${checkNum} is an even number`) : console.log(`${checkNum} is an odd number`);

// Exercise level 2

/*1 */
let grades = 29;
switch(true) {
    case (grades >= 90 && grades <= 100) :
        console.log('You scored an A');
        break;
    case (grades >= 70 && grades <= 89):
        console.log('You scored a B');
        break;
    case (grades >= 60 && grades <= 69):
        console.log('You scored a C');
        break;
    case (grades >= 50 && grades <= 59):
        console.log('You scored a D');
        break;
    case (grades >= 40 && grades <= 49):
        console.log('You scored a E');
        break;
    case (grades >= 0 && grades <= 39):
        console.log('You failed woefully');
        break;
    default:
        console.log('you did not take the exam. Report to the principal\'s office');
}

/*2 */

let anyMonth = 'juLy';
let month = anyMonth.toLowerCase();

switch(month){
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break;
    case 'june':    
    case 'july':    
    case 'august':
        console.log('The season is Summer');
        break;
    case 'september':   
    case 'october':   
    case 'november':
        console.log('The season is Autumn');
        break;
    default:
        console.log('You did not enter a month')   

}

/*3 */
let day = 'MonDay';/*prompt('What is the day today?) */
let today = day.toLowerCase();

switch(today){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${today.charAt(0).toUpperCase() + today.slice(1)} is a working day`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${today.charAt(0).toUpperCase() + today.slice(1)} is a weekend`);
        break
    default:
        console.log('Not a day of the week')
        
}


/*4 */
let monthInput = 'FebruarY'; /*prompt("enter a month");*/
month = monthInput.toLowerCase();

let now = new Date();
let year = now.getFullYear();
console.log(year);



switch(month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'october':
  case 'september':
  case 'december':
  case 'august':
    console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days`);
    break;
  case 'april':
  case 'june':
  case 'november':
    console.log (`${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days`);
    break;
  case 'february':
    // console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days, during the leap year, it has 29 days`);
    if ((year % 4 === 0  && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days`);
    } else {
        console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days`);
    }
    break;
  default:
    console.log("this is not a month");

}

