import React from 'react';
import Link from '../icons/copylink.png';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render () {
        let link = Link;
        return (
            <div className="modal">
                <span>Copy Url <img src={link}/></span>
                <span>Twitter</span>
                <span>Facebook</span>
                <span>Instagram</span>
            </div>
        )
    }
}

export default Modal;