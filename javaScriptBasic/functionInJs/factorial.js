function factorial(number){
    let numberArray = Array.from(Array(number+1).keys());
    return numberArray.slice(1).reduce((a,b) => a * b );
}
let output = factorial(5);
console.log(output);