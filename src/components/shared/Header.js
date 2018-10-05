import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../node_modules/mdbreact/dist/css/mdb.css';
import {Link} from "react-router-dom";
import Logo from "../../images/images_sublime/GrizzlyStoreLogo.png";
import LoginForm from "../shared/login/LoginForm.js";
import { connect } from "react-redux"
import { createAccount } from "../../actions/accountAction"

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            emailAddress: "",
            password: "",
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
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

    render() {
        console.log("Username is :" + this.props.data.username);
        const name = this.props.data.username;
        console.log(name);
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
                                <NavLink to="/items">ITEMS</NavLink>
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
                                <form className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search"/>
                                </form>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/cart"><i className="fa fa-shopping-cart"></i>CART</NavLink>
                            </NavItem>
                            <NavItem className="main-nav">
                                {(typeof name === "undefined")?
                                    <NavLink to="/">LOGIN</NavLink> :
                                    <Dropdown>
                                    <DropdownToggle nav caret>{name}</DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem href="/profile">Profile</DropdownItem>
                                    <DropdownItem href="/">LOG OUT</DropdownItem>
                                    </DropdownMenu>
                                    </Dropdown>
                                }
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
                                    <div className={this.props.error !== null && this.props.accounts.length === 0 ? 'alert alert-danger' : null}> {this.props.error} </div>

                                    {/*{(this.props.accounts.length === 0) ? <div><h1>{this.props.error}</h1></div> : <div>Right</div>*/}
                                    {/*}*/}

                                </div>


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



// function mapStateToProps(state, ownProps) {
//     return {
//         accounts: state.accounts.accounts,
//         error: state.accounts.error
//     }
// };

// export default connect(mapStateToProps)(Header);
const mapStateToProps = state => ({
    accounts:state.accounts.accounts,
    userAccount: state.accounts.userAccount,
    error: state.accounts.error,
});

export default connect(mapStateToProps)(Header);
