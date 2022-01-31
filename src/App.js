import React, { Component } from 'react';
import TodoItems from "./ToDoItems";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);   //calls Component class
   this.state = {   //adding an array in constructor
      items: []
    };
   this.addItem = this.addItem.bind(this);  //keyword resolves properly.
   this.deleteItem = this.deleteItem.bind(this);
 }
 addItem(e) {   //event handler for event e
   if (this._inputElement.value !== "") {  //if nothing passed
     var newItem = {
       text: this._inputElement.value,   // value entered
       key: Date.now()  // to have key value unique
     };

     this.setState((prevState) => {  //setting state of our array.
       return {
         items: prevState.items.concat(newItem)  //appending
       };
     });

     this._inputElement.value = "";   //to make space for new input in text field
   }

   // console.log(this.state.items);  //for seeing in console

   e.preventDefault(); // to prevent reload refresh of the page
 }
 deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);  // filtering all the array values non matching to key.
  });

  this.setState({
    items: filteredItems   //items prop set to as filtered array
  });
}
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}   //reading the value from a DOM element using a,
            // anywhere inside this component we want to access our input element, we can do so by accessing _inputElement
                    placeholder="Enter Task">
            </input>
            <button class = "button" type="submit">Add ToDo</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}   //pass in our items array as a prop.
            delete={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
