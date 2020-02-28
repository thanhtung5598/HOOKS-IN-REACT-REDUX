import React, { Component } from 'react'

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true
        }
    }
    toggleIsShown = () => this.setState({ isShown: !this.state.isShown });
    render() {
        return (
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                {this.state.isShown && <div>Text goes here</div>}
            </div>
        )
    }
}
