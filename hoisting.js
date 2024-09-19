console.log(hello); // undefined
var hello = "hello world";
console.log("#".repeat(10));

///////////////////////////////////////////////////////////////////////////

console.log(age); // Cannot access 'age' before initialization
let age = 22;
console.log("#".repeat(10));

///////////////////////////////////////////////////////////////////////////

good(); // say good
function good() {
  console.log("say good");
}
console.log("#".repeat(10));

///////////////////////////////////////////////////////////////////////////

bad(); //Cannot access 'bad' before initialization
let bad = () => {
  console.log("say bad");
};
console.log("#".repeat(10));

///////////////////////////////////////////////////////////////////////////

well(); //well is not a function

var well = () => {
  console.log("say well");
};
