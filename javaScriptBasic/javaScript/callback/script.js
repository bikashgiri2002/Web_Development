let btn = document.getElementById("btn");
src = "promise.js";
let addSrc = (color,fn) => {
    btn.style.background = color;
    fn();
}
let fn = () => {
    let sc = document.createElement("script");
    sc.src = "promise.js";
    document.body.append(sc);
}
btn.addEventListener("click", addSrc("red",fn));