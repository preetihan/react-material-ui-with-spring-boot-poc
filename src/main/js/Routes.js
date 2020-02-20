import React from 'react';
import { Switch, Route } from 'react-router';
import Dashboard from './page/Dashboard';
import Apple from './page/Apple';
import NotFound from './page/NotFound';

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/apple" component={Apple} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}

export default Routes