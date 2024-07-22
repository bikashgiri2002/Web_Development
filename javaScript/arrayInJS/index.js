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