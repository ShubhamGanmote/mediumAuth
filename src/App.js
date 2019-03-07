import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Auth from './containers/Auth/Auth';
import Redirect from "./containers/Redirect/Redirect";
import LoggedIn from './containers/Auth/LoggedIn/LoggedIn';
import * as constants from './constants/constants';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Medium Login Auth</h1>
                    <Auth />
                    <Switch>
                        <Route
                            path="/loggedIn"
                            exact
                            component={LoggedIn} />
                        <Route
                            path="/auth"
                            render={() => { return (<Redirect loc={constants.path} />) }} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
