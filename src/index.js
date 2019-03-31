import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Pipeline from './Pipeline'
import * as serviceWorker from './serviceWorker';

let stages = [{name: 'Fetch', id: 1}, {name: 'Decode', id: 2}, {name: 'Execute', id: 3}, {name: 'Memory', id: 4}, {name: 'Write', id: 5}];

ReactDOM.render(<Pipeline stages={stages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
