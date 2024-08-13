let arr = [1,2,3,88,99,85];
console.log(arr);
//arrays are mutabale
//string are immutable
console.log(arr[2]);
arr.forEach((value,index) => {
    console.log(value,index);
});
//map in js
//Question : make a new array and store all square of previous arr
//using loop
let newArr =[];
for(let i = 0; i<arr.length; i++){
    newArr.push(arr[i]**2);
}
console.log(newArr);
//using map
let arr1 = arr.map( e => {
    return e**2;
});
console.log(arr1);
//filter
let arr2 = arr1.filter(element => element>10);
console.log(arr2);
// from function in arr
let array = Array.from("Bikash");
console.log(array);
let number = Array.from(Array(10).keys());
console.log(number);
number.forEach((key)=>{
    console.log(key);
});
let k = Array.from(Array(5).keys());
console.log(k);