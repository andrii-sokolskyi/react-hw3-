
import React, { Component } from 'react';
import { Route, Switch, Redirect, Link, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HousesPage from './components/houses-page';
import CharacterPage from './components/character-page';
import Loader from './components/loader/loader';
import createStore from './store';
import './app.scss'

class App extends Component {

    store = createStore;

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
                                <Redirect from="*" to="/houses" />
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