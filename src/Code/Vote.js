import React from 'react';

class Upvote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            hasVoted: false
        }
    }
    increment = () => {
        this.setState ({
            counter: this.state.counter + 1,
            hasVoted: true
        })
    } 
    undoIncrement = () =>  {
        this.setState ({
            counter: this.state.counter - 1,
            hasVoted: false
        })
    }
    render () {
        return (
            <div className="upvote">
                <span className="upvoteBtn" onClick={this.state.hasVoted ? this.undoIncrement : this.increment}>⇧</span>
                <span className="counter">{this.state.counter}</span>
            </div>
        )
    }
}

export default Upvote;