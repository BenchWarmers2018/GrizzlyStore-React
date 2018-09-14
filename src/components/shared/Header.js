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
                    <div class="user-modal">
                        <div class="user-modal-container">
                            <ul class="switcher">
                                {/*button for google log in here*/}
                                <div className="g-signin2" data-onsuccess="onSignIn"></div>
                                <li><a href="#">Sign in</a></li>
                                <li><a href="#">New account</a></li>
                            </ul>

                            <div id="login">
                                <form class="form">
                                    <p class="fieldset">
                                        <label class="image-replace email" for="signin-email">E-mail</label>
                                        <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail" />
                                            <span class="error-message">An account with this email address does not exist!</span>
                                    </p>

                                    <p class="fieldset">
                                        <label class="image-replace password" for="signin-password">Password</label>
                                        <input class="full-width has-padding has-border" id="signin-password" type="password"  placeholder="Password" />
                                            <span class="error-message">Wrong password! Try again.</span>
                                    </p>

                                    <p class="fieldset">
                                        <input class="full-width" type="submit" value="Login" />
                                    </p>
                                </form>

                                <p class="form-bottom-message"><a href="#0">Forgot your password?</a></p>
                            </div>

                            <div id="signup">
                                <form class="form">
                                    <p class="fieldset">
                                        <label class="image-replace username" for="signup-username">Username</label>
                                        <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" />
                                            <span class="error-message">Your username can only contain numeric and alphabetic symbols!</span>
                                    </p>

                                    <p class="fieldset">
                                        <label class="image-replace email" for="signup-email">E-mail</label>
                                        <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" />
                                            <span class="error-message">Enter a valid email address!</span>
                                    </p>

                                    <p class="fieldset">
                                        <label class="image-replace password" for="signup-password">Password</label>
                                        <input class="full-width has-padding has-border" id="signup-password" type="password"  placeholder="Password" />
                                            <span class="error-message">Your password has to be at least 6 characters long!</span>
                                    </p>

                                    <p class="fieldset">
                                        <input class="full-width has-padding" type="submit" value="Create account" />
                                    </p>
                                </form>



                            {/*Stretch goals*/}
                            <div id="reset-password">
                                <p class="form-message">Lost your password? Please enter your email address.<br /> You will receive a link to create a new password.</p>

                            <form class="form">
                                <p class="fieldset">
                                    <label class="image-replace email" for="reset-email">E-mail</label>
                                    <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
                                        <span class="error-message">An account with this email does not exist!</span>
                                </p>

                                <p class="fieldset">
                                    <input class="full-width has-padding" type="submit" value="Reset password" />
                                </p>
                            </form>
                            </div>
                        </div>
                        <a href="#0" class="close-form">Close</a>
                    </div>
                </div>
                </div>
            </nav>
        );
    }
}

export default Header;

