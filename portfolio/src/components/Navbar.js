import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="logo..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                            </li><li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                            </li>
                            
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        
    );
}

export default Navbar;
