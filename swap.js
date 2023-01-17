let a = 3
let b = 5

// Expected output
// a = 5
// b = 3

console.log("Before: ")
console.log("a =", a)
console.log("b =", b)

a = a + b
b = a - b
a = a - b

console.log("\nAfter: ")
console.log("a =", a)
console.log("b =", b)
