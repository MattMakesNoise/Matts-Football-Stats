import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TeamPicker from './TeamPicker/TeamPicker';
import App from '../App';
import NotFound from './NotFound/NotFound';

const Rout = () => (
    <Router>
        <Routes>
            <Route exact path="/" component={TeamPicker}/>
            <Route path="/team/:teamId" component={App}/>
            <Route component={NotFound}/>
        </Routes>
    </Router>
)

export default Rout;