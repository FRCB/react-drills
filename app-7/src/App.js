import React, { Component } from 'react';
import List from './components/List'
import NewTask from './components/NewTask'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      taskArr: ['chocolate']
    }
    this.addTaskToList = this.addTaskToList.bind(this)
  }

  addTaskToList(task) {
    this.setState({ taskArr: [...this.state.taskArr, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do-list</h1>
        <NewTask add={this.addTaskToList} />
        <List tasks={this.state.taskArr} />
      </div>
    );
  }
}

export default App;
