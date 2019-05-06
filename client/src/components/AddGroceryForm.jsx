import React from 'react';

class AddGroceryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addGrocery(this.state);

    this.setState({
      name: '',
      quantity: '',
    })
  }

  render() {
    return (
      <form>
        <label> Item
          <input name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label> Quantity
          <input name="quantity" value={this.state.quantity} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleClick} >Add Grocery</button>
      </form>
    );
  }
}

export default AddGroceryForm;


