import React, { Component } from 'react'

export class Header extends Component {

  scrollDown() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  render() {
    return (
      <section className="header full">
        <div className="arrow" onClick={this.scrollDown} style={{cursor: 'pointer'}}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    )
  }
}