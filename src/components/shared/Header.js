import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Cart from "../customer/Cart";
import Images from "../../images/product_1.jpg";
import Logo from '../../images/GrizzlyStoreLogo.png';

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
                                        <div className="logo"><a><Link to='/'><img className="header_logo" src={Logo} alt=""/></Link></a></div>
                                        <nav className="main_nav">
                                            <ul className="nav_header_group_link">
                                                <li className="hassubs nav_header_links">
                                                    <a className="nav_links"><Link to='/'>Home</Link></a>
                                                    <ul>
                                                        <li><a><Link to='/category'>Categories</Link></a></li>
                                                        <li><a><Link to='/product'>Product</Link></a></li>
                                                        <li><a><Link to='/cart'>Cart</Link></a></li>
                                                        <li><a><Link to='/checkout'>Check out</Link></a></li>
                                                        <li><a><Link to='/contact'>Contact</Link></a></li>
                                                    </ul>
                                                </li>
                                                <li className="hassubs nav_header_links">
                                                    <a className="nav_links"><Link to='/category'>Categories</Link></a>
                                                    <ul>
                                                        <li><a><Link to='/category'>Art</Link></a></li>
                                                        <li><a><Link to='/category'>Clothing</Link></a></li>
                                                        <li><a><Link to='/category'>Home</Link></a></li>
                                                        <li><a><Link to='/category'>Jewellery</Link></a></li>
                                                        <li><a><Link to='/category'>Technology</Link></a></li>
                                                        <li><a><Link to='/category'>Toys</Link></a></li>
                                                    </ul>
                                                </li>
                                                <li className="nav_header_links">
                                                    <a className="nav_links" href="#">Sales</a>
                                                </li>
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

