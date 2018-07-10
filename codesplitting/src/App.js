import React, { Component } from 'react';
import './App.css';
import './components/main.css';
import AsyncComp from './components/AsyncComp.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'page1',
            component: null
        }
    }

    onRouteChange = (route) => {
        this.setState({ route: route });
    };

    render() {
        if (this.state.route.startsWith('page')) {
            const pageName = this.state.route[0].toUpperCase() + this.state.route.substring(1);
            const AsyncPage = AsyncComp(() => import('./components/' + pageName));
            return <AsyncPage onRouteChange={this.onRouteChange}/>;
        }
        return null;
    }
}

export default App;
