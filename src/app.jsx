import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './page';
import aboutUs from './aboutUs';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Page} />
                <Route exact path='/aboutUs' component={aboutUs} />
            </Switch>
        )

    }
}
export default App;
