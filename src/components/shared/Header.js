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

                    {/*Old Nav Bar*/}
                    {/*<ul className="navbar-nav mr-auto">*/}
                        {/*<li className="col-lg-3 active nav-item nav-menu">*/}
                            {/*<Link to='/' className="nav-link">HOME</Link>*/}
                        {/*</li>*/}
                        {/*<li className="col-lg-3 nav-item nav-menu">*/}
                            {/*<Link to='/items' className="nav-link">ITEMS</Link>*/}
                        {/*</li>*/}

                        {/*<li className="col-lg-3 nav-item nav-menu">*/}
                            {/*<Link to='/items' className="nav-menu nav-link">*/}
                                {/*CATEGORY*/}
                            {/*</Link>*/}
                            {/*<ul className="nav-sub-menu">*/}
                                {/*<li><Link to='/sale' className="nav-link">ITEMS</Link></li>*/}
                                {/*<li>hi</li>*/}
                                {/*<li>hi</li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                        {/*<li className="col-lg-3 nav-item nav-menu">*/}
                            {/*<Link to='/sale' className="nav-link">SALE</Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}


                    {/*New Nav Bar*/}
                    <div className="navbar-nav mr-auto navbar-collapse" id="navbarSupportedContent">
                        <div className="nav-left-div navbar-collapse">
                            <div className="dropdown">
                                <button className="dropbtn nav-menu nav-link">
                                    <Link to='/' className="nav-link">HOME</Link>
                                </button>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn nav-menu nav-link"><Link to='/items' className="nav-link">ITEMS</Link></button>

                            </div>
                            <div className="dropdown">
                                <button type="button" className="dropbtn "><Link to='/items' className="nav-menu nav-link dropdown-toggle" >
                                    CATEGORY
                                </Link></button>
                                <div className="dropdown-content">
                                    <a href="#">Art</a>
                                    <a href="#">Fashion</a>
                                    <a href="#">Electronics</a>
                                    <a href="#">Home & Living</a>
                                    <a href="#">Jewellery</a>
                                    <a href="#">Toys</a>
                                </div>
                            </div>
                            <div className="dropdown ">
                                <button className="dropbtn nav-menu nav-link"><Link to='/sale' className="nav-link">SALE</Link></button>
                            </div>
                        </div>


                        {/*Cart*/}
                        <div className="nav-right-div navbar-collapse">
                            <div className="dropdown ">
                                <li className="dropdown ">
                                    <Link to='/cart' className=" nav-link nav-menu nav-link"><i className="fa fa-shopping-cart"></i>CART</Link>
                                </li>
                            </div>

                            {/* Authentication links start here */}
                            <div className="dropdown ">
                                <li className="dropdown main-nav" data-toggle="modal" data-target="#exampleModal">
                                    <Link to='' className=" nav-link signin nav-menu">LOGIN</Link>
                                </li>
                            </div>
                        </div>
                    </div>



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
            </nav>
        );
    }
}

export default Header;

