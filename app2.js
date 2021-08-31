// // const obj ={a:1, b:7, c:3, length:2};

// // console.log(Object.keys(obj).length);

// // const obj1 = { module: 35, video: 2 };

// // const obj2 = { module: 35, video: 2 };

// // console.log(obj1 === obj2);

// const getGirlFriend = (name = "chokina") => "name";
// console.log(getGirlFriend());

const azad = {
  name: "Azad Tamal",
  education: "Honours",
  roll: 8,
  skils: "wev dev",
  taka: 5000,
  badjaiboi: function () {
    return this.name;
  },
};
const tamal = azad.badjaiboi();
console.log(tamal);
