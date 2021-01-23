import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working !!!</p>
        <Person name="Barkley" age="27" />
        <Person name="Mikayla" age="20"></Person>
        <Person name="Mango" age="6" />
      </div>
    );
  }
}

export default App;
