import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import {Card} from 'material-ui/Card';

class teamTable extends Component {
    render() {
        var tableColumns = [
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

        var teamPosition = this.props.team.map(function (team) {
            return (
                <TableRow>
                    <TableRowColumn>{team.position}</TableRowColumn>
                    <TableRowColumn>{team.name}</TableRowColumn>
                    <TableRowColumn>{team.position}</TableRowColumn>
                    <TableRowColumn>{team.name}</TableRowColumn>
                    <TableRowColumn>{team.position}</TableRowColumn>
                    <TableRowColumn>{team.name}</TableRowColumn>
                    <TableRowColumn>{team.position}</TableRowColumn>
                    <TableRowColumn>{team.name}</TableRowColumn>
                    <TableRowColumn>{team.position}</TableRowColumn>
                </TableRow>

            );
        });

        return (
            <Card>
                <h1>{this.props.team.name}</h1>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        {tableColumns}
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {teamPosition}
                    </TableBody>
                </Table>
            </Card>
        );
    }
}

export default teamTable;