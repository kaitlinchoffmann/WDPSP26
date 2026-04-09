/*
Create an array of about 8 numbers. Make a couple divisible by 3: [4,  3,  25,  21,  45, 7, 20];
Print the array.
Go through the array and count how many numbers are divisible by 3.
Then, remove that number from the array. —> splice
Display the array and count.
*/

let numbers = [5, 0, 21, 21, 8, 10, 2, 3 ]
//             0  1.  2.  3. 4.  5. 6  7 
let count = 0
console.log(numbers)

for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] % 3 === 0) {
        count++
        numbers.splice(i, 1)
        i--
    }
}

console.log(numbers)