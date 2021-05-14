import React from 'react';

function Help () {
    return (
        <> 
        <div className="pageHeader">
            <p>Frequently Asked Questions</p>
        </div>
        <div className="pageBody">
            <p className="q">1. Who created this website?</p>
            <p className="a">A self taught programmer named Cecilia Cruz created this website to showcase her skills</p>
            <p className="q">2. How was this site created?</p>
            <p className="a">This blog site was created using Javascript/React as well as CSS/SCSS</p>
            <p className="q">3. Are there any more examples of the creators work?</p>
            <p className="a">Yes! You can visit my <a href="https://github.com/ceciliac02">github</a>!</p>
        </div>
        </>
    )
}

export default Help;