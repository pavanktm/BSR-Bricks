import React, {Component} from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import VerticalLine from './VerticalBar/VerticalLine';
import './NavigationItems.css';

export default class NavigationItems extends Component{
    render(){
        return(
            <ul className="nav-items">
                <NavigationItem title="About Us " url="#"/>
                <NavigationItem title="Types Of Bricks " url="#"/>
                <NavigationItem title="Order Bricks " url="#"/>
                <NavigationItem title="Check Status " url="#"/>
                <NavigationItem title="Contact Us " url="#"/>
            </ul>
        );
    }
}