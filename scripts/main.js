// manipulating the DOM
document.querySelector('h2').style.color = "hotpink"

// basic printing
console.log("Hello World!!")
console.log(4 + 9);

//  basic for loop:
for(let i = 0; i<10; i++) {
    console.log("hello!!!")
}

// concatenation vs template literals:
let num = 30
console.log("Scott's favorite number is " + num + "!")
console.log(`Scott's favorite number is ${num}!`)

// variables can be reassigned values and data types:
num = 5
console.log("num is type " + typeof num)

num = 8.1
console.log("num is type " + typeof num)

let greeting = "hello"
let newVar = greeting + num
console.log(" is type " + typeof newVar)


