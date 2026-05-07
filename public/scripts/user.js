import { fetchData} from "./main.js"

// 1. grab the form and assign to a variable
let loginForm = document.getElementById("loginForm")

//2. add event listener to our form by using loginForm name
// make sure to check to see if loginForm exists before adding event listener
if(loginForm) loginForm.addEventListener('submit', login)

// 3. create function that will take in data from form and create a new User object
function login(e) {
    e.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("passwd").value
    if(checkPassword(password)) {
        const user = {
            email: email,
            password: password
        }
        // make fetch call to login route in server's user.js route file
        fetchData('/user/login', user, 'POST')
        .then(data => {
          if(!data.message) {
            setCurrentUser(data)
            window.location = "recipe.html"
          }
        })
        .catch(err => {
          let error = document.getElementById("error")
          error.innerText=err.message
          document.getElementById("passwd").value=""
        })
        
    } else {
        console.log("Password sucks! Do better.")
    }
}

function checkPassword(password) {
    return true;
}

async function setCurrentUser(user) {
  await localStorage.setItem('user', JSON.stringify(user))
}

export async function getCurrentUser() {
  return await JSON.parse(localStorage.getItem('user'))
}

export async function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location = "login.html"
}
