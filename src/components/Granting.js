import React from 'react';

class Granting extends React.Component{
    
    render(){
        if(this.props.location.state.worthy){
            this.message = "Pretty Soon!";
        }else{
            this.message = "It may take a while";
        }

        let clarityMessage;
        if(!this.props.location.state.clarity){
            clarityMessage = <h4>Make a specific plan to speed up the shipping</h4>;
        }else {
            clarityMessage = <h4>Put in the hard work to speed up the shipping</h4>;
        }

        return (
            <>
            <h3>The Universe has began shipping your wish - {this.props.location.state.wish}</h3>
            <h4>Expected time: {this.message}</h4>
            {clarityMessage}
            </>
        );
    }
}

export default Granting;