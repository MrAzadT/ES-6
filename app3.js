const obj = {
  name: "azad",
  home: "namdapara",
  dis: "barishal",
  skill: {
    a: "java",
    b: "react",
    c: "c+",
  },
};
const {
  name,
  dis,
  skill: { a },
} = obj;
console.log(name, dis, a);
