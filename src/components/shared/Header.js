import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Cart from "../customer/Cart";

class Header extends Component {
    render() {
        return (
            <div>

                <header className="header">
                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div
                                        className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="logo"><a><Link to='/'>Sublime</Link></a></div>
                                        <nav className="main_nav">
                                            <ul>
                                                <li className="hassubs active">
                                                    <a><Link to='/'>Home</Link></a>
                                                    <ul>
                                                        <li><a><Link to='/category'>Categories</Link></a></li>
                                                        <li><a><Link to='/product'>Product</Link></a></li>
                                                        <li><a><Link to='/cart'>Cart</Link></a></li>
                                                        <li><a><Link to='/checkout'>Check out</Link></a></li>
                                                        <li><a><Link to='/contact'>Contact</Link></a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs">
                                                    <a><Link to='/category'>Categories</Link></a>
                                                    <ul>
                                                        <li><a><Link to='/category'>Toys</Link></a></li>
                                                        <li><a><Link to='/category'>Smartphones</Link></a></li>
                                                        <li><a><Link to='/category'>Electrical</Link></a></li>
                                                        <li><a><Link to='/category'>Household</Link></a></li>
                                                        <li><a><Link to='/category'>Bears</Link></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Offers</a></li>
                                                <li><a><Link to='/contact'>Contact</Link></a></li>
                                            </ul>
                                        </nav>
                                        <div className="header_extra ml-auto">
                                            <div className="shopping_cart">
                                                <a ><Link to='/cart'>Cart</Link>
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
                <div className="menu menu_mm trans_300">
                    <div className="menu_container menu_mm">
                        <div className="page_menu_content">

                            <div className="page_menu_search menu_mm">
                                <form action="#">
                                    <input type="search" required="required" className="page_menu_search_input menu_mm"
                                           placeholder="Search for products..."/>
                                </form>
                            </div>
                            <ul className="page_menu_nav menu_mm">
                                <li className="page_menu_item has-children menu_mm">
                                    <a>Home<i className="fa fa-angle-down"></i></a>
                                    <ul className="page_menu_selection menu_mm">
                                        <li className="page_menu_item menu_mm"><a><Link to='/category'>Categories</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/product'>Product</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/cart'>Cart</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/checkout'>Check out</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/contact'>Contact</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                    </ul>
                                </li>
                                <li className="page_menu_item has-children menu_mm">
                                    <a >Categories<i className="fa fa-angle-down"></i></a>
                                    <ul className="page_menu_selection menu_mm">
                                        <li className="page_menu_item menu_mm"><a><Link to='/category'>Categories</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/category'>Categories</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a><Link to='/category'>Categories</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item menu_mm"><a ><Link to='/category'>Categories</Link><i
                                            className="fa fa-angle-down"></i></a></li>
                                    </ul>
                                </li>
                                <li className="page_menu_item menu_mm"><a>Accessories<i
                                    className="fa fa-angle-down"></i></a></li>
                                <li className="page_menu_item menu_mm"><a>Offers<i
                                    className="fa fa-angle-down"></i></a></li>
                                <li className="page_menu_item menu_mm"><a><Link to='/contact'>Contact</Link><i
                                    className="fa fa-angle-down"></i></a></li>
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

