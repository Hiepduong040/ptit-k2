let inputString: string = "aabbcd";
let uniqueChars: Set<string> = new Set(inputString);
let filteredString: string = Array.from(uniqueChars).join("");

console.log("chuỗi sau khi lọc:", filteredString);
