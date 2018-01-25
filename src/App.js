// Third party
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    BrowserRouter,
    Route,
    Link} from 'react-router-dom';

// Mine
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';

// Styles
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div>
                        <Navbar />
                        <Main />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
