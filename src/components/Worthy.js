import React from 'react';

class Worthy extends React.Component{
    deserveItRef = React.createRef();
    specficActionsRef = React.createRef();

    decideWorthy = (event) => {
        let clarity = false;
        let hardWorking = false;

        // console.log(this.deserveItRef.current.value);
        let specificActions = this.specficActionsRef.current.value;

        if(specificActions != ""){
            clarity = true;
        }
        console.log(clarity);

        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.decideWorthy}>
                <h3>Are you willing to put in the work?</h3>
                <label><input type="radio" name="deserve-it" value="Yes" ref={this.deserveItRef}/> Yes</label>
                <label><input type="radio" name="deserve-it" value="No" ref={this.deserveItRef}/> No</label>
                <h3>What specific actions are you taking?</h3>
                <label><input type="text" name="specific-actions" ref={this.specficActionsRef}/></label>
                <input type="submit"/>
            </form>
        );
    }
}

export default Worthy;