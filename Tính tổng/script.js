function bigNumberSum(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

function bigNumberMultiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}

let num1 = "1265213626735293612763";
let num2 = "2187389127362713671217236187213";
let num3 =
  "123456789123456789009876543212345678909098765456789876543212345678987878987654321";
let num4 = "1234567890123456789012345678901234567891234567890123456789";
let num5 = "1234567890123456789012345678";
let num6 = "9234567891234567890098765432";
let num7 =
  "123456789123456789009876543212345678909098765456789876543212345678987878987654321";
let num8 = "1234567890123456789012345678901234567891234567890123456789";

console.log("Sum:", bigNumberSum(num1, num2));
console.log("Product:", bigNumberMultiply(num1, num2));

console.log("Sum:", bigNumberSum(num3, num4));
console.log("Product:", bigNumberMultiply(num5, num6));
console.log("Product:", bigNumberMultiply(num7, num8));
