import React, { Component } from 'react';
import Image from './component/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Image myImage={'https://i.imgflip.com/1gmwa2.jpg'} />
      </div>
    );
  }
}

export default App;
