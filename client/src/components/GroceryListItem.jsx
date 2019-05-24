import React from 'react';

const GroceryListItem = (props) => (
  
  <li onClick={() => {props.deleteGrocery(props.grocery.id)}}>
    <span> {props.grocery.name} </span>
    <span> {props.grocery.quantity} </span>
  </li>
);

export default GroceryListItem;
