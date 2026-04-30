
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

// fetchData function: use for POST, PUT, and DELETE. 
// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}