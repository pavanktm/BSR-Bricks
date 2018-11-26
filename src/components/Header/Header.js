import React, {Component} from 'react';
import Navigation from './Navigation/Navigation';
import logo from '../../resources/img/logo.jpeg';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <header>
                <div className="row">
                    <div className="col1">
                        <img src={logo} className="logo-img" width="auto" height="100%"/>
                    </div>
                    <div className="col2">
                        <div className="col2-row1">
                            <h1>BSR Bricks</h1> <br/>
                        </div>
                        <div className="col2-row2">
                            <h2>Buy STRONG TO BE STRONG</h2>
                        </div>
                        <div className="col2-row3">
                            <Navigation/>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}