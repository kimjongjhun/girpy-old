// Third party
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom'

class navbar extends Component {
    render() {
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
                <Tab key={league.code}
                     label={league.name}
                     containerElement={<Link to={`/leagues/${league.code}`}/>}
                >
                </Tab>
            )

        });

        return (
            <Tabs>
                <Tab label="Girpy" containerElement={<Link to="/"/>}></Tab>
                {leagues}
            </Tabs>
        );
    }
}

export default navbar;