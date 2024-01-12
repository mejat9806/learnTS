"use strict";
//! this type is called type allias
//! allias cant be used in interface
const test = (testData) => {
    return testData.albums;
};
const testData = {
    name: "amer",
    active: true,
    albums: ["satu "],
};
console.log(test(testData));
const band = {
    name: "amersasa",
    albums: ["sorted"],
    active: false,
};
const myBand = (data) => {
    return `Hello ${data.name} fire`;
};
console.log(myBand(band));
const userData = {
    name: "abu",
    age: 25,
    work: true,
};
const user = (userData) => {
    return userData;
};
console.log(user(userData));
//!literal types
//literal types only accept what value we set .if we try to assign it to other valie we will get error
let dataStatus;
dataStatus = "success"; // Valid
dataStatus = "error"; // Valid
//dataStatus = "warning"; // Error: Type '"warning"' is not assignable to type '"success" | "error"'.
//!function
//! in this example we will set the arguments as a number and the return value to number also because if we don't set the return type it will be infer by itself
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
console.log(add(1, 2));
logMsg("hello!");
logMsg(add(1, 2));
//logMsg(add("a", 3));
function substract(c, d) {
    return c - d;
}
/* interface mathFunction {
  (a: number, b: number): number;
} //! this an allias interface  for for function
 */
let multi = (c, d) => {
    return c * d;
};
logMsg(multi(10, 2));
//!this code above mean that multi will take mathFunction(number) and return a number
//!optional parameters
//! optional parameters must be the last parameter
const addAll = (a, b, c) => {
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
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(12, 4)); //18 //!this is not have c value and c will default to 2
logMsg(sumAll(12, 4, 1)); //17
//! what if argument  1 has default value
//? we will need to send undefined when we call the function
const something = (a = 10, b, c = 5) => {
    return a + b + c;
};
logMsg(something(undefined, 20)); //35 10+20+5
//!rest
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 2, 3, 3, 43, 434, 5, 34, 3, 4));
//!Never
//! USUALLY USE for error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//infinite();
//use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen");
};
console.log(numberOrString("true")); // there arguments is not number or string it returns the error message
