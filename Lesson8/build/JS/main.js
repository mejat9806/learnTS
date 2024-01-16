"use strict";
//!Generic
//generics provide a way to create reusable, flexible, and type-safe components.
// Generics allow you to write functions, classes, and interfaces that can work with different types while preserving type information.
//They are particularly useful when you want to create components that are agnostic to the specific types they operate on.
//!Generic in type alliase form
const stringEcho = (arg) => {
    //not use generic
    return arg;
};
const Echo = (arg) => {
    //? this is a generic .it allows us to accept type like a variable .// argument here will be type T and return a type T for example  if T is string it will return string too .it will change based on the type we put it in here
    return arg;
};
Echo("hello");
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
//!array and null type of  is an object
console.log(isObj(true));
console.log(isObj("john"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "john" }));
console.log(isObj(null));
//when to use generic
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        //this will check if it an array and check it if it empty
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        //this will check if it an object and if it empty
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 4]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const isTrueInterface = (value) => {
    if (Array.isArray(value) && !value.length) {
        //this will check if it an array and check it if it empty
        return { value, is: false };
    }
    if (isObj(value) && !Object.keys(value).length) {
        //this will check if it an object and if it empty
        return { value, is: false };
    }
    return { value, is: !!value };
};
const processUser = (user) => {
    //this mean that proceesUser must have HasId
    return user;
};
//console.log(processUser({  name: "dave" }));
console.log(processUser({ id: 1, name: "dave" }));
const getUsersProperty = (users, key) => {
    return users.map((users) => users[key]);
};
//imagine T is a object that has an ID this will a user object and K is going to be the key of T and what we use to access it
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "company"));
class StateOBJ {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateOBJ("maer");
console.log(store.state);
store.state = "amer";
//store.state = 12;
const State = new StateOBJ([15]); //this will make sure it to go specified type
State.state = ["amer", 12, true];
console.log(State);
