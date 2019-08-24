
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect, Link, Router, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import HousesPage from './components/houses-page';
import CharacterPage from './components/character-page';
import Loader from './components/loader/loader';
import createStore from './store';
import './app.scss'

class App extends Component {

    cancel: any;
    store = createStore;

    constructor(props: object) {
        super(props);
        this.state = {
            users: [],
            done: false
        }
        this.cancel = null;
    }

    componentDidMount() {
        axios.get('https://www.anapioficeandfire.com/api/houses')
             .then(response => response.data)
             .then(data => {
                 console.log(data);
             })
    }

    componentWillUnMount() {
        this.cancel()
    }

    render () {
        return (
            <Provider store={this.store()}>
                <div className="container">
                    <HashRouter>
                        <ul className="menu">
                            <li>
                                <Link to="/houses">Houses</Link>
                            </li>
                        </ul>
                        <div>
                            <Switch>
                                <Route exact path="/houses" component={HousesPage} />
                                <Redirect exact from="/" to="/houses" />
                                <Route exact path="/character/:id" component={CharacterPage} />
                            </Switch>
                        </div>
                    </HashRouter>
                </div>
                <Loader />
            </Provider>
        )
    }
}

export default App;