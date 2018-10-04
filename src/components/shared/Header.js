import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../node_modules/mdbreact/dist/css/mdb.css';
import {Link, Redirect} from "react-router-dom";
import Logo from "../../images/images_sublime/GrizzlyStoreLogo.png";
import LoginForm from "../shared/login/LoginForm.js";
import { connect } from "react-redux"
import { fetchAccounts } from "../../actions/accountAction"
import GoogleLogin from "../shared/GoogleLogin.js";
import { createAccount } from "../../actions/accountAction";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            redirect: false,
            emailAddress: "",
            password: "",
            googleEmailAddress:"",
            isSignedIn : false,
            user: null,
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

    handleChangeEmail = (event1) => {
        this.setState({emailAddress: event1.target.value});
        console.log('changed');
        console.log(this.state.emailAddress);
        console.log(this.state.password);
    }
    handleChangePassword = (event2) => {
        this.setState({password: event2.target.value});
        console.log('changed');
        console.log(this.state.emailAddress);
        console.log(this.state.password);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {accountEmailAddress: this.state.emailAddress, accountPassword: this.state.password};
        console.log(user);
        this.props.dispatch(createAccount(user));

    }

    render() {

        return (
            <div>
                <Navbar color="white" light expand="md" scrolling>
                <GoogleLogin/>
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

                <div className="user-modal">
                    <div className="user-modal-container">
                        <ul className="switcher">

                            {/*button for google log in here*/}

                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                            <li><a href="#">Sign in</a></li>
                            <li><a href="#">New account</a></li>
                        </ul>

                        <div id="login">
                          <LoginForm loginError={this.props.error}/>
                        </div>

                        <div id="signup">
                            <form className="form" onSubmit={this.handleSubmit}>
                                {/*<p className="fieldset">*/}
                                {/*<label className="image-replace username" htmlFor="signup-username">Username</label>*/}
                                {/*<input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" />*/}
                                {/*<span className="error-message">Your username can only contain numeric and alphabetic symbols!</span>*/}
                                {/*</p>*/}

                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signup-email" type="email"
                                           placeholder="E-mail" value={this.state.emailAddress}
                                           onChange={this.handleChangeEmail} requried/>
                                    {/*<span className="error-message">Enter a valid email address!</span>*/}
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password"
                                           type="password" placeholder="Password" value={this.state.password}
                                           onChange={this.handleChangePassword} required/>
                                    {/*<span className="error-message">Your password has to be at least 6 characters long!</span>*/}
                                </p>
                                <p className="fieldset">
                                    <label className="image-replace password"
                                           htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password-confirm"
                                           type="password" placeholder="Confirm Password" required/>
                                    {/*<span className="error-message">Your password has to be at least 6 characters long!</span>*/}
                                </p>

                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Create account"/>
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

const mapStateToProps = state => ({
    accounts:state.accounts.accounts,
    userAccount: state.accounts.userAccount,
    error: state.accounts.error,
});


export default connect(mapStateToProps)(Header);
