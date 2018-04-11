import React, {Component} from 'react';
import {Data} from '../data/data';
import LeagueTable from './leagueTable/leagueTable';

class Main extends Component {
    render() {
        let leagueInfo = Data.getLeagueTable(this.props.league.id);

        return (
            <div>
                <LeagueTable team={this.props.league}/>
            </div>
        )
    }
}

export default Main;






