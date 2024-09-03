async function hello() {
  console.log("hello world!");
}
let p = hello();
console.log(p);
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}
async function getApiData() {
    console.log("hello");
  await api();
  console.log("world!");
  await api();
}
// getApiData();
function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data ", id);
      resolve("success");
    }, 2000);
  });
}
// async function getAllData() {
//     console.log("getting data1....");
//     await getData(1);
//     console.log("getting data2....");
//     await getData(2);
//     console.log("getting data3....");
//     await getData(3);
//     console.log("getting data4....");
//     await getData(4);
//     console.log("getting data5....");
//     await getData(5);
// }
// getAllData();
(async () => {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
})();