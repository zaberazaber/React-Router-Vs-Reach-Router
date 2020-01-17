import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReachApp from './reachRoute';
// import ReactApp from './reactRoute';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<ReactApp />, document.getElementById('root'));

ReactDOM.render(<ReachApp />, document.getElementById('root'));


serviceWorker.unregister();
