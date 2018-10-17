import React, { Component } from 'react';
import GrizzlyStoreFooter from '../../images/images_sublime/GrizzlyStoreLogoFooter.png';

class Footer extends Component{
    render() {
        return (
            <footer className="footer_area clearfix footer-distributed">
                    <div className="footer-left">

                        <div className="footer-logo-div">
                            <img className="logo-footer" src={GrizzlyStoreFooter} alt=""/>
                            <br/>
                            <p className="footer-company-name">BenchWarmers &copy; 2018</p>
                        </div>


                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>13 Bear St</span> Mordialloc, Victoria</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+61 41 234 567 </p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">grizzly@store.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>About the company</span>
                            Welcome to all your bear needs. All proceeds will go to the WWF.
                        </p>

                        <div className="footer-icons">

                            <a href="https://www.facebook.com/wwfaustralia/"><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/WWF"><i className="fa fa-twitter"></i></a>
                            <a href="https://au.linkedin.com/company/world-wildlife-fund"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/wwf_australia/?hl=en"><i className="fa fa-instagram"></i></a>

                        </div>

                    </div>
            </footer>
        );
    }

}

export default Footer;