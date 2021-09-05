// setTimeout(() => {
//   console.log("azad");
// }, 10000);

const getTime = () => {
  let time = new Date();
  document.getElementById("time").innerHTML = time;
};
setInterval(getTime, 2000);

// ----------
// setInterval(function () {
//   alert("Hello");
// }, 1000);
