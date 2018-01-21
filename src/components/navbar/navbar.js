import React, {Component} from 'react';
import Teamtable from '../teamtable/teamtable';
import {Tabs, Tab} from 'material-ui/Tabs';

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
                <Tab key={league.code} label={league.name}>
                    <Teamtable team={teams}/>
                </Tab>
            )
        });

        return (
            <Tabs>
                <Tab label="Girpy"></Tab>
                {leagues}
            </Tabs>
        );
    }
}

export default navbar;