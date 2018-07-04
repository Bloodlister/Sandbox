import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops. . . That's not ok :(</h1>
        }

        return this.props.children
    }
}