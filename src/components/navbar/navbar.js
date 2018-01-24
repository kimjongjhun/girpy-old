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
                    <Tab key={league.code} label={league.name} containerElement={<Link to={`/leagues/${league.code}`}/>}>
                        <Teamtable team={teams}/>
                    </Tab>
                )
            }
        );

        return (
            <Tabs>
                <Tab label="Girpy" containerElement={<Link to="/"/>}></Tab>
                {leagues}
            </Tabs>
        );
    }
}

export default navbar;