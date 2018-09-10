import React, { Component } from 'react';
import FooterImage from '../../images/polar_bear_footer.jpg';

class Footer extends Component{
    render() {
        return (
            <div>
                <div className="footer_overlay"></div>
                <footer className="footer">
                    <div className="footer_background" style={{backgroundImage: "url(" + FooterImage + ")"}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer_content d-flex flex-lg-row flex-column align-items-center justify-content-lg-start justify-content-center">
                                    <div className="footer_logo text-sm-left"><a href="#">Grizzly Store.</a></div>
                                    <div className="footer_logo text-sm-left">
                                        Contact Information: <br /> 95 Bear Avenue, <br /> Victoria, Australia 3000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Footer;