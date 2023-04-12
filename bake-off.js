const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  let output = 'sorry, we do not have the correct ingredients'
 

  let recipeIngredients = ['first', 'second']
  //loop through recipes first
  for (let i = 0; i < recipes.length; i++) {

    //loop through the ingredients of bakeryA to look for a match
    for (let x = 0; x < bakeryA.length; x++) {

      if (bakeryA[x] === recipes[i].ingredients[0]) {

        //if there is a match, loop through the ingredients of bakeryB
        //to look for a match of the other ingredient from that recipe
        for (let y = 0; y < bakeryB.length; y++) {

          if (bakeryB[y] === recipes[i].ingredients[1]) {

            output = recipes[i].name;
          }
        }
      }
    }
  }
  //if our first set of loops didnt update the output then let's run the same
  //loops again, checking for the other ingredients from each bakery
  for (let i = 0; i < recipes.length; i++) {

    //loop through the ingredients of bakeryA to look for a match
    for (let x = 0; x < bakeryB.length; x++) {

      if (bakeryB[x] === recipes[i].ingredients[0]) {

        //if there is a match, loop through the ingredients of bakeryB
        //to look for a match of the other ingredient from that recipe
        for (let y = 0; y < bakeryA.length; y++) {

          if (bakeryA[y] === recipes[i].ingredients[1]) {

            output = recipes[i].name;
          }
        }
      }
    }
  }

  return output;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));