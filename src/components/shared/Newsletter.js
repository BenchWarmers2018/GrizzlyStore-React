import React, { Component } from 'react';

class Newsletter extends Component {
    render(){
        return(
                <div className="newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="newsletter_border"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="newsletter_content text-center">
                                    <div className="newsletter_title">Bear Facts: &hearts;</div>
                                    <script>

                                    </script>
                                    <div className="newsletter_text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Newsletter;