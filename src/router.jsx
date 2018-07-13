import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './page';
import aboutUs from './aboutUs';

class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path='/' component={Page} />
                        <Route path='/aboutUs' component={aboutUs} />
                    </Switch>
                </div>
            </Router>
        )

    }
}
export default Routing
