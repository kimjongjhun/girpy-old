// Third party
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

// Mine
import Teamtable from '../main/teamtable/teamtable';
import Homepage from '../main/homepage/homepage';

class navbar extends Component {
    render() {
        var teams = [
            {
                'name': 'Barcelona',
                'position': 1
            },
            {
                'name': 'Atletico Madrid',
                'position': 2
            },
            {
                'name': 'Valencia',
                'position': 3
            },
            {
                'name': 'Villarreal',
                'position': 4
            },
            {
                'name': 'Real Madrid',
                'position': 5
            }
        ];

        var leagues = [
            {
                'name': 'Bundesliga',
                'code': '123'
            },
            {
                'name': 'La Liga',
                'code': '234'
            },
            {
                'name': 'Ligue 1',
                'code': '345'
            },
            {
                'name': 'Premier League',
                'code': '456'
            },
            {
                'name': 'Serie A',
                'code': '567'
            }
        ].map(function (league) {
                return (
                    <Tab key={league.code} label={league.name} component={Link} to="/leagues">
                        <Teamtable team={teams}/>
                    </Tab>
                )
            }
        );

        return (
            <Tabs>
                <Tab label="Girpy" component={Link} to="/"></Tab>
                {leagues}
            </Tabs>
        );
    }
}

export default navbar;