import React from 'react'
//import logo from '../logo.svg'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar color="dark">
        <NavbarBrand className="text-white"> Doctor Appointments</NavbarBrand>
      </Navbar>
    </header>
  )
}

export default NavBar
