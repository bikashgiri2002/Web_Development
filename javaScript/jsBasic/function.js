//simple function
function printMessage(x){
    console.log(x,"is nice");
}
printMessage("jay");
//return function
function sum(a,b,c = 3){
    //c has default value 
    return a+b+c;
}
result = sum(5,6);
console.log(result);
result = sum(5,6,5);
console.log(result);