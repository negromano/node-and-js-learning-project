const mod = require("./modules");
const cow = require("cowsay");

console.log(
  cow.say({
    text: "Hello World",
    e: "00",
    T: "UU"
  })
);
console.log(mod.printName("Juan"));
