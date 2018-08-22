import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: 'aaa', name: "Max", age: 28 },
      { id: 'bbb', name: "Manu", age: 29 },
      { id: 'ccc', name: "Stephanie", age: 26 }
    ],
    showPersons: true
  };

  nameChangeHandler = (event, id) => {
    //console.log('Was clicked')
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    
    //const person = Object.assign(){},this.state.persons[personIndex]) ;

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons})

    // this.setState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Stephanie", age: 26 }
    //   ]
    // });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons; // pointer to array - NOT RECOMMENDED
    //const persons = this.state.persons.slice();  // create a copy of persons array
    const persons = [...this.state.persons];       // create a copy of persons array
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    // console.log('Was clicked')
    const visible = this.state.showPersons;
    this.setState({ showPersons: !visible });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={this.deletePersonHandler.bind(this,index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // compiled above code to this code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!!!!'));
  }
}

export default App;
