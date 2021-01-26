import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import ValidationComponent from './ValidationComponent'

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Barkley', age: 27 },
      { id: 'asd2', namename: 'Mikayla', age: 20 },
      { id: 'asd3', namename: 'Mango', age: 6 }
    ],
    showPersons: false,
    inputValue: null
  }

  // commented it out becasue our app isnt calling it anymore
  // switchNameHandler = (newName) => {
  //   // console.log('was clicked!!!');
  //   // new state! - it will merge the old state with the new one
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27 },
  //       { name: 'Mikayla', age: 100 },
  //       { name: 'Mango', age: 7 }
  //     ]
  //   })
  // }
  // 
  // the map function that renders each person component has a 2nd argument (index)
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice allows us to safely copy the array w/o mutating it 
    // or use spread operator
    const persons = [...this.state.persons]
    //this removes one element from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  // this fn is for the input - updating the state when there is a change to the input value
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    // duplicate the person array
    const person = {
      ...this.state.persons[personIndex]
    };
    // update this persons name with value in the input 
    person.name = event.target.value;
    // get the persona array
    const persons = [...this.state.persons];
    // update it at this index
    persons[personIndex] = person;
    this.setState({ persons: persons })

    // this.setState({
    //   persons: [
    //     { name: 'Barkley', age: 27 },
    //     { name: event.target.value, age: 100 },
    //     { name: 'Mango', age: 6 }
    //   ]
    // })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  outputLength = (event) => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value.length
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'lightseagreen',
      font: 'inherit',
      border: '3px solid blue',
      borderRadius: '4px',
      padding: '8px',
      curson: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {/* this map method will be executed on each element of the persons array */}
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              // thus gets triggered when we have an onChange event so thats why we need the onChange object
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello React App</h1>
        <p>It's working !!!</p>
        {/* <button style={buttonStyle} onClick={() => this.switchNameHandler('Yellow Sponge man')}>Switch Name</button> */}
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <input type="text" onChange={this.outputLength} />
        <ValidationComponent inputVal={this.state.inputValue}/>
      </div>
    );
  }
}


export default App;




