import React, {Component} from 'react';
// import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';

import './homepage.css';

class Homepage extends Component {
    render() {
        const teams = [
            {
                'name': 'Barcelona',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png'
            },
            {
                'name': 'Atletico Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png'
            },
            {
                'name': 'Valencia',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png'
            },
            {
                'name': 'Villarreal',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png'
            },
            {
                'name': 'Real Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png'
            },
            {
                'name': 'Barcelona',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png'
            },
            {
                'name': 'Atletico Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png'
            },
            {
                'name': 'Valencia',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png'
            },
            {
                'name': 'Villarreal',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png'
            },
            {
                'name': 'Real Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png'
            },
            {
                'name': 'Barcelona',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png'
            },
            {
                'name': 'Atletico Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png'
            },
            {
                'name': 'Valencia',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png'
            },
            {
                'name': 'Villarreal',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png'
            },
            {
                'name': 'Real Madrid',
                'crest': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png'
            },
        ].map(function (team) {
            return (
                    <GridTile title={team.name}>
                        <img src={team.crest} />
                    </GridTile>
            )
        });

        return (
            <GridList
                cellHeight={250}
                cols={5}
            >
                {teams}
            </GridList>
        )
    }
}

export default Homepage;