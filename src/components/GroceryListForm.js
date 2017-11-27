import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import { connect } from "react-redux";
import { addIngredient } from "../redux/modules/ingredients";
import isEmpty from 'lodash/isEmpty'

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
                name="ingredientName"
                label="Ingredient Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ingredientName}
              />
              <input
                type="text"
                name="quantity"
                label="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
              />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (values) => {
      dispatch(addIngredient(values));
    },
  }
}

export default connect(null, mapDispatchToProps)(AddGroceryForm);
