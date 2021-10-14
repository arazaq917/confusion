import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenueComponent';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color = "primary">
        <div className="container">
        <NavbarBrand href = "/">Restourent Menue</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
