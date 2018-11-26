import React, {Component} from 'react';
import './BrickType.css';

export default  class BrickType extends Component{
    constructor(){
        super();
    }
    render(){
        return(<div className="brick-type">{this.props.content}</div>);
    }
}