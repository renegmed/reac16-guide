import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]    
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState( {persons: 
      [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 24},
      ]    
    })
  }

  nameChangeHandler = (event) => {
    //console.log('Was clicked')
    this.setState( {persons: 
      [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26},
      ]    
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hello World!</h1>
       <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>        
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangeHandler}
         >My hobby is racing.</Person>
       <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // compiled above code to this code
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello World!!!!'));
  }
}

export default App;
