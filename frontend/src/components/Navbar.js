import React, { useState, useEffect } from 'react';
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

import AuthService from "./auth-services/auth.service";

export default function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

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
                    <span style={styles2} className="hide"> <b>MIGR - AI - TION</b> </span>
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

                        {showAdminBoard && (
                            <MDBNavbarLink href="/admin"> Admin Board </MDBNavbarLink>
                        )}

                        {currentUser && (
                            <MDBNavbarLink href="/user"> User </MDBNavbarLink>
                        )}

                        {currentUser ? (
                            <div>
                                <MDBNavbarLink href={"/profile"}>
                                    {currentUser.username}
                                </MDBNavbarLink>

                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                        LogOut
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <MDBNavbarLink href={"/login"} className="nav-link">
                                        Login
                                    </MDBNavbarLink>
                                </li>
                                <li className="nav-item">
                                    <MDBNavbarLink href={"/register"} className="nav-link">
                                        Sign Up
                                    </MDBNavbarLink>
                                </li>
                            </div>
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}