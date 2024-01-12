"use strict";
//convert to more or less specific types
let a = "hello";
let b = a; // less specific types //basic this widen the type options from string to string|number
let c = a; // more specific types //this narrowing the type options to string literal type//
console.log(b);
//other way to use it
let d = "world";
let e = "world";
const addOrConcat = (value1, value2, value3) => {
    if (value3 === "add")
        return value1 + value2;
    return "" + value1 + value2;
};
//becareful because TS does not see the problem
let myVal1 = addOrConcat(2, 3, "concat"); //this will for it to become string
let myVal2 = addOrConcat(2, 3, "concat"); //this will for it to become number even though it is wrong
console.log(myVal1);
console.log(myVal2);
//10 as string;
10; // this bad only use when necessary
//! assertion in  the DOM
const img = document.querySelector("img");
const myimg = document.getElementById("img");
const nextimg = (document.getElementById("#img"));
// ! "!" is to declare that there element is not null
myimg.src;
console.log("hello3");
