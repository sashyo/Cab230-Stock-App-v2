
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  if (props.isAuth !== null) {
    return (
      <header className="nav_header">
        <nav className="navigation_bar">
          <div>
            <div className='nav_logo'>
              <div className='logo_img'>
                <h>Cab230 Stock App</h>
              </div>
            </div>
          </div>
          <div class='navigation_items'>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/all-stocks'>
                <li>Stocks</li>
              </Link>
              <Link>
                <li>Quotes</li>
              </Link>
              <Link>
                <li>Price History</li>
              </Link>
            </ul>
          </div>

          <div className="navigation_items">
            <button
              onClick={() => {
                localStorage.removeItem("token");
              }}
              value='Log Out'
            >
              Log Out
              </button>



          </div>
        </nav>
      </header>
    );

  } else {
    return (
      <header className="nav_header">
        <nav className="navigation_bar">
          <div>
            <div className='nav_logo'>
              <div className='logo_img'>
                <h>Cab230 Stock App</h>
              </div>
            </div>
          </div>
          <div class='navigation_items'>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/all-stocks'>
                <li>Stocks</li>
              </Link>
              <Link>
                <li>Quotes</li>
              </Link>
              <Link>
                <li>Price History</li>
              </Link>
            </ul>
          </div>

          <div className="navigation_items">
            <ul>
              <Link to='/login'>
                <li>Login</li>
              </Link>
              <Link to='/register'>
                <li>Register</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
