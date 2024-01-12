"use strict";
//!class
//? norway way to do class
// class coder {
//   name: string;
//   age: number;
//   music: string;
//   lang: string;
//   constructor(name: string, age: number, music: string, lang: string) {
//     this.name = name;
//     this.age = age;
//     this.music = music;
//     this.lang = lang;
//   }
// }
//? visinily/access modifiers
class coder {
    constructor(name, //!modifier means that the property can only be assigned a value during initialization or in the constructor
    music, //modifier means that the property is accessible from outside the class.
    age, // means that the property is only accessible within the class itself. This property is not directly accessible from outside the class or its subclasses.
    lang = "typeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `hello i am ${this.age}`; //this will take the age from whatever is passed  like coder1
    }
    getLang() {
        return `${this.lang}`;
    }
}
const amer = new coder("amer", "hello", 20);
//console.log(amer.age); //cant access it because it is private and only accessible within class 'coder'
/* console.log(amer.getAge());
//console.log(amer.lang); //Property 'lang' is protected and only accessible within class 'coder' and its subclasses
console.log(amer.getLang()); //now we can access it because getLang() is the cusbclass member of coder */
class webDev extends coder {
    constructor(computer, name, music, age, school) {
        super(name, music, age); // Call the constructor of the parent class to initialize the inherited properties
        this.computer = computer;
        this.school = school;
        this.computer = computer; //this is new constructer of the child class
        this.school = school; //this is new constructer of the child class
    }
    getLang() {
        return `i know this ${this.lang}`;
    }
    getComputer() {
        return this.computer;
    }
    addLangSchool() {
        return `the language school is ${this.lang}'s ${this.school}`;
    }
}
const user1 = new webDev("Intel", "amer", "slsls", 24, "school34");
console.log(user1.addLangSchool());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} play the ${action} the ${this.instrument} `;
    }
}
const artist1 = new Guitarist("john", "guitar");
const action1 = artist1.play("stroke");
console.log(action1);
