import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Homepage from './homepage/homepage';
import Teamtable from './teamtable/teamtable';
import Team from './team/team';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route path='/leagues/:id' component={Teamtable}></Route>
                <Route path='/teams/:id' component={Team}></Route>
            </Switch>
        )
    }
}

export default Main;






