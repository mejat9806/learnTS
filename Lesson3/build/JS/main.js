"use strict";
let stringArray = ["one", "hey", "amer"];
let guitar = ["strar", "les Paul", 5150];
let randomData = ["EVH", true, 1213];
const arrayOfNum = [];
//arrayOfNum.push("heelo", 1);
const names = [];
//stringArray[0]=1//! this dont work because it only accept strings
//stringArray.push(12); //! this dont work because it only accept strings
guitar[0] = 1992; //this works because union type
guitar = stringArray; //! this works because union type
//stringArray = guitar; //! dont work because it only accepts strings
randomData = guitar; //! this works because union type
//guitar = randomData; //! dont work because it only accepts strings anf number
guitar.unshift(6942);
randomData.push(true);
/* console.log(arrayOfNum, randomData, guitar);
 */
let test = [];
let band = [];
/* band.push("heelo", 1);
 */ test.push("hi", 1);
console.log(band, test);
//Tupple
let myTupple = ["amer", 26, true];
let mixed = ["john", 1, false];
mixed = myTupple; //?work because mixed === myTupple
/* myTupple = mixed; //?this doesn't work because mytupple expects 3 data but mixed may or may not have 3

myTupple[3] = 42; //! this dont work because myTupple have set lenght of 3
myTupple[0] = 100; //!dont work because we need to follow the tupple datatype order for each index
console.log(mixed);
 */
//object
let myObject = {};
const exampleObject = {
    prop1: "amer",
    prop2: true,
};
exampleObject.prop2 = false;
exampleObject.prop1 = "true";
const prop3 = "hi";
const newExampleObject = { ...exampleObject, prop3 };
console.log(newExampleObject);
/* interface Guitarist  {
  name: string;
  active?: boolean;
  albums: (string | number)[]; //! this mean that album can have string or number datatype
};
 */
let bands = {
    name: "amer",
    active: false,
    albums: ["album1", "album2", 1994],
};
let bands2 = {
    //it need to have the same ammount of keyvalue pairs as the type or else error
    active: true,
    albums: ["album323", "album232", 1994],
};
let bands3 = {
    //like it even with out the active there is no error
    name: "optional type in object",
    active: true,
    albums: ["far away", 2000],
};
bands = bands2; //! this mean that it has the same datatype so it can use "="
bands = bands3; //! this work because it will ignore "?" because it is optional
//bands.song = "hello sunshie"; //!you cant just add another property to an object because it is not in the guitarist type object
console.log(bands);
const greetArtis = (artis) => {
    if (artis.name) {
        //this call narrowing
        return `hello ${artis.name.toUpperCase()}`;
    }
    return "hello"; //with a return here it will return union type with basic type | undefined
};
//?using object in function  the artis is the argunment and Guitarist is the type
console.log(greetArtis(bands2));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
