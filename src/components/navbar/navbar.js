// Third party
import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom';
import Main from '../main/main';
import Homepage from '../main/homepage/homepage';

class navbar extends Component {
    render() {
        const leagueTabs = [];
        const leagues = [
            {
                'name': 'Bundesliga',
                'id': 452
            },
            {
                'name': 'La Liga',
                'id': 455
            },
            {
                'name': 'Ligue 1',
                'id': 450
            },
            {
                'name': 'Premier League',
                'id': 445
            },
            {
                'name': 'Serie A',
                'id': 456
            },
            {
                'name': 'UCL',
                'id': 464
            }
        ]
            .forEach(function (league) {
                leagueTabs.push(
                    <Tab key={league.id}
                         label={league.name}
                         containerElement={<Link to={`/leagues/${league.id}`}/>}
                    >
                        <Main league={league}/>
                    </Tab>
                )
            });

        return (
            <div>
                <Tabs>
                    <Tab label="Girpy" containerElement={<Link to="/"/>}>
                        <Homepage/>
                    </Tab>
                    {leagueTabs}
                </Tabs>
            </div>
        );
    }
}

export default navbar;