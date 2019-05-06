import React from 'react';

import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = (props) => {

  return (
    <ul className="groceries">
      {props.groceries.map(grocery => <GroceryListItem key={grocery.id} grocery={grocery} />)}
    </ul>
  );
};

export default GroceryList;
