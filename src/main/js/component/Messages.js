import React, { Component } from 'react';
import axios from 'axios';

export default class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Messages: []
        };
    }

    getMessage() {
        axios
            .get(`http://localhost:8080/api/test`, {})
            .then(res => {
                const messages = res.data
                    this.setState({
                        messages
                    })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.getMessage()
    }

    render() {
        return (
            <div>
                <h1>{this.state.messages}</h1>
            </div>
        )
    }
}