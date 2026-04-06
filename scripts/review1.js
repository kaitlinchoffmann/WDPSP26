// const springBreak = {
//   student: "Shannon",
//   placeVisited: "Italy",
//   time: "7 days"
// }

// springBreak.time = "8 days"

// let timeAway = springBreak.time
// console.log(`Time away = ${timeAway}!`)

// springBreak.friendVisted = "Katelyn"

// console.log(springBreak)


// constructor example


class Recipe {
  constructor(id, name, ingredients) {
    this.recipeId = id;
    this.recipeName = name;
    this.ingredients = ingredients;
  }

  recipeInfo() {
    return `RecipeId: ${this.recipeId} Recipe Name: ${this.recipeName}`
  }
}

// function Recipe(id, name, ingredients) {
//   this.recipeId = id;
//   this.recipeName = name;
//   this.ingredients = ingredients;
// }

// Recipe.prototype.recipeInfo = function() {
//   return `RecipeId: ${this.recipeId} Recipe Name: ${this.recipeName}`
// }

const recipe1 = new Recipe(1234, "chicken parm", ["chicken", "tomato sauce"])
console.log(recipe1)

console.log(recipe1.recipeInfo())

const recipe2 = new Recipe(3412, undefined, ["rice", "milk"])
console.log(recipe2)