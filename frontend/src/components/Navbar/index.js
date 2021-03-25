import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Connect.io</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/connections" activeStyle>
                        My Network
                    </NavLink>
                    
                    <NavLink to="/messages" activeStyle>
                        Messages
                    </NavLink>
                    {/* <NavLink to="/threads" activeStyle>
                        Threads
                    </NavLink> */}
                    <NavLink to="/resources" activeStyle>
                        Resources
                    </NavLink>
                    {/* <NavLink to="/signin" activeStyle>
                        Sign In
                    </NavLink> */}
                    {/* <NavLink to="/signup" activeStyle>
                        Sign Up
                    </NavLink> */}
                    <NavBtnLink to="/profile">My Profile</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/signin">My Profile</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </> 
    )
}

export default Navbar