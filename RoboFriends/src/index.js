import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import App from './containers/App';
import { searchRobots, requestRobots } from "./reducers";

const rootReducer = combineReducers({
    searchRobots,
    requestRobots
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
