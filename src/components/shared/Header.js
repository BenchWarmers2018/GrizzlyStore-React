import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../node_modules/mdbreact/dist/css/mdb.css';
import {Link, Redirect} from "react-router-dom";
import Logo from "../../images/images_sublime/GrizzlyStoreLogo.png";

class Header2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            redirect: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    submitForm = (e) => {
        this.setState({
            redirect: true
        })
    }


    render() {

        return (
            <div>
                <Navbar color="white" light expand="md" scrolling>
                    <NavbarBrand href="/">
                        <div className="logo"><Link to='/'><img className="header_logo" src={Logo} alt=""/></Link></div>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem >
                                <NavLink to="/">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/items/all">ITEMS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/sale">SALE</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav caret>CATEGORIES</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="/art">Art</DropdownItem>
                                        <DropdownItem href="/fashion">Fashion</DropdownItem>
                                        <DropdownItem href="/electronics">Electronics</DropdownItem>
                                        <DropdownItem href="/home">Home & Living</DropdownItem>
                                        <DropdownItem href="/jewellery">Jewellery</DropdownItem>
                                        <DropdownItem href="/toys">Toys</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <form onSubmit={this.submitForm} className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search"/>
                                </form>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/cart"><i className="fa fa-shopping-cart"></i>CART</NavLink>
                            </NavItem>
                            <NavItem className="main-nav">
                                <NavLink to="/" >LOGIN</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

                {/* Modal box starts here */}

                <div class="user-modal">
                    <div class="user-modal-container">
                        <ul class="switcher">

                            {/*button for google log in here*/}

                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#">New account</a></li>
                        </ul>

                        <div id="login">
                            <form className="form">
                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signin-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail" />
                                    <span className="error-message">An account with this email address does not exist!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signin-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signin-password" type="password"  placeholder="Password" />
                                    <span className="error-message">Wrong password! Try again.</span>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width" type="submit" value="Login" />
                                </p>
                            </form>

                            <p className="form-bottom-message"><a href="#0">Forgot your password?</a></p>
                        </div>

                        <div id="signup">
                            <form className="form">
                                <p className="fieldset">
                                    <label className="image-replace username" htmlFor="signup-username">Username</label>
                                    <input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" />
                                    <span className="error-message">Your username can only contain numeric and alphabetic symbols!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" />
                                    <span className="error-message">Enter a valid email address!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password" type="password"  placeholder="Password" />
                                    <span className="error-message">Your password has to be at least 6 characters long!</span>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Create account" />
                                </p>
                            </form>

                            {/*Stretch goals*/}

                            <div id="reset-password">
                                <p className="form-message">Lost your password? Please enter your email address.<br /> You will receive a link to create a new password.</p>

                                <form className="form">
                                    <p className="fieldset">
                                        <label className="image-replace email" htmlFor="reset-email">E-mail</label>
                                        <input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
                                        <span className="error-message">An account with this email does not exist!</span>
                                    </p>

                                    <p className="fieldset">
                                        <input className="full-width has-padding" type="submit" value="Reset password" />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <a href="#0" className="close-form">Close</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header2;

