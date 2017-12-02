import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import { connect } from "react-redux";
import { addIngredient } from "../redux/modules/ingredients";
import isEmpty from "lodash/isEmpty";

class AddGroceryForm extends Component {
  render() {
    const { addIngredient } = this.props;
    return (
      <div className="addGroceryForm">
        <Formik
          initialValues={{
            ingredientName: "",
            quantity: 0,
          }}
          validate={(values) => validateForm(values)}
          validateOnBlur={true}
          validateOnChange={false}
          onSubmit={(values, actions) => {
            addIngredient(values);
          }}
          render={({
            values,
            touched,
            handleChange,
            handleBlur,
            errors,
            dirty,
            isSubmitting }) => (
            <Form>
              <input
                type="text"
                placeholder="Ingredient Name"
                name="ingredientName"
                label="Ingredient Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ingredientName}
              />
              {touched.ingredientName && errors.ingredientName && <div>{errors.ingredientName}</div>}
              <input
                type="text"
                placeholder="Quantity"
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
              />
              {touched.quantity && errors.quantity && <div>{errors.quantity}</div>}
              <button
                type="submit"
                className="btn btn-default"
                disabled={isSubmitting || !isEmpty(errors) || !dirty}
              >
                Add Ingredient
              </button>
            </Form>
          )}
        />
      </div>
    )
  }
}

const validateForm = (values) => {
  let errors = {};
  if (isIngredientNameBlank(values.ingredientName)) {
    errors.ingredientName = "You must provide an ingredient name";
  }
  if (isQuantityBlank(values.quantity)) {
    errors.quantity = "You must provide a quantity";
  }
  if (!isIngredientNameValid(values.ingredientName)) {
    errors.ingredientName = "You must provide a valid ingredient name, i.e., only characters and no numbers";
  }
  if (!isQuantityValid(values.quantity)) {
    errors.quantity = "You must provide a valid quantity, i.e., only numbers and no characters";
  }
  return errors;
};

const isIngredientNameBlank = (ingredientValue) => {
  return ingredientValue == "" || ingredientValue === null;
}

const isQuantityBlank = (quantityValue) => {
  return quantityValue == "" || quantityValue == 0 || quantityValue === null;
}

const isIngredientNameValid = (ingredientValue) => {
  return (/^\D*$/).test(ingredientValue);
}

const isQuantityValid = (quantityValue) => {
  return (/^\d+$/).test(quantityValue);
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (values) => {
      dispatch(addIngredient(values));
    },
  }
}

export default connect(null, mapDispatchToProps)(AddGroceryForm);
