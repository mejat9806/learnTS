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
  constructor(
    public readonly name: string, //!modifier means that the property can only be assigned a value during initialization or in the constructor
    public music: string, //modifier means that the property is accessible from outside the class.
    private age: number, // means that the property is only accessible within the class itself. This property is not directly accessible from outside the class or its subclasses.
    protected lang: string = "typeScript", //allows access to the class member from itself and any classes that inherit it //after "=" is the default value
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `hello i am ${this.age}`; //this will take the age from whatever is passed  like coder1
  }
  public getLang() {
    return `${this.lang}`;
  }
}
const amer = new coder("amer", "hello", 20);

//console.log(amer.age); //cant access it because it is private and only accessible within class 'coder'
/* console.log(amer.getAge());
//console.log(amer.lang); //Property 'lang' is protected and only accessible within class 'coder' and its subclasses
console.log(amer.getLang()); //now we can access it because getLang() is the cusbclass member of coder */

class webDev extends coder {
  constructor(
    private computer: string,
    name: string,
    music: string,
    age: number,
    public school: string,
  ) {
    super(name, music, age); // Call the constructor of the parent class to initialize the inherited properties
    this.computer = computer; //this is new constructer of the child class
    this.school = school; //this is new constructer of the child class
  }
  public getLang(): string {
    return `i know this ${this.lang}`;
  }
  public getComputer(): string {
    return this.computer;
  }
  public addLangSchool(): string {
    return `the language school is ${this.lang}'s ${this.school}`;
  }
}

const user1 = new webDev("Intel", "amer", "slsls", 24, "school34");
console.log(user1.addLangSchool());
/* console.log(user1.getComputer());
console.log(user1.lang); //Property 'lang' is protected and only accessible within class 'coder' and its subclasses. */

//!./////////////////////////////////

//!class interface

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string; //this is method
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string): string {
    return `${this.name} play the ${action} the ${this.instrument} `;
  }
}

const artist1 = new Guitarist("john", "guitar");
const action1 = artist1.play("stroke");
console.log(action1);

//!./////////

//!static keyword is used to define static members of a class. Static members are associated with the class itself rather than instances of the class.
//!This means that you can access them using thed class name without creating an instance of the class.
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //
  }
}

const john = new Peeps("john");
const steve = new Peeps("steve");
const amy = new Peeps("amy");
console.log(john.id);
console.log(Peeps.count);

//!/c///////////

//! getters and setters

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("not array");
  }
}

const Mybands = new Bands();
console.log(Mybands);
Mybands.data = ["band1", "band2", "band3"];
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "zz bottom"];
console.log(Mybands.data);
Mybands.data = 1;
