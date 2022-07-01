// level 1 exercises

 /*1*/let challenge = '30 Days Of JavaScript';
 /*2*/console.log(challenge);
 /*3*/console.log(challenge.length);
 /*4*/console.log(challenge.toLowerCase());
 /*5*/console.log(challenge.toUpperCase());
 /*6*/console.log(challenge.substring(2));
 /*7*/console.log(challenge.substring(0, 2));
 /*8*/console.log(challenge.includes("Script"));
 /*9*/console.log(challenge.split());
 /*10*/console.log(challenge.split(" "));
 /*11*/console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(", "));
 /*12*/console.log(challenge.replace("JavaScript", "Python"));
 /*13*/console.log(challenge.charAt(15));
 /*14*/console.log(challenge.charCodeAt('J'));
 /*15*/ console.log(challenge.indexOf('a'));
 /*16*/console.log(challenge.lastIndexOf('a'));
 /*17*/console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
 /*18*/console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
 /*19*/console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
 /*20*/console.log( ' 30 Days Of JavaScript '.trim());
 /*21*/console.log(challenge.startsWith('3'));
 /*22*/console.log(challenge.endsWith('t'));
 /*23*/console.log(challenge.match('a'));
 /*24*/console.log('30 Days of '.concat('Javascript'));
 /*25*/console.log(challenge.repeat(2));

// Level 2 Exercises
/*1*/console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
/*2*/console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');
/*3*/console.log(typeof 10 === '10');
/*4*/let randomNum = '9.8';
console.log(parseFloat(randomNum) === 10);
console.log(Math.round(randomNum));
/*5*/console.log('python and jargon'.includes('on'));
/*6*/console.log('I hope this course is not full of jargon'.includes('jargon'));
/*7*/console.log(Math.floor(Math.random() * 100));
/*8*/console.log(Math.floor(Math.random() * 50) + 50);
/*9*/console.log(Math.floor(Math.random() * 255));
/*10*/console.log(Math.floor(Math.random() * "javascript".length));
/*11*/console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

/*12*/console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('b'));
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let sub = sentence.substr(31);
console.log(sub.lastIndexOf('e'));
console.log(sub.substring(0, 23));
console.log(sentence.substr(31, 23));

//exercise level 3

/*1 */ let lovely = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
       let newLovely = lovely.match(/love/gi);
       console.log(newLovely.length);
/*2 */  const newSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
        
        console.log(newSentence.replace(/[@!$&%#*&?;]/g, ""));
/*3 */ let earning = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
      let salaryCombined = earning.match(/\d+/g);
      let totalAnnualIncome = Number(salaryCombined[0]) + Number(salaryCombined[1]) + Number(salaryCombined[2]);
      console.log(totalAnnualIncome);


































































































































