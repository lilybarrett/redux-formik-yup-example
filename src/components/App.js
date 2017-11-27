import React, { Component } from "react";
import { connect } from "react-redux";
import GroceryListForm from "./GroceryListForm";
import "./App.css";

class App extends Component {
  render() {
    const { ingredients } = this.props;
    let groceries;
    if (ingredients.length >= 1) {
      groceries = this.props.ingredients.map((ingredient, index) => {
        return (
          <li key={index + 1}>
            {ingredient.ingredientName} - {ingredient.quantity}
          </li>
        );
      });
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grocery List with Formik</h1>
        </header>
        <div className="App-intro">
          <ul>
            {groceries}
          </ul>
          <GroceryListForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients
  }
}

export default connect(mapStateToProps)(App);
