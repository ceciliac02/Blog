import React from 'react';
import Link from '../icons/copylink.png';
import Twitter from '../icons/twitter.png';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';

class Share extends React.Component {
    showModal = () => {
        const modal = document.querySelectorAll(".modal");
        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.add("active")
        }
    }
    closeModal = () => {
        const modal = document.querySelectorAll(".modal");
        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.remove("active")
        }
    }
    showUrl = () => {
        const urlCopy = document.querySelectorAll(".copiedUrl");
        for (let i = 0; i < urlCopy.length; i++) {
            urlCopy[i].classList.add("active");
            setTimeout(() => {urlCopy[i].classList.remove("active")}, 3000)
        }
    }
    render () {
        const link = Link;
        const fb = Facebook;
        const twitter = Twitter;
        const insta = Instagram;
        return (
            <div className="share">
                <div className="shareBtn" onClick={this.showModal}>Share</div>
                <div className="modal">
                    <div className="modalHeader">
                        <span id="modalClose" onClick={this.closeModal}>&times;</span>
                    </div>
                    <div className="modalBody">
                        <span className="socialLink" onClick={this.showUrl}>Copy Url <img src={link} alt=""/></span>
                        <span className="copiedUrl">Copied Url</span>
                        <span className="socialLink">Twitter <img src={twitter} alt=""/></span>
                        <span className="socialLink">Facebook <img src={fb} alt=""/></span>
                        <span className="socialLink">Instagram <img src={insta} alt=""/></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Share;