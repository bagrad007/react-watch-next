
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';



ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.querySelector('#root')
);


