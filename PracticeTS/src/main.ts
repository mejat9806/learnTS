//all of primitive types

let stringtype = "string"; //this is a string type
let numberType = 100; //this is a number type
let booleanType = true; //this is a boolean type
// implicit vs explicit type
let implicitType = "implicitType";
let explicitType: string = "explicitType";

implicitType = 23; //error because type dont match to string
console.log((explicitType = "hello this is change for explicitType"));

//!other types
//? any type
//*any type allow us to pass data of any type to variables

let anyType: any =
  "anything can go here number bolean string or even custome type";

//? unkowns  type
//*unkowns is used when we dont know what type is it
function getUnknownValue(): unknown {
  return "Hello, unknown!";
}

const unknownValue: unknown = getUnknownValue();
console.log(unknownValue); // Output: Hello, unknown!

//? never type
//* never effectively throws an error whenever it is defined.
//! USUALLY USE for error

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      break;
    }
  }
};
//? typing array
//!TypeScript has a specific syntax for typing arrays.

const arrayOfNumbers: number[] = [1, 2, 3];
type TSarrayAllias = string[]; //allias way

arrayOfNumbers.forEach(function (item) {
  console.log(item);
});

function something(...arg: number[]): typeof arrayOfNumbers {
  const trn = arg;
  console.log(trn);
  return trn;
}
console.log(something(1, 1, 2));
type nameAutoInfer = "AutoInfer"; //custome or alias type

type newArray = number[];

const newArrayData: newArray = [];
newArrayData.push(1, 2, 3);
newArrayData.push("sdada"); //you cant push string to array with numbers type

console.log(newArrayData);
//!tuppled
//?A tuple is a typed array with a pre-defined length and types for each index.

let tuppledArray: [boolean, number, string];
let mixed = [1, "number", false];
tuppledArray = mixed; // this error because the order is wrong

console.log(mixed);

//!object

let ObjectINI: Object = {}; //initialized object with object type
const myObject: object = {
  name: "amer",
  age: 25,
};
const detail = "good";
const newData = { ...myObject, detail: detail };
console.log(newData);

//!literal type
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
let todayday: DayOfWeek = "Monday"; // Only allowed values are "Monday", "Tuesday", etc.

//!type and interface
//type and interface allows use to declare type like variables and can be shared around
//?type aliases
//allow us to make custom nametypes
//!Type Aliases can be used for primitives like string or more complex types such as objects and arrays

type carYear = number;
type carType = string;
type carModel = string;
type car = {
  year: number;
  type: string;
  model: string;
  price?: number; //? ? is optional parameter
};
const carYear: carYear = 2021;
const carType: carType = "huv";
const carModel: carModel = "x10a";
const car: car = {
  year: 2021,
  type: "hrv",
  model: "123",
};

interface rectangle {
  height: number;
  width: number;
}

const cube: rectangle = {
  height: 200,
  width: 200,
};

//ennum
//!An enum is a special "class" that represents a group of constants (unchangeable variables).
//!Enums come in two flavors string and numeric. Lets start with numeric.
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

let today: DaysOfWeek = DaysOfWeek.Monday;

console.log(today); // Output: 3 (index of Wednesday in the enum)
console.log(DaysOfWeek[today]); // Output: Wednesday

//!classes
//?The members of a class (properties & methods) are typed using type annotations, similar to variables.

class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";
console.log(person);

class personalData {
  constructor(
    public name: string,
    private age: number,
    protected nationality: string = "malaysia", //this default value
  ) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  setNational(setNat: string) {
    this.nationality = setNat;
  }
}

//? public modifier means that the property is accessible from outside the class.
//? private means that the property is only accessible within the class itself. This property is not directly accessible from outside the class or its subclasses.

const amer = new personalData("amer", 26, "usa");
console.log(amer);
amer.setNational("korean");
console.log(amer);

//!extend
//?Classes can extend each other through the extends keyword. A class can only extends one other class.

class extraData extends personalData {
  constructor(
    public school: string,
    name: string,
    age: number,
    nationality: string,
  ) {
    super(name, age, nationality);
    this.school = school;
  }
}

const Person1 = new extraData("usa", "UCAM", 25, "usa");

//? class implenent allow us to use interface in class
interface StudentType {
  studentname: string;
  classes: string;
  year: number;
  study(action: string): string;
}

class studentData implements StudentType {
  studentname: string;
  classes: string;
  year: number;
  learn: string;
  constructor(
    studentname: string,
    classes: string,
    year: number,
    learn: string = "nothing",
  ) {
    this.studentname = studentname;
    this.classes = classes;
    this.year = year;
    this.learn = learn;
  }
  study(): string {
    return `study ${this.study}`;
  }
}

let abu = new studentData("abu", "A2", 2017, "malay");
console.log(abu);
const studyAbu = abu.study();
console.log(abu);

