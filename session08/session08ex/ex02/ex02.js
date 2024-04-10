"use strict";
function validatePerson(person) {
    if (typeof person.name === "string" &&
        typeof person.age === "number" &&
        typeof person.address === "object") {
        return true;
    }
    return false;
}
const person1 = {
    name: "hoa",
    age: 25,
    address: { city: "HN", country: "VN" }
};
const person2 = {
    name: "Hong",
    age: 30,
    address: "HCM"
};
console.log(validatePerson(person1));
console.log(validatePerson(person2));
