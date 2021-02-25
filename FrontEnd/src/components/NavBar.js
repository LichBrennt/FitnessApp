import React from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { useState } from 'react'
import ImgLogo from '../assets/logo.png'

const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        isOpen? setIsOpen(false): setIsOpen(true)
      }

    return(
        <React.Fragment>
        <MDBNavbar color="elegant-color-dark" dark expand="md" className="sticky-top">
            <MDBNavbarBrand>
            <img width="50px" src={ImgLogo} alt="logo"/>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/home">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/movies">Movies</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    </React.Fragment>
    )
}

export default NavBar