import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MainMenu extends Component {
    render() {
      return (
        <nav className="MainMenu">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/clubs">Clubs</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/international">International</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/donate">Donate</Link></li>
            </ul>
        </nav>
      );
    }
  }