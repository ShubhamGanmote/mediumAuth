import React, { Component } from 'react';

class Redirect extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentWillMount() {
        window.location = this.state.loc;
        console.log(this.state);
    }

    render() {
        return (
            <section>
                Redirecting...
            </section>
        );
    };
}

export default Redirect;