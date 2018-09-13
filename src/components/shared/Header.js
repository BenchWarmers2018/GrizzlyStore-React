import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from "../customer/Cart";
import Images from "../../images_sublime/product_1.jpg";
import Logo from '../../images_sublime/GrizzlyStoreLogo.png';
import HeaderImage from "../../images_sublime/polar_bear_header.jpg";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                <div className="logo"><Link to='/'><img className="header_logo" src={Logo} alt=""/></Link></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="col-lg-4 active nav-item ">
                            <Link to='/' className="nav-link">HOME</Link>
                        </li>
                        <li className="col-lg-4 nav-item">
                            <Link to='/items' className="nav-link">ITEMS</Link>
                        </li>

                        <li className="col-lg-4 nav-item">
                            <Link to='/sale' className="nav-link">SALE</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

