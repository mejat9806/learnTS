//index signatures
//! useful when creating object but we dont know exactly what is the object key but we know the object shape and the type of the key and value

interface transactionObj {
  readonly [index: string | number]: number;
  pizza: number;
  Books: number;
  job: number;
}

// interface transactionObj {
//   readonly [index: string | number]: number; //this is index signature .// it means the key will be string and value will be number
//   /* [index: string | number]: number; //this is index signature .// it means the key will be string and value will be number
//    */
// }
const todaytransaction: transactionObj = {
  pizza: 4,
  Books: 5,
  job: 50,
};

//console.log(todaytransaction.pizza); //normal way to accesso bject
console.log(todaytransaction["Books"]); //access object using the bracket
let prop: string = "pizza";

console.log(todaytransaction[prop]);

const todaysNet = (transactions_props: transactionObj): number => {
  let total = 0;
  for (const transaction in transactions_props) {
    total += transactions_props[transaction]; //we use it here dynamically
  }
  return total;
};

//todaytransaction.pizza = 7; //this happen because of readonly
console.log(todaysNet(todaytransaction));

// console.log(todaytransaction["dave"]); //this will return undefined because the is no dave key but TS not see the error
//!================================================================

interface StudentType {
  name: string;
  GPA: number;
  classes?: number[];
  // [key: string]: string | number | number[] | undefined; //this add key to object dynamically based what we input //so that mean we only need to write it once// this also means that key that in string type can be use here
}

const student: StudentType = {
  //this will add to the index signature
  name: "amer",
  GPA: 6.9,
  classes: [1, 2, 5, 6, 3],
  // test: "hello this index sig test",
  //1: 23, //this will add to the index signature as a literal string
};
// console.log(student.trtr); //this doest exist but it will return undefined
// for (const key in student) {
//   //this will loop through the object //this is with indexed signature
//   console.log(`${key}:${student[key]}`);
// }

for (const key in student) {
  //this will loop through the object //this is with key of and asertion
  // as and keyof will create a union type following the string literal in the interface
  console.log(`${key}:${student[key as keyof typeof student]}`); //key of and typeof wiill take the key of the student object and make it to a key
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (
  studentData: typeof student,
  key: keyof typeof student,
): void => {
  console.log(`student ${key}:${studentData[key]}`);
};
logStudentKey(student, "GPA");
