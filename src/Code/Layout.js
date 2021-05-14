import React from 'react';
import Posts from './Posts.js';
import Form from './Email.js';
import About from './About.js';
import SignIn from './SignIn.js';

class Layout extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            content: <Posts />
        }      
    }
    home = () => {
        this.setState({
            content: <Posts />
        })
    }
    about = () => {
        this.setState ({
            content: <About />
        })
    }
    signIn = () => {
        this.setState({
            content: <SignIn />
        })
    }
    render () {
        return (
            <div className="outerContainer">
                <div className="header">
                    <div className="webName" onClick={this.about}>MyWebsite</div>
                    <div className="nav">
                        <ul>
                            <li onClick={this.home}>Home</li>
                            <li onClick={this.about}>About</li>
                            <li onClick={this.signIn}>Sign In</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    </div>
                <div className="body">
                    <div className="mainBox">
                        {this.state.content}
                    </div>
                    <div className="auxBoxes">
                        <div className="sideBox">
                            <Form />
                        </div>
                        <div className="ad">
                            <div id="ad">
                                Ad.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">This is the footer. This is where the copyright would go</div>
            </div>
        )
    }
}

export default Layout;