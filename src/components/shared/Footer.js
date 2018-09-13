import React, { Component } from 'react';
import GrizzlyStoreFooter from '../../images_sublime/GrizzlyStoreLogoFooter.png';

class Footer extends Component{
    render() {
        return (
            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="single_widget_area d-flex mb-30">

                                <div className="footer-logo mr-50">
                                    <img src={GrizzlyStoreFooter} alt=""/>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <p><strong>Contact Information:</strong></p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;