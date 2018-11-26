import React, { Component } from 'react';
import Header from './components/Header/Header';
import BrickType from './components/BrickTypes/BrickTypes';
import OrderBricks from './components/OrderBrick/OrderBricks';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BrickType />
        <OrderBricks />
        <Footer/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;
