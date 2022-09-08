// classes

//Exercise level 1
/*1 */
class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    set setName(name){
        return this.name = name;
    }
}

/*2 */
const dog = new Animal('Garrett', 2, 'Blonde', 4);
const cat = new Animal('Garfield', 4, 'Brown', 4)


// Exercise level 2
/*1 */
const horse = new Animal('Pinky', 10, 'Black', 4)
horse.setName = 'Joey'

console.log(horse);

// Exercise level 3
/*1 */

/*2 */