// setTimeout(() => {
//   console.log("azad");
// }, 10000);

// const getTime = () => {
//   let time = new Date();
//   document.getElementById("time").innerHTML = time;
// };
// setInterval(getTime, 2000);

// ----------
// setInterval(function () {
//   alert("Hello");
// }, 1000);

// let userInput = prompt();
// if (userInput) {
//   alert(userInput);
// }

// let sign = prompt("What's your sign?");

// if (sign.toLowerCase() == "scorpio") {
//   alert("Wow! I'm a Scorpio too!");
// }

// sign = window.prompt();
// sign = prompt();
// sign = window.prompt("Are you feeling lucky");
// sign = window.prompt("Are you feeling lucky", "sure");
// confirm();

const num = prompt("input a Number");
console.log(num);
const sum = (num) => {
  console.log(num);
  let num1 = num + 200;
  console.log(num1);
  return num1;
};
alert(sum());
console.log(sum());
