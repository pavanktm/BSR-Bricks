import React, {Component} from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import './Navigation.css';

export default class Navigation extends Component{
    render(){
        return(
            <nav className="nav">
                <NavigationItems/>
            </nav>
        );
    }
}