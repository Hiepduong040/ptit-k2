// Để kiểm tra kiểu dữ liệu thì đung typef
// Kiểu dữ liệu của array: object
// làm sao phân biệt array và object
/*
    dùng typeof không giải quyết vấn đề được
    vì typeof của array và object đều lằ object
*/

// let numbers1 = [5, 6, 8,];
// console.log("typeof numbers1", typeof (numbers1));
// console.log("typeof numbers1", Array.isArray (numbers1));

console.log(5|6);

/*
    biểu diễn nhị phân cơ số 2
    101
*/
let text1: string|number = "hello";
text1=5;
// viết function tính tổng 2 số a và b và trả về kết quả

let arr1:(string | number)[]=[3,"hello"];
arr1.push(1);
let arr2:[number,string]=[5,"lan"];
arr2.push(6);
console.log(11111,arr2);

type Test = string|number|null|undefined;
let test1: Test = "";

console.log(1||null&&6);
// Tính tư trái qua phải gặp falsy lấy không có lấy cuối cùng
// falsy: 0 null undefined "" '' NaN

/*
    giao nhau
*/
type A = {
    name: string
}
type B = {
    name:string,
    address: string,
    id:number
}
type C = A & B ;
let c1:C = {
    name:"minh thu",
    address:"hn",
    id:5
}
console.log("11111", c1);