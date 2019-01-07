import React, { Component } from 'react';
import './NavMenu.css';

export class NavMenu extends Component {
  render() {
    return (
      <div className="nav">
        <a className="nav__link"href={'/'}><i className="icon-home" /></a>
        <a className="nav__link" href={'/account'}><i className="icon-user" /></a>
        <a className="nav__link" href={'/expenses'}><i className="icon-pencil" /></a>
        <a className="nav__link" href={'/analyze'}><i className="icon-chart-arrow" /></a>
      </div>
    );
  }
}
