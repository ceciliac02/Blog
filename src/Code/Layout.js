import React from 'react';
import Nav from './Menu.js'
import Posts from './Posts.js';

function Layout () {
    return (
        <div className="outerContainer">
            <div className="header">
                <div className="webName">MyWebsite</div>
                <Nav />
                </div>
            <div className="body">
                <div className="mainBox">
                    <Posts />
                    <Posts />
                </div>
                <div className="auxBoxes">
                    <div className="sideBox"></div>
                    <div className="ad"></div>
                </div>
            </div>
        </div>
    )
}

export default Layout;