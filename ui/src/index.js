import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

ReactDOM.render(
    <div>
        <Router>
            {routes}
        </Router>
    </div>
    , 
    document.getElementById('root')
);