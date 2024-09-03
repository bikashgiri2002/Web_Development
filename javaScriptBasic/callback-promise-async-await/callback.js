//sync
console.log('1');
console.log('2');
console.log('3');
//async
console.log('before timeout function');
function hello() {
    console.log('hello world!');
}
setTimeout(hello, 1000);
console.log('after the timeout function1');
console.log('after the timeout function2');
console.log('after the timeout function3');
console.log('after the timeout function4');
console.log('after the timeout function5');
console.log('after the timeout function6');
console.log('after the timeout function7');
console.log('after the timeout function8');
console.log('after the timeout function9');
//callback
//a arguments to another function only pass with name not parenthesis
let sum = (a,b) => a + b;
let multi = (a,b) => a * b;
function calculator(a,b,callback){
    return callback(a,b);
}
console.log(calculator(1,2,sum));
console.log(calculator(2,5,multi));
//callback hell
function getData(id,getNextData) {
    setTimeout(() => {
        console.log("data ",id);
        if (getNextData){
            getNextData();
        }
    },2000);
}
getData(1);
// we all get 3 data a time as we start timmer equaly
//it causes if the data depend on each other
// getData(2,() => {
//     getData(3);
// });
// 3 nest
//call bcak hell 
getData(2,() => {
    getData(3,() => {
        getData(4 , () => {
            getData(5);
        });
    });
});