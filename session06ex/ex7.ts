let x: number = 10;
let y: number = 5;
let z: number;

z = x + y;
console.log("tổng:", z);

z = x - y;
console.log("hiệu:", z);

z = x * y;
console.log("tích:", z);

z = x / y;
console.log("thương:", z);

// đổi thành string
x = "20" as unknown as number;

// đổi thành boolean
y = true as unknown as number;

z = x + y;
console.log("tổng với kiểu dữ liệu không phù hợp:", z);
