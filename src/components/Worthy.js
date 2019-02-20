import React from 'react';

class Worthy extends React.Component{
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
        let clarity = false;

        let specificActions = this.specficActionsRef.current.value;

        if(specificActions !== ""){
            clarity = true;
        }

        if(this.hardWorking && clarity){
            console.log("Worthy");
        }else{
            console.log("Not Worthy");
        }
        this.props.history.push('/granting');

        event.preventDefault();
    }
    render(){
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