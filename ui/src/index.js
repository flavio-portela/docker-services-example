import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
    <div>
        <Router>
            {routes}
        </Router>
    </div>
    , 
    document.getElementById('root')
);