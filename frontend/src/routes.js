import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home/Home'
import Contato from './Pages/Contato/Contato'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contato" component={Contato} />
        </Switch>
    </BrowserRouter>
);

export default Routes;