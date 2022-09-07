// regular Expression exercises

// Exercise 1

/*1 */
console.log(
	"He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
		.match(/\d+/gi)
		.reduce((a, c) => a + +c, 0)
);

/*2 */

/*3 */
function is_valid_variable(str) {
	return /^[a-z]\w*$/gi.test(str);
}
console.log(is_valid_variable("my"));

// Exercise level 2

/*1 */
// get the ten most frequent words
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function mostFrequentWords(str, num) {
	let obj = [...str.match(/\b\w+\b/gi)].reduce((a, curr) => {
        // I changged everything to lowercase at first because of 'if',
        // then I noticed that 'if' was counted seperately beccause of the casing of the other 'If'
		!a[curr]
			? (a[curr] = 1)
			: a[curr]++;
            return a
	}, {});
    let array = []
    for(let key in obj){
        array = [...array, {word: key, count: obj[key]}]
    }
    return array.sort((a, b) => b.count - a.count).slice(0, num);
}
console.log(mostFrequentWords(paragraph, 10));


// Exercise level 3

/*1 */
// write a function that cleans a sentence, then finds the 3 most frequent words
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(str) {
    let clean = str.replace(/[^\w,. ]/gi, '')
    return mostFrequentWords(clean, 3)
}

console.log(cleanText(sentence));

// if i wanted a one liner and I wanted only the words in order of frequency
const cleanedText = (str) => mostFrequentWords(str.replace(/[^\w,. ]/gi, ''), 3).map(x => x.word)

console.log(cleanedText(sentence));

