import React from 'react';

import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = (props) => {
//1. create an event handler that detects when an itern has been clicked in 
//2. extract the id from theat element
//3. use fetch to send a DELETE request to the server with the if object
//4. make a new get request to update our list

  return (
    <ul className="groceries">
      {props.groceries.map((grocery) => <GroceryListItem key={grocery.id} grocery={grocery} deleteGrocery={props.deleteGrocery}/>)}
    </ul>
  );
};

export default GroceryList;
