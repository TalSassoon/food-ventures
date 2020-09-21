import React, { Component } from 'react'

export class Header extends Component {

  scrollDown() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  render() {
    return (
      <section className="header full">
        <h3>Delivering you the ultimate food experience</h3>
        <h4>Cuisines from around the world</h4>
        <div className="arrow" onClick={this.scrollDown} style={{cursor: 'pointer'}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    )
  }
}