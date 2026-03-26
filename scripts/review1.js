//REVIEW from JavaScript Part 1:
console.log("hi")

let num = 5
num = 7
num = "hello"
console.log("Num = " + num)
console.log(`Num = ${num}`)

const petName = "Petey"
// petName = "Earl" cannot do, it's constant
//  normal function
function printName(firstName) {
  return firstName
} 

// JavaScript Part 2:
// converting into an arrow function
let printNameArrow = (firstName) => firstName

let myName = printNameArrow("kaitlin")
console.log(myName)

// object literals
const edwinsCat = {
    catName: "Matt",
    age: 5,
    breed: "american tabby",
    color: "orange"
}

console.log(edwinsCat)

edwinsCat.catName = "Matthew"
console.log(edwinsCat)

console.log(edwinsCat.age)

edwinsCat.weight = "husky"
console.log(edwinsCat)

// edwinsCat = "matt" //can't do since constant