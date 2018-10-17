import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../node_modules/mdbreact/dist/css/mdb.css';
import {Link, Redirect} from "react-router-dom";
import LogoLarge from "../../images/images_sublime/GrizzlyStoreLogo.png";
import LogoSmall from "../../images/images_sublime/bearlogo.png";
import LoginForm from "../shared/login/LoginForm.js";
import { connect } from "react-redux"
import { fetchAccounts } from "../../actions/accountAction"
import GoogleLogin from "../shared/GoogleLogin.js";
import { createAccount } from "../../actions/accountAction";
import {ACCESS_TOKEN} from "../../index";
import firebase from "firebase";
import {fetchGoogleAccounts} from "../../actions/googleaccountAction";
import {GOOGLE_USER, NORMAL_USER} from "../../CONSTANTS";

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
        e.preventDefault()
        this.setState({
            redirect: true
        })
    }


    handleChangeEmail = (event1) => {
        this.setState({emailAddress: event1.target.value});
    }
    handleChangePassword = (event2) => {
        this.setState({password: event2.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {accountEmailAddress: this.state.emailAddress, accountPassword: this.state.password};
        this.props.dispatch(createAccount(user));
    }

    componentDidMount() {
        this.authListener();
    }

    componentWillReceiveProps(prevProps){
        if(prevProps.continueLogin !== this.props.continueLogin)
        {
            window.location.reload();
        }
    }

    authListener() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user
            });
            // User is signed in
            // so apparently "qa" (user.qa) is Google's firebase accessToken
            // Creating user to pass through to backend

            //const appTokenKey = "token";

            //localStorage.setItem(appTokenKey, user.qa);
            //Dispatching googleUser to Action file
            console.log(user, " ", !user, " ", !!user);

            if(!!user)
            {
                const googleUser = {googleAccountEmailAddress: user.email};
                this.props.dispatch(fetchGoogleAccounts(googleUser));
            }
        });
    }

    logUserOut = () => {
        if(firebase.auth().currentUser) {
            firebase.auth().signOut();
        } else {
            localStorage.removeItem(ACCESS_TOKEN);
        }
    }

    render() {
        let name = "";
        if(this.props.type.length>0)
        {
            if(this.props.type === GOOGLE_USER)
            {
                name = this.props.data.googleAccountEmailAddress;
            }
            else if (this.props.type === NORMAL_USER)
            {
                name = this.props.data.username;
            }
        }

        //name = firebase.auth().currentUser.displayName;
        return (
            <div>
                <Navbar color="white" light expand="md" scrolling>
                    <NavbarBrand href="/">
                        <div className="logo">
                            <Link to='/'>
                                <img className="header_logo" src={LogoLarge} alt=""/>
                                <img className="header_logo_small" src={LogoSmall} alt=""/>
                            </Link>
                        </div>
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
                                        <DropdownItem><Link to="/category/art">Art</Link></DropdownItem>
                                        <DropdownItem><Link to="/category/clothing">Clothing</Link></DropdownItem>
                                        <DropdownItem><Link to="/category/technology">Technology</Link></DropdownItem>
                                        <DropdownItem><Link to="/category/home and living">Home & Living</Link></DropdownItem>
                                        <DropdownItem><Link to="/category/jewellery">Jewellery</Link></DropdownItem>
                                        <DropdownItem><Link to="/category/toys">Toys</Link></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                {(this.state.redirect) && (
                                    <Redirect to={'/items/all'}/>
                                )}

                                <form onSubmit={this.submitForm} className="search-bar-large form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search"/>
                                </form>

                                <form onSubmit={this.submitForm} className="search search-bar-small form-inline mt-0">
                                    <div className="search__wrapper">
                                        <input aria-label="Search" type="text" name="" placeholder="Search" className="search__field text-black"/>
                                            <button type="submit" className="fa fa-search search__icon"></button>
                                    </div>
                                </form>

                            </NavItem>


                            {(name.length > 0) &&
                                <NavItem>
                                    <NavLink to="/cart"><i className="fa fa-shopping-cart"></i>CART</NavLink>
                                </NavItem>
                            }

                            {(name.length <= 0) ?
                                <NavItem className="main-nav">
                                    <NavLink to="/">LOGIN</NavLink>
                                </NavItem> :
                                <Dropdown>
                                    <DropdownToggle className="uppercase" nav caret>{name}</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><Link to="/profile">Profile</Link></DropdownItem>
                                        <DropdownItem href="/" onClick={this.logUserOut}>Log out</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            }

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
                            <li><a className="new-account-selected" href="#">New account</a></li>
                        </ul>

                        <div id="login">
                            {/*<LoginForm loginError={this.props.error}/>*/}
                            <LoginForm loginError={this.props.error}/>
                        </div>

                        <div id="signup">
                            <form className="form" onSubmit={this.handleSubmit}>
                                <p className="fieldset">
                                    <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signup-email" type="email"
                                           placeholder="E-mail" value={this.state.emailAddress}
                                           onChange={this.handleChangeEmail} required/>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace password" htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password"
                                           type="password" placeholder="Password" name="pw" pattern=".{6,}" title="Six or more characters"  value={this.state.password}
                                           onChange={this.handleChangePassword} required/>
                                </p>
                                <p className="fieldset">
                                    <label className="image-replace password"
                                           htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password-confirm"
                                           type="password" placeholder="Confirm Password" required/>
                                </p>
                                <div className="super_container">
                                    {/*{(this.props.accounts.length === 0) ? <div className={this.props.error ? 'alert alert-danger' : null}> {this.props.error} </div> : null}*/}
                                    <div className={(this.props.createAccountError.length !== 0 && this.props.continueLogin === false) ? 'alert alert-danger' : null}> {(this.props.createAccountError.length !== 0 && this.props.continueLogin === false) ? this.props.createAccountError : null} </div>

                                    {/*{(this.props.accounts.length === 0) ? <div><h1>{this.props.error}</h1></div> : <div>Right</div>*/}
                                    {/*}*/}

                                </div>


                                <p className="fieldset submit-login-button">
                                    <input className="full-width has-padding half-width" type="submit" value="Create account"/>
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
    createAccountError: state.accounts.createAccountError,
    continueLogin: state.accounts.continueLogin,
});


export default connect(mapStateToProps)(Header);
