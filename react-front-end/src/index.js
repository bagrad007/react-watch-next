
import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import movieList from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import App from './App.js';
const store = createStore(movieList, compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.querySelector('#root')
);


