import React, { Component } from 'react';
import CounterBtn from './CounterBtn';

export default class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        return (
            <div>
                <CounterBtn color="red"/>
                <h1 className='f2'>RoboFriends</h1>;
            </div>
        )
    }
};