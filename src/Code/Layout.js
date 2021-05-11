import React from 'react';
import Nav from './Menu.js'
import Posts from './Posts.js';
import Form from './Email.js';

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
        </div>
    )
}

export default Layout;