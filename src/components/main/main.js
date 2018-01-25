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
        const teams = [
            {
                'name': 'Barcelona',
                'link': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png',
                'position': 1
            },
            {
                'name': 'Atletico Madrid',
                'link': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
                'position': 2
            },
            {
                'name': 'Valencia',
                'link': 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png',
                'position': 3
            },
            {
                'name': 'Villarreal',
                'link': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png',
                'position': 4
            },
            {
                'name': 'Real Madrid',
                'link': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633_small.png',
                'position': 5
            }
        ];

        const teamTableObject = (teams) => {
            return (
                <Teamtable team={teams}></Teamtable>
            )
        };

        return (
            <Switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route path='/leagues/:id' component={teamTableObject}></Route>
                <Route path='/teams/:id' component={Team}></Route>
            </Switch>
        )
    }
}

export default Main;






