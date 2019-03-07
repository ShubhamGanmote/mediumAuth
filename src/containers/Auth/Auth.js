import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Auth extends Component {

    authUserHandler = () => {
        this.props.history.push("/auth");
    }

    render() {
        return (
            <div>
                <button onClick={this.authUserHandler}>Login with Medium</button>
            </div>
        );
    };
}

export default withRouter(Auth);    