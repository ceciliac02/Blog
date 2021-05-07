import React from 'react';
import Link from '../icons/copylink.png';
import Twitter from '../icons/twitter.png';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render () {
        const link = Link;
        const fb = Facebook;
        const twitter = Twitter;
        const insta = Instagram;
        return (
            <div className="modal">
                <span>Copy Url <img src={link} alt=""/></span>
                <span>Twitter <img src={twitter} alt=""/></span>
                <span>Facebook <img src={fb}/></span>
                <span>Instagram <img src={insta} alt=""/></span>
            </div>
        )
    }
}

export default Modal;