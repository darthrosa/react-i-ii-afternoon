import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display';
import Button  from './Components/Button';
import data from './data';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: data,
      index: 0
    };
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext(){
    this.state.index === 24 ? this.setState({index: 0}) : 
    this.setState({index: this.state.index + 1})
    }

  handlePrevious(){
    this.state.index === 0 ? this.setState({index: 24}) : 
    this.setState({index: this.state.index - 1})
  }

  render(){
    return (
      <div className="App">
      <div className='Header'>
        <p className='home-title'>Home</p>
      </div>
       <Display data={this.state.data[this.state.index]}/>
       <Button next={this.handleNext} previous={this.handlePrevious}/>
      </div>
    );
  }
}

  export default App;
