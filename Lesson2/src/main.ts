//basic type
let myNameImplicit = "amer"; //!this implicit type
let myNameExplicit: string = "amer"; //!this explicit type
let meaningOfLife: number;
let isLoading: boolean;
let album: any; //!this will allow any kind of data
let unionType: string | number | bigint; //!this is union type it allows us to use multiple types .if it does not match any of the types it will give the error message
/* myNameExplicit = 42; //!this is wrong example
 */
myNameExplicit = "aizat"; //! we still change the variable like normal

let variable: string; //! we can also use this to declare variables before placing data into it
variable = "text";

meaningOfLife = 26;
isLoading = true;
album = 1983;

unionType = "1";
const sum = (a: number, b: string) => {
  return a + b;
};

console.log(sum("hello", 1));

let postId: number | string;
let isActive: boolean | number;

let re: RegExp = /\w+/g;
