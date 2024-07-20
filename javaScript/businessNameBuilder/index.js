var prefix = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
var postfix = {
  1: "Bros",
  2: "Limited",
  3: "Hub",
};
var businessName = document.getElementById("business_name");
var h1 = document.getElementById("output");
function onClickGenerate() {
  let businessValue = businessName.value;
  if (businessValue == "") {
    h1.innerText = "No catagory is selected";
  } else {
    console.log("else is selected");
    business(businessValue);
  }
}
function business(name) {
  let pre = Math.random();
  let post = Math.random();
  if (pre <= 0.33) {
    let firstValue = prefix[1];
    if (post <= 0.33) {
      let lastValue = postfix[1];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else if (post > 0.33 && post <= 0.66) {
      let lastValue = postfix[2];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else {
      let lastValue = postfix[3];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    }
  } else if (pre > 0.33 && pre <= 0.66) {
    let firstValue = prefix[2];
    if (post <= 0.33) {
      let lastValue = postfix[1];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else if (post > 0.33 && post <= 0.66) {
      let lastValue = postfix[2];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else {
      let lastValue = postfix[3];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    }
  } else {
    let firstValue = prefix[3];
    if (post <= 0.33) {
      let lastValue = postfix[1];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else if (post > 0.33 && post <= 0.66) {
      let lastValue = postfix[2];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    } else {
      let lastValue = postfix[3];
      //   h1.innerText = firstValue + name + lastValue;
      h1.innerText = `${firstValue} ${name} ${lastValue}`;
    }
  }
}
