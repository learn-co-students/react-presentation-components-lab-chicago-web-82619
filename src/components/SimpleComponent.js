// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    iSad = () => {
        this.setState({
            mood: "sad"
        })
    }

    render() {
        return (<div onClick={this.iSad}>{this.state.mood}</div>) 
    }
}