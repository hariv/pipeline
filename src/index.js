import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Pipeline from './Pipeline'
import * as serviceWorker from './serviceWorker';

let stages = ['Fetch', 'Decode', 'Execute', 'Memory', 'Write'];
ReactDOM.render(<Pipeline stages={stages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
