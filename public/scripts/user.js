/*
+------------------------------------+
|             User                   |
+------------------------------------+
| - userId                           |
| + username                         |
| - password                         |
+------------------------------------+
| + User(userId, username, password) |
| + getUserId(): userId              |
| + setPassword(password): void      |
+------------------------------------+
*/

class User {
  username
  #userId
  #password

  constructor(username, userId, password) {
    this.username = username;
    this.#password = password;
    this.#userId = userId;
  }

  getUserId() {
    return this.#userId;
  }

  setPassword(password) {
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }
}

const u1 = new User("carl", 10, "badpassword")
console.log(u1)

console.log(u1.username)
console.log(u1.getUserId())

console.log(u1.getPassword())
u1.setPassword("betterpassword")
console.log(u1.getPassword())


const users = [
  {
    userId: 3,
    username: "cathy123",
    following: true
  },
  {
    userId: 2,
    username: "spongebob12",
    following: false
  },
  {
    userId: 1,
    username: "cathyiscool",
    following: true
  },
  {
    userId: 5,
    username: "fredfredburger",
    following: false
  },
  {
    userId: 4,
    username: "mindy1",
    following: true
  }
];

const followers = users.filter(i => i.following === true)
const followers2 = users.map(i => i.userId)
console.log(followers)
console.log(followers2)

const followers3 = users.filter(i => i.following === true).map(i => i.userId)
console.log(followers3)