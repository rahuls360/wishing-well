import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    wish: ""
  }

  inputChanged = (event)=> {
    let wish = this.state.wish;
    wish = this.wishRef.current.value;
    this.setState({wish: wish});
  } 

  wishRef = React.createRef();


  render() {
    return (
      <div className="container">
          <h3>What is your wish</h3>
          <input type="text" name="wish" ref={this.wishRef} onChange={this.inputChanged}/>
      </div>
    );
  }
}

export default App;
