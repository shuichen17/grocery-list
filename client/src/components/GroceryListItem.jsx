import React from 'react';

const GroceryListItem = (props) => (
  <li>
    <span> {props.grocery.name} </span>
    <span> {props.grocery.quantity} </span>
  </li>
);

export default GroceryListItem;
