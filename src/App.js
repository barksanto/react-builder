// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
// class App extends Component

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Barkley', age: 27 },
      { name: 'Mikayla', age: 20 },
      { name: 'Mango', age: 6 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log('was clicked!!!');
    // new state! - it will merge the old state with the new one
    setPersonsState({
      persons: [
        { name: 'Spongebob', age: 27 },
        { name: 'Mikayla', age: 100 },
        { name: 'Mango', age: 6 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>It's working !!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Shoes</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}


export default App;

// Saved code from class component while I remake it into functional componenet with hooks
// state = {
//   persons: [
//     { name: 'Barkley', age: 27 },
//     { name: 'Mikayla', age: 20 },
//     { name: 'Mango', age: 6 }
//   ]
// }

// switchNameHandler = () => {
//   // console.log('was clicked!!!');
//   // new state! - it will merge the old state with the new one
//   this.setState({
//     persons: [
//       { name: 'Spongebob', age: 27 },
//       { name: 'Mikayla', age: 100 },
//       { name: 'Mango', age: 6 }
//     ]
//   });