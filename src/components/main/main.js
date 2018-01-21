import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route} from 'react-router-dom';

import Homepage from './homepage/homepage';
import Teamtable from './teamtable/teamtable';
import Team from './team/team';

class main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route path='/leagues' component={Teamtable}></Route>
                    <Route path='/teams/:id' component={Team}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default main;






