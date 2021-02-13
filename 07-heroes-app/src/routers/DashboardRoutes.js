import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                
                <Route exact path="/search" component={ SearchScreen }/>
                <Route exact path="/dc" component={ DcScreen }/>
                <Route exact path="/marvel" component={ MarvelScreen }/>
                <Route exact path="/hero/:heroeId" component={ HeroesScreen }/>
                <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
