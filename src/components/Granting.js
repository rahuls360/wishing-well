import React from 'react';

class Granting extends React.Component{
    
    render(){
        if(this.props.location.state.worthy){
            this.message = "Pretty Soon!";
            this.image = "https://i2.wp.com/media.giphy.com/media/8fen5LSZcHQ5O/giphy.gif?w=736&ssl=1";

        }else{
            this.message = "It may take a while";
            this.image = "https://www.patlive.com/blog/wp-content/uploads/2015/07/Homer-Simpson-Yelling.gif";

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
            <img src={this.image} alt="reaction"/>
            {clarityMessage}
            <a href="/">Ask for another wish</a>
            </>
        );
    }
}

export default Granting;