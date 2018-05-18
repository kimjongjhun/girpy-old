// Third party
import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {Data} from '../../data/data';

let teamPosition;
let leagueData = {};
let leagueCaption;

class LeagueTable extends Component {
    componentDidUpdate() {
        let id = this.props.team.id;
        console.log('component did update', leagueData);
        leagueData = Data.getLeagueTable(this.props.team.id);
        console.log('cdu', leagueData[id]);
        leagueCaption = leagueData[id].leagueCaption;
        console.log(leagueCaption);
        // teamPosition = leagueData.standing.map(function(team) {
        //     return (
        //         <TableRow>
        //             <TableRowColumn>{team.position}</TableRowColumn>
        //         </TableRow>
        //     )
        // });
    }

    componentDidMount() {
        console.log('component did mount');
        leagueData = Data.getLeagueTable(this.props.team.id);
        console.log('cdm', leagueData);
    }

    render() {
        // let leagueInfo = Data.getLeagueTable(this.props.team.id);
        // console.log('league info hit', leagueInfo);

        const tableColumns = [
            'Position',
            'Team Name',
            'Wins',
            'Losses',
            'Draws',
            'GF',
            'GA',
            'GD',
            'Points'
        ].map(function (item) {
            return (
                <TableHeaderColumn key={item}> {item} </TableHeaderColumn>
            )
        });

        // teamPosition = leagueInfo.standing.map(function(team) {
        //     return (
        //         <TableRow>
        //             <TableRowColumn>{team.position}</TableRowColumn>
        //         </TableRow>
        //     )
        // });

        return (
            <div>
                <h1>{this.props.team.name}</h1>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        {tableColumns}
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {/*{teamPosition}*/}
                    </TableBody>
                </Table>
                {leagueCaption}
            </div>
        );
    }
}

export default LeagueTable;