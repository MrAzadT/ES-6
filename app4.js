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

// -------------------------------

// const num = prompt("input a Number");
// if (num > 0) {
//   alert(parseFloat(num) + 200);
// } else {
//   alert("input a number");
// }

// ------
// const q = confirm("you wand herf?");
// if (q) {
//   alert("https://github.com/MrAzadT");
// }
// =============

let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
let o = { a: 1, b: 2 };
mySet.add(o);
console.log(mySet);
