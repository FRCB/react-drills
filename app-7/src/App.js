import React, { Component } from 'react';
import List from './components/List'
import NewTask from './components/NewTask'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h2>My to-do List:</h2>
        <NewTask add={this.handleAdd} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
