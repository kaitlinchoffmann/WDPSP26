import { getCurrentUser } from "./user.js";

let currentUser = getCurrentUser()

if(!currentUser) window.location = "login.html"

console.log("hi!")