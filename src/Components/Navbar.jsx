import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">GAMES</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" exact>
                Puzzles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fifteen" exact>
                Game of Fifteen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/figures">
                Figures
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rainbow">
                Rainbow
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/watch">
                Watch
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
