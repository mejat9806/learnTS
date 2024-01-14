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
//type and interface
