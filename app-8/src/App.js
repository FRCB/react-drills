import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      LukeSkywalker: ""
    }
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/1/').then(res => {
      this.setState({ LukeSkywalker: res.data });
    })
  }


  render() {
    return (
      <div className="App" >
        <h1> Name: {this.state.LukeSkywalker.name} </h1>
        <h1> Gender: {this.state.LukeSkywalker.gender} </h1>
      </div>
    );
  }
}

export default App;

