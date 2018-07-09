import React, { Component } from 'react';
import logo from './../logo.svg';

export default class Page2 extends Component {
    render() {
        const onRouteChange = this.props.onRouteChange;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={() => onRouteChange('page1')}>Page1</button>
                <button className="disabled">Page2</button>
                <button onClick={() => onRouteChange('page3')}>Page3</button>
            </div>
        )
    }
}