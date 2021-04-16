import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">RegisterScreen</h3>
            <form>
                <input type="text" placeholder="Name" name="name" className="auth__input"/>
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off"/>
                <input type="password" placeholder="Password" name="password" className="auth__input"/>
                <input type="password" placeholder="Confirm Password" name="password2" className="auth__input"/>
                <button type="submit" className="btn btn-primary btn-block"> Register </button>
                <hr/>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign up with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/login" className="link">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
