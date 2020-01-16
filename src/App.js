import React from 'react';

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";


const toDo = [
 {
   task:'Learn class components',
   id: 12,
   completed: false
 },
 {
  task:'Learn functional components',
  id: 123,
  completed: false 
 },
 {
  task:'Do edabit challenges',
  id: 124,
  completed: false 
 },
{
  task:'Do FreeCodecamp challenges',
  id: 125,
  completed: false 
 },
 {
  task:'Complete Class Components Project',
  id: 126,
  completed: false 
 },
 {
  task:'Read The React Lifecycle on the TK ',
  id: 127,
  completed: false 
 }

];

class App extends React.Component {

  state = {
    toDoList: toDo,
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewItem = newItemName => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        { task: newItemName, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
         <h1>Todo List</h1>
         <TodoForm addNewItem={this.addNewItem} />
        </div>
        <TodoList
         toDo={this.state.toDoList}
         toggleCompleted={this.toggleCompleted}
         clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
