import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class _NavBar extends Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }

  toggleMenu() {
    document.body.classList.toggle('menu-open')
  }

  render() {
    return (
      <nav className={"nav-bar flex" + (this.state.isTop ? ' top' : '')}>

        {/* <div className='screen' onClick={toggleMenu}></div> */}

        <Link to='/'><img src={require('../img/logo.png')} alt="logo" /></Link>

        {/* <i className='hamburger fas fa-bars' onClick={toggleMenu}></i>
      <i className='x fas fa-times' onClick={toggleMenu}></i> */}

        <ul className="flex">
          <Link to='/chef' onClick={this.toggleMenu}><li>CHEFS</li></Link>
          <Link to='/' onClick={this.toggleMenu}><li>LOCATIONS</li></Link>
          <Link to='/' onClick={this.toggleMenu}><li>CUISINES</li></Link>
          <Link to='/' onClick={this.toggleMenu}><li>ABOUT</li></Link>
        </ul>
      </nav>
    )
  }
}

export const NavBar = withRouter(_NavBar)