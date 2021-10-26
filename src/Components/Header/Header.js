import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

// Header is starts from here
const Header = () => {
    return (
    <section>
     <div className="headerWrapper">
     <Navbar expand="lg">
    <Navbar.Brand className="siteLogo"><span className="logo">Skill<span className="fas fa-meteor"></span>Up</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navBars">
        <NavLink className="routingLink" to="/home" activeClassName="selected">Home</NavLink>
        <NavLink className="routingLink" to="/services" activeClassName="selected">Services</NavLink>
        <NavLink className="routingLink" to="/about" activeClassName="selected">About Us</NavLink>
        <NavLink className="routingLink" to="/instructors" activeClassName="selected">Instructors</NavLink>
      </Nav>
      <div className="searchForm">
      <span className="searchIcon fas fa-search"></span><input className="searchField" type="search" placeholder="Search something..."/>
      <button className="buttonBtn">Contact Now</button>
      </div>
    </Navbar.Collapse>
   </Navbar>
 </div>
</section>
    
    );
};

export default Header;