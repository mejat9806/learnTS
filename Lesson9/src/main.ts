//!UTILITY TYPE

//!Partial
//?Partial changes all the properties in an object to be optional.

interface Assignment {
  studentID: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAsignment = (
  assign: Assignment, //this is be the data for the assig
  propsToUpdate: Partial<Assignment>, //this will accept the data we want to update
): Assignment => {
  return { ...assign, ...propsToUpdate }; //this will combine both
};

const assign1: Assignment = {
  studentID: "fassfa123",
  title: "final pro",
  grade: 0,
};
console.log(updateAsignment(assign1, { grade: 95 }));
const assignedGraded: Assignment = updateAsignment(assign1, { grade: 95 });
const grade = assignedGraded.grade;
console.log(grade);

//!Required and Readonly
//?Required changes all the properties in an object to be required.

const recodAssignment = (assign: Required<Assignment>): Assignment => {
  //this will make all of the assignments to be required
  return assign;
};

//!readonly
//?Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
const assignVerified: Readonly<Assignment> = {
  ...assignedGraded,
  verified: true,
};
recodAssignment({ ...assignVerified, verified: true });

//!record
//!Record is a shortcut to defining an object type with a specific key type and value type.
//? syntax Record<key, value>
const HexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Student = "sarah" | "john";
type LetterGrade = "A" | "B" | "C" | "D" | "U";

const finalGrade: Record<Student, LetterGrade> = {
  sarah: "B",
  john: "U",
};

interface Grade {
  assign1: number;
  assign2: number;
  id: string;
}

const GradeData: Record<Student, Grade> = {
  sarah: { assign1: 12, assign2: 123, id: "12sds" },
  john: { assign1: 245, assign2: 2456, id: "1211234dfsd" },
};

console.log(GradeData);

//!pick and ommit
//?Pick used to pick some data from the type declaraction

type AssignResult = Pick<Assignment, "studentID" | "grade">;

const PickedData: AssignResult = {
  studentID: "123",
  grade: 10,
};
console.log(PickedData);

//!OMIT

//?Omit removes keys from an object type.
type OmitData = Omit<Assignment, "grade" | "verified">;
const AssignPreview: OmitData = {
  studentID: "123",
  title: "Omit",
};

console.log(AssignPreview);

//!Exculde and extract
//!Exclude removes specific types from a union or string literal, while Extract retrieves only the types that match the specified criteria.
//*Exclude
//?Exclude removes types from a union/strin literal.
type adjustedGrade = Exclude<LetterGrade, "U">;
//* extract
//?extract will take out what we wanted
type highGrade = Extract<LetterGrade, "A" | "B">;

//nonnullabe
//nonnullabe will take out null and undefined from the type
type AllposibleGrades = "dave" | "john" | null | undefined;
type nameOnlys = NonNullable<AllposibleGrades>;

//! ReturnType
//?ReturnType is a utility type that extracts the return type of a function or a function type

//type newAssign = { title: string; points: number };

const createAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createAssign>; //it take the type from the return
const tsAsing: NewAssign = createAssign("UTILITY TYPE", 100);
console.log(tsAsing);

const StringReturn = (a: string, b: number) => {
  return a + b;
};
type StringReturnType = ReturnType<typeof StringReturn>;

//!parameters type
//?Parameters is a utility type that derived from type from the parameter

type AssignParams = Parameters<typeof createAssign>;

const assignArgs: AssignParams = ["generic", 100];

const tsAssign2: NewAssign = createAssign(...assignArgs);
console.log(tsAssign2);

//! Awaited - help us with return type of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type fetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => {
  console.log(users);
});
