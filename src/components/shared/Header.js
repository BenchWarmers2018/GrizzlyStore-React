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
                                        <div className="logo"><Link to='/'><img className="header_logo" src={Logo} alt=""/></Link></div>
                                        <nav className="main_nav">
                                            <ul className="nav_header_group_link">
                                                <li className="nav_header_links">
                                                    <Link className="nav_links" to='/'>Home</Link>
                                                </li>
                                                <li className="nav_header_links">
                                                    <Link className="nav_links" to='/product'>All Items</Link></li>
                                                <li className="hassubs nav_header_links">
                                                    <Link className="nav_links" to='/category'>Categories</Link>
                                                    <ul className="nav_dropdown">
                                                        <li><Link to='/category'>Art</Link></li>
                                                        <li><Link to='/category'>Clothing</Link></li>
                                                        <li><Link to='/category'>Home</Link></li>
                                                        <li><Link to='/category'>Jewellery</Link></li>
                                                        <li><Link to='/category'>Technology</Link></li>
                                                        <li><Link to='/category'>Toys</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_header_links">
                                                    <a className="nav_links" href="/sales">Sale</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="header_extra ml-auto">
                                            <div className="shopping_cart">
                                                <Link className="nav_links" to='/cart'>Cart <span>(0)</span></Link>
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
                                    <Link className="nav_header_links" to='/'>Home</Link>
                                <li className="page_menu_item">
                                    <Link className="nav_header_links" to='/product'>All Items</Link>
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
                                    <Link className="nav_header_links" to='/sale'>Sale</Link>
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

