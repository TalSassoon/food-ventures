import React from 'react'
import { Link, withRouter } from 'react-router-dom'

export const _NavBar = () => {

  function toggleMenu() {
    document.body.classList.toggle('menu-open')
  }

  return (
    <nav className='nav-bar flex'>

      {/* <div className='screen' onClick={toggleMenu}></div> */}
      <Link to='/'><img src={require('../img/logo_green.png')} alt="logo" /></Link>

      {/* <i className='hamburger fas fa-bars' onClick={toggleMenu}></i>
      <i className='x fas fa-times' onClick={toggleMenu}></i> */}

      <ul className="flex">
        <Link to='/' onClick={toggleMenu}><li>LINK</li></Link>
        <Link to='/toy' onClick={toggleMenu}><li>LINK</li></Link>
        <Link to='/toy/dashboard' onClick={toggleMenu}><li>LINK</li></Link>
        <Link to='/toy/about' onClick={toggleMenu}><li>LINK</li></Link>
      </ul>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)