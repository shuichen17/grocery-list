import React, { Component } from 'react';
import axios from 'axios';
import GroceryList from './GroceryList.jsx';
import AddGroceryForm from './AddGroceryForm.jsx';



// create the GroceryList and GroceryListItem components
// replace our hard-coded list with a dynamic list displaying the mock groceries

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: []
      //nextId: mockData.length + 1,
    };
    this.addGrocery = this.addGrocery.bind(this);
    this.deleteGrocery = this.deleteGrocery.bind(this);
    this.getGroceries = this.getGroceries.bind(this);
  }
  componentDidMount() {
    this.getGroceries();

  }
  getGroceries() {
    axios.get('http://localhost:3000/groceries')
    .then((data) => {
      var GroceryList = {
        groceries: data
      }
      this.setState({
        groceries: GroceryList.groceries.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  //  ajax version
  //  $.get('/groceries', (data) => {
  //    var groceryList = {
  //      groceries: data
  //    }
  //    this.setState(groceryList)
  //  })

  //  axios promise version
  
 
    // const postData = {
    //   name: this.state.name,
    //   quantity: this.state.quantity
    // }
    // axios.post('/groceries', postData)
    // .then((res) => console.log(res.data))
 
  addGrocery(grocery) {
    // let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };
    axios.post('http://localhost:3000/groceries', grocery)
    .then((response) => {
      this.getGroceries();
    })
    .catch((err) => {
       console.log(err)
    })
    // var newGrocery = Object.assign({}, grocery);
    // newGrocery.id = this.state.nextId++;
    // const newGroceries = this.state.groceries.slice();
    // newGroceries.push(newGrocery);
    // this.setState({ groceries: newGroceries });
  }
  deleteGrocery(id) {
    // todo fetch to make delete request
    fetch('/groceries', {
      method: 'DELETE',
      body: JSON.stringify({id:id}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('FETCH DELETE METHOD FROM CLIENT', res);
      this.getGroceries();
    })
    .catch((err) => console.log(err))
  }
  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <div id="app">
          <h1>Grocery List</h1>
          <AddGroceryForm addGrocery={this.addGrocery} />
          <GroceryList groceries={this.state.groceries} deleteGrocery={this.deleteGrocery}/>
        </div>
      </div>
    );
  }
}

export default App;
