import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Cart from "../customer/Cart";
import Images from "../../images/product_1.jpg";
import Logo from '../../images/GrizzlyStoreLogo.png';
import HeaderImage from "../../images/polar_bear_header.jpg";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header_container" style={{backgroundImage: "url(" + HeaderImage + ")"}}>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo"><a><Link to='/'><img className="header_logo" src={Logo} alt=""/></Link></a></div>
                                        <nav className="main_nav">
                                            <ul className="nav_header_group_link">
                                                <li className="nav_header_links">
                                                    <a className="nav_links"><Link to='/'>Home</Link></a>
                                                </li>
                                                <li className="nav_header_links">
                                                    <a className="nav_links"><Link to='/product'>All Items</Link></a></li>
                                                <li className="hassubs nav_header_links">
                                                    <a className="nav_links"><Link to='/category'>Categories</Link></a>
                                                    <ul className="nav_dropdown">
                                                        <li><a><Link to='/category'>Art</Link></a></li>
                                                        <li><a><Link to='/category'>Clothing</Link></a></li>
                                                        <li><a><Link to='/category'>Home</Link></a></li>
                                                        <li><a><Link to='/category'>Jewellery</Link></a></li>
                                                        <li><a><Link to='/category'>Technology</Link></a></li>
                                                        <li><a><Link to='/category'>Toys</Link></a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_header_links">
                                                    <a className="nav_links" href="/sales">Sale</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="header_extra ml-auto">
                                            <div className="shopping_cart">
                                                <a className="nav_links"><Link to='/cart'>Cart</Link>
                                                    <span>(0)</span>
                                                </a>
                                            </div>
                                            <div className="search">
                                                <div className="search_icon">
                                                </div>
                                            </div>
                                            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="search_panel trans_300">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="search_panel_content d-flex flex-row align-items-center justify-content-end">
                                        <form action="#">
                                            <input type="text" className="search_input" placeholder="Search"
                                                   required="required"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header_social">
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </header>

                {/*This is where the side navigation starts for small screens...*/}

                {/*Adding more lines cause it makes it more viewable to know where the navigation for mobile starts*/}

                {/* ¯\_(ツ)_/¯ */}

                <div className="menu menu_mm trans_300">
                    <div className="menu_container menu_mm">
                        <div className="page_menu_content">
                            <ul className="page_menu_nav menu_mm">
                                    <a className="nav_header_links"><Link to='/'>Home</Link></a>

                                <li className="page_menu_item">
                                    <a className="nav_header_links"><Link to='/product'>All Items</Link></a>
                                </li>

                                {/*dropdown not working as intended at the moment */}

                                <li className="page_menu_item has-children menu_mm">
                                    <a className="nav_header_links" href="categories.html">Categories<i className="fa fa-angle-down"></i></a>
                                    <ul className="page_menu_selection menu_mm">
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a href="categories.html">Category<i
                                            className="fa fa-angle-down"></i></a></li>
                                    </ul>
                                </li>
                                    <a className="nav_header_links"><Link to='/sale'>Sale</Link></a>
                            </ul>
                        </div>
                    </div>

                    <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>

                    <div className="menu_social">
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

