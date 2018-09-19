import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/images_sublime/GrizzlyStoreLogo.png';

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
                        <li className="col-lg-3 active nav-item ">
                            <Link to='/' className="nav-link">HOME</Link>
                        </li>
                        <li className="col-lg-3 nav-item">
                            <Link to='/items' className="nav-link">ITEMS</Link>
                        </li>

                        <li className="col-lg-3 nav-item">
                            <Link to='/items' className="nav-link">
                                CATEGORY
                            </Link>
                        </li>

                        <li className="col-lg-3 nav-item">
                            <Link to='/sale' className="nav-link">SALE</Link>
                        </li>
                    </ul>

                    {/*Cart*/}
                    <li className="navbar-text nav-item">
                        <Link to='/cart' className="nav-link"><i className="fa fa-shopping-cart"></i>CART</Link>
                    </li>

                    {/* Authentication links start here */}

                        <li className="main-nav navbar-text nav-item" data-toggle="modal" data-target="#exampleModal">
                            <Link to='' className="nav-link signin">LOGIN</Link>
                        </li>


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
            </nav>
        );
    }
}

export default Header;

