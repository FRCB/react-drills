import React, { Component } from 'react';
import Image from './component/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Image url={'https://devschool.rocks/images/blog/we-teach-react-js-technology-from-facebook-206020a052.jpg'} />
      </div>
    );
  }
}

export default App;
