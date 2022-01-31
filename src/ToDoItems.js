import React, { Component } from "react";
//component to display items entered
class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
   this.props.delete(key); // delete that specific key
 }
  createTasks(item) {
  return <li onClick={() => this.delete(item.key)} //to delete w.r.t key when clicked
              key={item.key}>{item.text}</li> // showing unique index and text entered
}

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);  // converted to list items

    return (   // to be shown on screen
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
