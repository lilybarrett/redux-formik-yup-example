import IngredientApi from "../../api/mockIngredientApi";

export const ADD_INGREDIENT = "groceryList: ADD_INGREDIENT";
export const LOAD_INGREDIENTS_SUCCESS = "groceryList: LOAD_INGREDIENTS_SUCCESS";

const initialState = {
  ingredients: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return [
        ...state,
        action.ingredient
      ];
    case LOAD_INGREDIENTS_SUCCESS:
      return action.ingredients;
    default:
      return state;
  }
}

export const addIngredient = (ingredient) => {
  alert(`You have added ${ingredient.quantity} ${ingredient.ingredientName} to your list!`);
  return (dispatch) => {
    dispatch({
      type: ADD_INGREDIENT,
      ingredient,
    })
  }
}

export const loadIngredients = () => {
    return (dispatch) => {
      const ingredients = IngredientApi.getAllIngredients()
      .then((ingredients) => {
          dispatch({
            type: LOAD_INGREDIENTS_SUCCESS,
            ingredients
          });
      }).catch(error => {
          throw(error);
      });
    }
}
