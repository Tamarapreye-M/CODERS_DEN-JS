// console methods 

// Exercise level 1

/*1 */
let countriesArr = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya",
];
console.table(countriesArr)

/*2 */
import {countries_data} from './countries.js'
console.log(countries_data);
console.table(countries_data)


/*3 */
console.group('countries info')
console.log(countriesArr)
//console.log(countries_data);
console.groupEnd()

// Exercise level 2
/*1 */
console.assert(10 > 2 *10, 'that is definately false')

/*2 */
console.warn('I\'m not here to play with Javascript' )

/*3 */
console.error('This is not an error message, it\'s just a mind game')

// Exercise level 3
/*1 */
console.time('while loop')
let i = 0
while (i < countriesArr.length) {
    console.log( countriesArr[ i ] )
    i++
}
console.timeEnd('while loop')
console.time('For loop')
for(let i = 0; i < countriesArr.length; i++) {
    console.log( countriesArr[i] )
}
console.timeEnd('For loop')

console.time('For of loop')
for(let item of countriesArr) {
console.log(item)
}
console.timeEnd('For of loop')

console.time('forEach loop')
countriesArr.forEach(x => console.log(x))
console.timeEnd('forEach loop')


