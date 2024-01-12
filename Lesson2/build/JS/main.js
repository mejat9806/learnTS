"use strict";
//basic type
let myNameImplicit = "amer"; //!this implicit type
let myNameExplicit = "amer"; //!this explicit type
let meaningOfLife;
let isLoading;
let album; //!this will allow any kind of data
let unionType; //!this is union type it allows us to use multiple types .if it does not match any of the types it will give the error message
/* myNameExplicit = 42; //!this is wrong example
 */
myNameExplicit = "aizat"; //! we still change the variable like normal
let variable; //! we can also use this to declare variables before placing data into it
variable = "text";
meaningOfLife = 26;
isLoading = true;
album = 1983;
unionType = "1";
const sum = (a, b) => {
    return a + b;
};
console.log(sum("hello", 1));
let postId;
let isActive;
let re = /\w+/g;
