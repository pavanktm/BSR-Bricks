import React, {Component} from 'react';

export default class Hoc extends Component{
    constructor(){
        super();
    }
    render() {
        return(this.props.children);
    }
}