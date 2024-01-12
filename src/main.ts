//!TYPE ASSERTIONS/casting //assertion mean force type
//!basically assertions will told the TS to ignore the type that it set for us and use whatever type that we intruct it to use with "as" or <typeName>
type one = string; //string type only
type two = number | string; //union and string type
type three = "hello"; // literal type of hello
type four = boolean; // literal type of hello
//convert to more or less specific types

let a: one = "hello";
let b = a as two; // less specific types //basic this widen the type options from string to string|number
let c = a as three; // more specific types //this narrowing the type options to string literal type//

console.log(b);

//other way to use it
let d = <one>"world";
let e = <string | number>"world";

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
let myVal2: number = addOrConcat(2, 3, "concat") as number; //this will for it to become number even though it is wrong
console.log(myVal1);
console.log(myVal2);

//10 as string;
10 as unknown as string; // this bad only use when necessary

//! assertion in  the DOM

const img = document.querySelector("img") as HTMLImageElement;

const myimg = document.getElementById("img") as HTMLImageElement;
const nextimg = (<HTMLImageElement>(
  document.getElementById("#img")
)) as HTMLImageElement;
// ! "!" is to declare that there element is not null
myimg.src;

console.log("hello3");
