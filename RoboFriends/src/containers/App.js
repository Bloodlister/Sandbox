import React, { Component } from 'react';
import { connect } from 'react-redux'

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"

import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchfield, onSearchChange, robots, isPending, error} = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (isPending) {
            return <h1>Loading</h1>
        } else {
            if (!error) {
                return (
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                );
            } else {
                return <h1>There was an error!</h1>
            }
        }
    }
})