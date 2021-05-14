import React from 'react';
import { EmailShareButton, FacebookShareButton, RedditShareButton, TumblrShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { EmailIcon, FacebookIcon, RedditIcon, TumblrIcon, TwitterIcon, WhatsappIcon } from 'react-share';

class Share extends React.Component {
    showModal = () => {
        const modal = document.querySelectorAll(".modalOverlay");
        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.add("active")
        }
    }
    closeModal = () => {
        const modal = document.querySelectorAll(".modalOverlay");
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
    webUrl = window.location.href;

    render () {
        return (
            <div className="share">
                <div className="shareBtn" onClick={this.showModal}>Share</div>
                <div className="modalOverlay" onClick={this.closeModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modalHeader">
                            Thanks for sharing!
                            <span id="modalClose" onClick={this.closeModal}>&times;</span>
                        </div>
                        <div className="modalBody">
                            <EmailShareButton className="socialLink">
                                <EmailIcon borderRadius={5}></EmailIcon>
                            </EmailShareButton>
                            <FacebookShareButton className="socialLink" url={this.webUrl}>
                                <FacebookIcon borderRadius={5}></FacebookIcon>
                            </FacebookShareButton >
                            <RedditShareButton className="socialLink" url={this.webUrl}>
                                <RedditIcon borderRadius={5}></RedditIcon>
                            </RedditShareButton >
                            <TumblrShareButton className="socialLink" url={this.webUrl}>
                                <TumblrIcon borderRadius={5}></TumblrIcon>
                            </TumblrShareButton>
                            <TwitterShareButton className="socialLink" url={this.webUrl}>
                                <TwitterIcon borderRadius={5}></TwitterIcon>
                            </TwitterShareButton>
                            <WhatsappShareButton className="socialLink" url={this.webUrl}>
                                <WhatsappIcon borderRadius={5}></WhatsappIcon>
                            </WhatsappShareButton>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Share;