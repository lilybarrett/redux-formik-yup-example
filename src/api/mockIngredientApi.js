const ingredients = [
  {
    ingredientName: "bananas",
    quantity: "2"
  },
  {
    ingredientName: "oranges",
    quantity: "3"
  },
  {
    ingredientName: "strawberries",
    quantity: "20"
  }
];

const generateIngredient = (ingredient) => {
  return ingredient.ingredientName.toLowerCase() + '-' + ingredient.quantity.toLowerCase();
};

class IngredientApi {
  static getAllIngredients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ingredients));
      }, 0)
    })
  }

  static saveIngredient(ingredient) {
    ingredient = Object.assign({}, ingredient);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newIngredient = generateIngredient(ingredient);
        ingredients.push(newIngredient);
        resolve(ingredient);
      }, 0);
    })
  }

}

export default IngredientApi;
