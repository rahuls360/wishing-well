import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Worthy from './Worthy';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/worthy-or-not" component={Worthy}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;