const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i< ingredients.length; i++) {
  console.log(ingredients[i]);
}
// OR
for (const ingredient of ingredients) {
  console.log(ingredient);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let i = 0;
ingredients.reverse();
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}