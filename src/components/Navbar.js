import React from 'react';
import '../styles/Navbar.css';




const NavBar = (props) => {
    return(
        <header className = 'nav_header'>
            <nav className = 'navigation_bar'>
                <div className = 'nav_logo' >
                    <h>Cab230 Stock App</h>
                </div>

                <div className ='spacer'></div>
                    
                <div className = 'navigation_items'>
                    <ul>
                            <li><a href='/'>Login</a></li>
                            <li><a href='/'>Register</a></li>
                    </ul>
                </div>
            </nav>
            
        </header>
    );

}

export default NavBar;