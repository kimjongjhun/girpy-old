// Third party
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';

// Mine
import NavBar from './components/navbar/navbar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <NavBar/>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
