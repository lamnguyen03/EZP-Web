import React from 'react';
import "../Style_EZParking/_headerHomepage.css"
import logo from "../images/logo.png";

const HeaderHomepage = () => {
    return (
        <nav className="navbar navbar-toggleable-md fixed-top">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="logo">
                <img className='imageLogo' src={logo} alt="Logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Blogs <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About Us <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contact <span className="sr-only"></span></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search here..."/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Download App</button>
                </form>
            </div>
        </nav>
    )
}

export default HeaderHomepage