
// 1. grab the form and assign to a variable
let loginForm = document.getElementById("loginForm")

//2. add event listener to our form by using loginForm name
// make sure to check to see if loginForm exists before adding event listener
if(loginForm) loginForm.addEventListener('submit', login)

// 3. create function that will take in data from form and create a new User object
function login(e) {
    e.preventDefault()

    let username = document.getElementById("username").value
    let password = document.getElementById("passwd").value
    if(checkPassword(password)) {
        const user = {
            username: username,
            password: password
        }

        console.log(user)
    } else {
        console.log("Password sucks! Do better.")
    }
}

function checkPassword(password) {
    return true;
}