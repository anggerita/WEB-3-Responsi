import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Beranda from './Beranda';
import TentangSaya from './TentangSaya';
import WelcomeBooth from './WelcomeBooth';
import Covid from './Covid';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/beranda" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/welcome" component={WelcomeBooth} />
        <Route path="/covid" component={Covid} />
    </Switch>
)

export default Utama;