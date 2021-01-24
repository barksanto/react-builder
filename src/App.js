import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Barkley', age: 27 },
      { name: 'Mikayla', age: 20 },
      { name: 'Mango', age: 6 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!!!');
    // new state! - it will merge the old state with the new one
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Mikayla', age: 100 },
        { name: 'Mango', age: 6 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working !!!</p>
        <button onClick={() => this.switchNameHandler('Yellow Sponge man')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          // 
          click={this.switchNameHandler.bind(this, 'Squarepants Spongebob ')} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Shoes</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
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



// this code is functional component using hooks
// const App = props => {
  //   const [personsState, setPersonsState] = useState({
  //     persons: [
  //       { name: 'Barkley', age: 27 },
  //       { name: 'Mikayla', age: 20 },
  //       { name: 'Mango', age: 6 }
  //     ],
  //     otherState: 'some other value'
  //   });

  //   const switchNameHandler = () => {
  //     // console.log('was clicked!!!');
  //     // new state! - it will merge the old state with the new one
  //     setPersonsState({
  //       persons: [
  //         { name: 'Spongebob', age: 27 },
  //         { name: 'Mikayla', age: 100 },
  //         { name: 'Mango', age: 6 }
  //       ]
  //     });
  //   };

  //   return (
  //     <div className="App">
  //       <h1>Hi, I'm a React App</h1>
  //       <p>It's working !!!</p>
  //       <button onClick={switchNameHandler}>Switch Name</button>
  //       <Person
  //         name={personsState.persons[0].name}
  //         age={personsState.persons[0].age}
  //         click={this.switchNameHandler} />
  //       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Shoes</Person>
  //       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
  //     </div>
  //   );
  // }


  // export default App;