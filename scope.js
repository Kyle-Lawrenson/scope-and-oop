// LEARNING SCOPE

// let age= 21;

// const callAge = () => {
//     console.log(`My age is ${age}`);
// }

// console.log(age);
// callAge();

// let age= 21;
// let name = 'Kyle';

// console.log(`name: ${name}`);

// const callAge = () => {
    
//     console.log(`My age is ${age}`);
//     console.log(`My name is ${name}`);
// }

// callAge();


// const startLet = () => {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     };
//     // console.log(i); if its here it  errors if it is a let statement
// }

// startLet();

// HIGHER ORDER FUNCTIONS

// const whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`);
// };
// const greet = (time, fn) => {
//     if (time < 1200) {
//         fn(`Morning`); }
//         else if (time >= 1200 && time < 1800) {
//             fn(`Afternoon`); }
//             else {
//                 fn(`Evening`);
//             }
//         };

//         greet(1400, whichGreeting);

// OOP

// class Person {
//     constructor (name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
//     talks() {
//         console.log( `Hi, my name is ${this.name}, I am ${this.age} and I work as ${this.job}`);
//     }
//     work() {
//         console.log(`I will get to work now being a ${this.job}`);
//     }

// }

// const Dave = new Person("Dave", 38, "Builder");

// Dave.talk();
// Dave.work();

// class Dog {
//     constructor (name, age, breed) {
//         this.name = name;
//         this.age = age;
//         this.breed = breed;
//     }
//     walks () {
//         console.log (`Taking ${this.name} the ${this.breed} aged ${this.age} for a walk.`)
//     }
//     eats() {
//         console.log(`${this.name} has eaten some food.`)
//     }
// }

// const stanley = new Dog("Stanley", 10, "Bulldog")
// stanley.walks();
// stanley.eats();

// const ethel = new Dog("Ethel", 15, "Pug")
// ethel.walks();
// ethel.eats();

class Animal {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.hunger= 100;
    }
    drinks() {
        this.health += 5
        return this;
    };
    eats() {
        this.health += 5
        this.hunger += 10
        console.log(`${this.name}'s health is ${this.health}.`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger
        })
    }
}

// const hedgehog = new Animal (`Hedgehog`);
// hedgehog.drinks();
// hedgehog.eats();
// hedgehog.stats();

class dog extends Animal{
    constructor(name, happy){
        super (name, happy);
        this.happy = 100
    }
    playBall() {
        this.health += 8;
        this.hunger -= 12;
        console.log(`${this.name} is happy`);
        return this;
    }
    walks() {
        this.happy += 20
        this.hunger -= 15
        console.log(`Taking ${this.name} for a walk. They are ${this.happy}% happy`)
        return this
    }
}
