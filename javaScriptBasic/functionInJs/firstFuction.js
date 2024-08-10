//normal function
function sum(a,b){
    return a + b;
}
console.log(sum(1,3));
//arrow function
let s = (a,b)=>a+b;
console.log(s(10,20));
console.log(typeof(s));
//arguments in function
function add(){
    let ans = 0;
    for(let i = 0;i<add.arguments.length;i++){
        ans += add.arguments[i];
    }
    return ans;
}
console.log(add(1,3,4,5));
console.log(add(1,3,4,5,6));
console.log(add(1,3,4,5,9,6));
//function object
func = new Function("x","y","return x+y");
console.log(typeof(func));
console.log(func(1,2));
//array in java script
let arr = new Array(3);
arr = [1,2,4];
console.log(typeof(arr));
console.log(arr);
//dnsc of array
let arr1 = ["mango","django","aau","bhango"];
console.log(`i love ${arr1}`);
