"use strict";
let inputString = "aabbcd";
let uniqueChars = new Set(inputString);
let filteredString = Array.from(uniqueChars).join("");
console.log("chuỗi sau khi lọc:", filteredString);
