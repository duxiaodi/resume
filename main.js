import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Professtions from './components/Professtions/Professtions';
import Work from './components/Work/Work';
import Project from './components/Project/Project';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Home} />
            <Route path="education" component={Education} />
            <Router path="professtions" component={Professtions}/>
            <Route path="work" component={Work} />
            <Route path="project" component={Project}/>
        </Route>
    </Router>,
    document.getElementById('root'));