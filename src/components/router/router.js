import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Homepage from '../main/homepage/homepage';
import Team from '../main/team/team';
import LeagueTable from '../main/leagueTable/leagueTable';

class Router extends Component{
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/leagues/:id' component={LeagueTable}/>
                <Route exact path='/teams/:id' component={Team}/>
            </Switch>
        )
    }
}

export default Router;