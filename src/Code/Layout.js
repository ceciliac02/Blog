import React from 'react';
import Posts from './Posts.js';
import Form from './Email.js';
import About from './About.js';
import SignIn from './SignIn.js';
import Help from './Help.js';
import Hamburger from 'react-hamburger-menu';

class Layout extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            content: <Posts />,
            open: false
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
    help = () => {
        this.setState({
            content: <Help />
        })
    }
    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }
    toggleNav = () => {
        
        console.log(this.state.open)
    }
    render () {
        return (
            <div className="outerContainer">
                <div className="header">
                    <div className="webName" onClick={this.home}>MyWebsite</div>
                    <Hamburger className="hamMenu" 
                    color="white"
                    width={30}
                    height={20}
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    />
                    <div className="nav">
                        <ul>
                            <li onClick={this.home}>Home</li>
                            <li onClick={this.about}>About</li>
                            <li onClick={this.signIn}>Sign In</li>
                            <li onClick={this.help}>Help</li>
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