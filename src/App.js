import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import './App.css';

class App extends Component {
  state = {
    wish: "",
    formFlag: false
  }

  inputChanged = (event)=> {
    let wish = this.state.wish;
    wish = this.wishRef.current.value;
    this.setState({wish: wish});
  } 

  handleWish = (event) => {
    //disable page refresh on submit
    event.preventDefault();

    //route to Worthy.js
    // this.props.history.push('/worthy-or-not');
    let formFlag = this.state.formFlag;
    formFlag = true;
    this.setState({formFlag: formFlag});
  }

  wishRef = React.createRef();


  render() { 
    let redirectCode;   
    if(this.state.formFlag){
      console.log("working");
      redirectCode = <Redirect to={{
        pathname: '/worthy-or-not',
        state: { wish: this.state.wish }
    }}/>;
      }
    
    return (
      <>
      <div className="container">
        <form onSubmit={this.handleWish} id="wish-form">
          <h3>What is your wish</h3>
          <input type="text" name="wish" ref={this.wishRef} onChange={this.inputChanged}/>
          <input type="submit"/>
        </form>
      </div>
      {redirectCode}
      </>
    );
  }
}

export default App;
