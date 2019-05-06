import React, { Component } from 'react';

import GroceryList from './GroceryList.jsx';
import AddGroceryForm from './AddGroceryForm.jsx';

import mockData from '../../../mock_groceries.js';

// create the GroceryList and GroceryListItem components
// replace our hard-coded list with a dynamic list displaying the mock groceries

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: mockData,
      nextId: mockData.length + 1,
    };
    this.addGrocery = this.addGrocery.bind(this);
  }

  addGrocery(grocery) {
    var newGrocery = Object.assign({}, grocery);
    newGrocery.id = this.state.nextId++;
    const newGroceries = this.state.groceries.slice();
    newGroceries.push(newGrocery);
    this.setState({ groceries: newGroceries });
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <div id="app">
          <h1>Grocery List</h1>
          <AddGroceryForm addGrocery={this.addGrocery} />
          <GroceryList groceries={this.state.groceries} />
        </div>
      </div>
    );
  }
}

export default App;
