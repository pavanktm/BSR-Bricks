import React, {Component} from 'react';
import BrickType from './BrickType/BrickType';
import Hoc from '../hoc/Hoc';
import '../Header/Header.css';

export default class BrickTypes extends Component{
    render(){
        return(
            <Hoc>
                <h2>Types Of bricks</h2>
                <div className="row">
                    <BrickType content="Content"/>
                    <BrickType content="Content"/>
                    <BrickType content="Content"/>
                    <BrickType content="Content"/>
                    <BrickType content="Content"/>
                    <BrickType content="Content"/>
                </div>
            </Hoc>
        );
    }
}