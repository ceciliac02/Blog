import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false
        }
    }
    signIn = () => {
        this.setState({
            signedIn: true
        })
    }
    signOut = () => {
        this.setState({
            signedIn: false
        })
    }
    render () {
        return (
            <>
                <div className="pageHeader">
                    <p>Sign In</p>
                </div>
                <div className="pageBody">
                    <form className="signInForm">
                        <label htmlFor="username">Username:</label>
                        <input id="username" className="signInInput" type="text" />
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="signInInput" type="password" />
                        <div className="signInButton">Sign In</div>
                        <a href="#">Have trouble logging in?</a>
                    </form>
                </div>
            </>
        )
    }
}

export default SignIn;