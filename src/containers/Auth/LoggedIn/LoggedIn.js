import React, { Component } from 'react';

class LoggedIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            code: ''
        };
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (param[0] === 'code') {
                this.setState({
                    code: param[1]
                })
            }
        }
    }

    componentDidMount() {
        console.log(this.state.code);
        fetch('https://api.medium.com/v1/tokens', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                code: this.state.code,
                client_id: '8fcad141a6',
                client_secret: '28efa0e19df4b0397e5524fe4a896ac6ac9f99e0',
                grant_type: 'authorization_code',
                redirect_uri: 'https://optimistic-bhaskara-9204dc.netlify.com/loggedIn'
            })
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <section>
                Authenticating...
            </section>
        );
    };
}

export default LoggedIn;