import React, {Component} from 'react';
import './NavigationItem.css';

export default class NavigationItem extends Component{
    constructor(){
        super();
    }
    getText = function(item){
        return this.props.title ? this.props.title : "Not Defined";
    }
    render(){
        return(
            <div className="nav-item">
                <li><a className="link" href={this.props.url}>{this.getText(this.props.title)}</a> </li>
            </div>
        );
    }
}