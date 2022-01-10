import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

import logo from "../pics/logo.png"
import './Navbar.css';

export default function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);

    var styles1 = {
        width: '35px',
        marginLeft: '10px',
    }

    var styles2 = {
        fontSize: '24px',
        padding: '10px',
    }

    var styles3 = {
        boxShadow: 'none',
    }

    return (
        <MDBNavbar expand='lg' light style={styles3} >
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <img src={logo} style={styles1} alt="logo" />
                    <span style={styles2} class="hide"> MIGR-AI-TION </span>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        {/* <MDBNavbarLink active aria-current='page' href='/Gallery'>
                            Gallery
                        </MDBNavbarLink> */}
                        <MDBNavbarLink href='/Blog'>Blog</MDBNavbarLink>
                        <MDBNavbarLink href='/About'>About</MDBNavbarLink>
                        <MDBNavbarLink href='/Contact'>Contact</MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}