import React from 'react';
import {Redirect} from 'react-router-dom';

class Worthy extends React.Component{
    state = {
        formFlag: false
    }

    deserveItRef = React.createRef();
    specficActionsRef = React.createRef();


    handleWorthy = (event)=> {
        if(event.target.value === "Yes"){
            this.hardWorking = true;
        }else{
            this.hardWorking = false;
        }
    }

    decideWorthy = (event) => {
        this.clarity = false;

        let specificActions = this.specficActionsRef.current.value;

        if(specificActions !== ""){
            this.clarity = true;
        }

        if(this.hardWorking && this.clarity){
            console.log("Worthy");
        }else{
            console.log("Not Worthy");
        }
        // this.props.history.push('/granting');

        event.preventDefault();

        let formFlag = this.state.formFlag;
        formFlag = true;
        this.setState({formFlag});

    }
    render(){
        if(this.state.formFlag){
            return <Redirect to={
                {pathname:'granting',
                state: {wish: this.props.location.state.wish, hardWorking: this.hardWorking, clarity: this.clarity}
        }}/>
        }
        return (
            <form onSubmit={this.decideWorthy}>
                <h3>Are you willing to put in the work?</h3>
                <div onChange={this.handleWorthy}>
                    <label><input type="radio" name="deserve-it" value="Yes"/> Yes</label>
                    <label><input type="radio" name="deserve-it" value="No"/> No</label>
                </div>
                <h3>What specific actions are you taking?</h3>
                <label><input type="text" name="specific-actions" ref={this.specficActionsRef}/></label>
                <input type="submit"/>
            </form>
        );
    }
}

export default Worthy;