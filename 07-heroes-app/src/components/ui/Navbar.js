import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const loc = useHistory();
    
    const handleLogOut = () => {
        
        dispatch({
            type: types.logout,
        });
        
        localStorage.removeItem('user');

        loc.push('./login');


    }

    return (
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/marvel"
                                >
                                    Marvel
                                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/dc"
                                >
                                    DC
                                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink 
                                    activeClassName="active"
                                    className="nav-item nav-link" 
                                    exact
                                    to="/search"
                                >
                                    Search
                                </NavLink>
                </li>
                <li>
                <button className="nav-item nav-link btn" onClick={handleLogOut}>
                    Logout
                </button>
                </li>
                </ul>

                <span className="navbar-text">
                    {user.nombre}
                </span>
                
            </div>
            </div>
            </nav>
    )
}