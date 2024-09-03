// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
//     reject("some error occuers");
// });
// console.log(promise);
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ",dataId);
//             resolve("success");
//         }, 5000);
//     });
// }
// let promise = getData(5);
// console.log(promise);
// promise chain
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("heigala resolve");
        }, 3000);
    });
}
let promise1 = asyncFunc();
promise1.then((res) => {
    console.log(res);
});