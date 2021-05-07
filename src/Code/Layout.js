import React from 'react';
import Nav from './Menu.js'
import Posts from './Posts.js';

function Layout () {
    const closeModal = () => {
        const modal = document.querySelectorAll(".modal");
          if (modal.length > 0) {
              for (let i = 0; i < modal.length; i++) {
                modal[i].classList.remove("active");
              }
            }
          else {
            console.log("already closed");
          } 
      }
    return (
        <div className="outerContainer" onClick={() => closeModal()}>
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