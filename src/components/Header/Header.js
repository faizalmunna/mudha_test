import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import './../../index.css';

const headerWrapper = {
  boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
};

const navbarLogo = {
  width: '140px',
  height: 'auto'
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      <header className="bg-white fixed-top" style={headerWrapper}>
        <div>
            <Navbar color="light" light expand="md" className="navbar container navbar-light bg-white navbar-expand-lg">
              <NavbarBrand href="/" className="navbar-brand"><img src="./../image/logo.jpg" width="288" height="93" className="d-inline-block" alt="Eazy.me" style={navbarLogo} /></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto navbar-nav" id="navbarNavDropdown" navbar>
                  <NavItem className="nav-link">
                    <Link to={'/about'}>About</Link>
                  </NavItem>
                  <NavItem className="nav-link">
                    <Link to={'/categories'} >Categories</Link>
                  </NavItem>
                  <NavItem className="nav-link">
                  <Link to={'/Notifications'} >Notifications</Link>
                  </NavItem>
                  <NavItem className="nav-link">
                  <Link to={'/login'} >Login/Sign Up</Link>
                  </NavItem>
                  <NavItem className="nav-link">
                  <Link to={'/help'} >Help</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
      </header>
    
    );
  }
  
}

export default Header;
