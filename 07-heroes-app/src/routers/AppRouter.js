import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Router>
          <div>
            <Switch>
              <PublicRoute exact path="/login" isAuthenticated={user.logged} component={ LoginScreen }/>
              <PrivateRoute path="/"  component={ DashboardRoutes } isAuthenticated={user.logged} />
            </Switch>
          </div>
        </Router>
      );
}
