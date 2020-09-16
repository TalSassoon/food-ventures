import React from 'react'
import { Link, withRouter } from 'react-router-dom'

export const _NavBar = () => {
  
  function toggleMenu() {
    document.body.classList.toggle('menu-open')
  }

  return (
    <nav className='nav-bar'>
      <div className='screen' onClick={toggleMenu}></div>

        {/* <img src={require('../logo.png')} alt="logo"/> */}

      <i className='hamburger fas fa-bars' onClick={toggleMenu}></i>
      <i className='x fas fa-times' onClick={toggleMenu}></i>

      <ul>
        NAVBAR
        {/* <Link to='/' onClick={toggleMenu}>
          <li>Home</li>
        </Link>
        <Link to='/toy' onClick={toggleMenu}>
          <li>Toys</li>
        </Link>
        <Link to='/toy/dashboard' onClick={toggleMenu}>
          <li>Dashboard</li>
        </Link>
        <Link to='/toy/about' onClick={toggleMenu}>
          <li>About</li>
        </Link> */}
      </ul>
    </nav>
  )
}

export const NavBar = withRouter(_NavBar)