//!static
//Static class methods are defined on the class itself.
//You cannot call a static method on an object, only on an object class.
class Car {
  constructor(public name: string) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
console.log(Car.hello());

// But NOT on a Car Object:
//myCar.hello();
// this will raise an error.

//!assertions
//!basically assertions will told the TS to ignore the type that it set for us and use whatever type that we intruct it to use with "as" or <typeName>
type one = string; //string type only
type two = number | string; //union and string type
type three = "hello"; // literal type of hello
type four = boolean; // literal type of hello

let a: one = "hello";
let b = a as two; // less specific types //basic this widen the type options from string to string|number
let c = a as three; // more specific types //this narrowing the type options to string literal type//

//?other way to use it
let d = <one>"world";
let e = <string | number>"world";

//example
const addOrConcat = (
  value1: number,
  value2: number,
  value3: "add" | "concat",
): number | string => {
  if (value3 === "add") return value1 + value2;

  return "" + value1 + value2;
};

//becareful because TS does not see the problem
let myVal1: string = addOrConcat(2, 3, "concat") as string; //this will for it to become string
let myVal2: number = addOrConcat(2, 3, "add") as number; //this will for it to become number even though it is wrong
console.log(myVal1);
console.log(myVal2);

//10 as string;
10 as unknown as string; // this bad only use when necessary

//? type assertion in DOM
/* const img = document.querySelector("img") as HTMLImageElement;

const myimg = document.getElementById("img") as HTMLImageElement;
const nextimg = (<HTMLImageElement>(
  document.getElementById("#img")
)) as HTMLImageElement;
// ! "!" is to declare that there element is not null
myimg.src;

console.log("hello3");
 */
//!Setter and Getter
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
Mybands.data = ["band1", "band2", "band3"]; // this is the setter
console.log(Mybands.data);
Mybands.data = [...Mybands.data, "zz bottom"]; //this is the setter
console.log(Mybands.data);

//note until cahpter 6 is

//! index signature
//! useful when creating object but we dont know exactly what is the object key but we know the object shape and the type of the key and value

/* interface transactionObj {
  readonly [index: string | number | "test"]: number; // the [key:value] vlaue cannot be  be a boolean // this is index signature
  /*  pizza: number;
  Books: number;
  job: number; */

// interface transactionObj {
//   readonly [index: string | number]: number; //this is index signature .// it means the key will be string and value will be number
//   /* [index: string | number]: number; //this is index signature .// it means the key will be string and value will be number
//    */
// } */
// let todaytransaction: transactionObj = {
//   pizza: 4,
//   Books: 5,
//   job: 50,

// };

interface transactionObj {
  // this way it will allow us to add new data// use this
  pizza: 4;
  Books: 5;
  job: 50;
  readonly [index: string | number | "test"]: number;
}
let todaytransaction: transactionObj = {
  pizza: 4,
  Books: 5,
  job: 50,
  dave: 12,
};

console.log(todaytransaction["Books"]);
console.log(todaytransaction.Books);

let prop: string = "pizza";
//todaytransaction.pizza = 5; // this is error because it has read only

//make new object to add to todaytransaction
todaytransaction = { ...todaytransaction, item: 25 }; //add it using spread operator
console.log(todaytransaction[prop]);

const todayNet = (transactions: transactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayNet(todaytransaction));
console.log(todaytransaction["dave"]); //this will return undefined because the is no dave key but TS not see the error

//!-------------------------//

interface Student {
  [key: string]: string | number | number[] | undefined; //if we have optional key we need to add undefiend
  name: string;
  GPA: number;
  classes?: number[];
}
let student: Student = {
  name: "amer",
  GPA: 4.0,
  classes: [120, 130],
};

for (const key in student) {
  console.log(`${key}:${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
  console.log(key as keyof typeof student);
});

//!keyof
//?keyof will create union type using the key like for example here name GPA and classes
//!typeof
//?we use typeof when we dont know the interface type,this will get the type based on the refrence object
/* student = { ...student, test: "amer" };
console.log(student.test);
 */

const logStudentKey = (student: Student, key: keyof Student): string => {
  const data = `student ${key}:${student[key]}`;
  return data;
};

const studentSatas = logStudentKey(student, "name");
console.log(studentSatas);

//!---------------------------///

// interface incomes {
//   [index: string]: number;
//   //[index: "somevalue"]: number; //index  signiture cant take string literals
// }

type stream = "side" | "salary" | "bonus";
type incomes = Record<stream, number>; // this is called a ultilty type it take the literal type as a key  and what we want value to be .// it also allows us to pass string literals
//! Record<string, number> is equivalent to { [key: string]: number }
const streamOfIncome: incomes = {
  salary: 4220,
  side: 120,
  bonus: 100,
};

for (const revenue in streamOfIncome) {
  console.log(streamOfIncome[revenue as keyof incomes]);
}
