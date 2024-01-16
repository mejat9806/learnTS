"use strict";
//!UTILITY TYPE
const updateAsignment = (assign, //this is be the data for the assig
propsToUpdate) => {
    return { ...assign, ...propsToUpdate }; //this will combine both
};
const assign1 = {
    studentID: "fassfa123",
    title: "final pro",
    grade: 0,
};
console.log(updateAsignment(assign1, { grade: 95 }));
const assignedGraded = updateAsignment(assign1, { grade: 95 });
const grade = assignedGraded.grade;
console.log(grade);
//!Required and Readonly
//?Required changes all the properties in an object to be required.
const recodAssignment = (assign) => {
    //this will make all of the assignments to be required
    return assign;
};
//!readonly
//?Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
const assignVerified = {
    ...assignedGraded,
    verified: true,
};
recodAssignment({ ...assignVerified, verified: true });
//!record
//!Record is a shortcut to defining an object type with a specific key type and value type.
//? syntax Record<key, value>
const HexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrade = {
    sarah: "B",
    john: "U",
};
const GradeData = {
    sarah: { assign1: 12, assign2: 123, id: "12sds" },
    john: { assign1: 245, assign2: 2456, id: "1211234dfsd" },
};
console.log(GradeData);
const PickedData = {
    studentID: "123",
    grade: 10,
};
console.log(PickedData);
const AssignPreview = {
    studentID: "123",
    title: "Omit",
};
console.log(AssignPreview);
//! ReturnType
//?ReturnType is a utility type that extracts the return type of a function or a function type
//type newAssign = { title: string; points: number };
const createAssign = (title, points) => {
    return { title, points };
};
const tsAsing = createAssign("UTILITY TYPE", 100);
console.log(tsAsing);
const StringReturn = (a, b) => {
    return a + b;
};
const assignArgs = ["generic", 100];
const tsAssign2 = createAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then((users) => {
    console.log(users);
});
