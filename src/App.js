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

  handleWish = (event) => {
    //route to Worthy.js
    this.props.history.push('/worthy-or-not');

    //disable page refresh on submit
    event.preventDefault();
  }

  wishRef = React.createRef();


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleWish} id="wish-form">
          <h3>What is your wish</h3>
          <input type="text" name="wish" ref={this.wishRef} onChange={this.inputChanged}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
