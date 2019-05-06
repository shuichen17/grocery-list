import React, { Component } from 'react';

import mockData from '../../../mock_groceries.js';

// create the GroceryList and GroceryListItem components
// replace our hard-coded list with a dynamic list displaying the mock groceries

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <div id="app">
          <h1>Grocery List</h1>
          <form>
            <label> Item
              <input name="item" value="" />
            </label>
            <label> Qunatity
              <input name="quantity" value="" />
            </label>
            <button>Add Grocery</button>
          </form>
          <ul className="groceries">
            <li>
              <span> frozen pizza </span>
              <span> 5 </span>
            </li>
            <li>
              <span> noosa yogurt </span>
              <span> 10 </span>
            </li>
            <li>
              <span> kombucha </span>
              <span> 2 </span>
            </li>
            <li>
              <span> iced coffee </span>
              <span> 1 </span>
            </li>
            <li>
              <span> avocado </span>
              <span> 1 </span>
            </li>
            <li>
              <span> egg rolls </span>
              <span> 1 </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
