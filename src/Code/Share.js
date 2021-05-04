import React from 'react';
import Modal from './Modal.js'

class Share extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    shared = () => {
        this.setState ({
            clicked: true
        })
    }
    render () {
        return (
            <div className="share">
                <div className="shareBtn">Share</div>
                <div className="shareOverlay">Shared!</div>
            </div>
        )
    }
}

export default Share;