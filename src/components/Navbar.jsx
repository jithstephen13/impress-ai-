import React from 'react'
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Create Resume</Link>
      </li>
      <li>
        <Link to="/view">View Resume</Link>
      </li>
    </ul>
  </nav>
  )
}


