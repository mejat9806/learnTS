//! this type is called type allias
//! allias cant be used in interface

type StringOrNumber = string | number; //!this is for basic type like number ,string or boolean
type StringOrNumberArray = (string | number)[]; //!this is for array type

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type GuitaristWithAllias = {
  name?: string;
  active: boolean;
  albums: StringOrNumberArray;
}; //! this is the same as above but use Allias instead of literal definitions

const test = (testData: GuitaristWithAllias) => {
  return testData.albums;
};

const testData: GuitaristWithAllias = {
  name: "amer",
  active: true,
  albums: ["satu "],
};
console.log(test(testData));

const band: Guitarist = {
  name: "amersasa",
  albums: ["sorted"],
  active: false,
};

const myBand = (data: Guitarist): string => {
  return `Hello ${data.name} fire`;
};
console.log(myBand(band));
//interface
interface Test {
  name: string;
  age: number;
  work: boolean;
}

const userData: Test = {
  name: "abu",
  age: 25,
  work: true,
};

const user = (userData: Test) => {
  return userData;
};
console.log(user(userData));

//!literal types
//literal types only accept what value we set .if we try to assign it to other valie we will get error
let dataStatus: "success" | "error";

dataStatus = "success"; // Valid
dataStatus = "error"; // Valid
//dataStatus = "warning"; // Error: Type '"warning"' is not assignable to type '"success" | "error"'.

//!function

//! in this example we will set the arguments as a number and the return value to number also because if we don't set the return type it will be infer by itself
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};
console.log(add(1, 2));

logMsg("hello!");
logMsg(add(1, 2));
//logMsg(add("a", 3));

function substract(c: number, d: number): number {
  return c - d;
}

type mathFunction = (a: number, b: number) => number; //! this an allias type for for function

/* interface mathFunction {
  (a: number, b: number): number;
} //! this an allias interface  for for function
 */
let multi: mathFunction = (c, d) => {
  return c * d;
};
logMsg(multi(10, 2));

//!this code above mean that multi will take mathFunction(number) and return a number

//!optional parameters
//! optional parameters must be the last parameter
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    //! this is a type guard
    return a + b + c;
  }
  return a + b;
};
logMsg(addAll(1, 5)); //6
logMsg(addAll(1, 5, 6)); //12
//!default value
//? in this example the c parameter will be default to 2 if we don't provide anything
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(sumAll(12, 4)); //18 //!this is not have c value and c will default to 2
logMsg(sumAll(12, 4, 1)); //17

//! what if argument  1 has default value
//? we will need to send undefined when we call the function
const something = (a: number = 10, b: number, c: number = 5) => {
  return a + b + c;
};

logMsg(something(undefined, 20)); //35 10+20+5

//!rest

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 2, 3, 3, 43, 434, 5, 34, 3, 4));

//!Never
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
//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

//infinite();
//use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen");
};

console.log(numberOrString("true")); // there arguments is not number or string it returns the error message
