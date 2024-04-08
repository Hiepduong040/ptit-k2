let nameUser: string = "Hiep";

let age: number = 19;

let job: string = "Dev";

function printInformation(name: string, age: number, job: string): string {
  return `Name: ${name}, Age: ${age}, Job: ${job}`;
}

console.log(printInformation(nameUser, age, job));
