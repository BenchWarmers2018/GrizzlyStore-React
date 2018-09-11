import React, { Component } from 'react';

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
    }

    handleClick () {

        const facts = [
            "Panda",
            "Koala",
            "Polar",
            "Hi",
            "My",
            "Name",
            "Is",
            "Julia"
        ];

        const randomNumber = Math.floor(Math.random()*facts.length);
        this.setState({ random:facts[randomNumber] });
    }

    render() {
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
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row flex-center">
                                <button id="button" className="btn-large new-quote-button"  onClick={this.handleClick.bind(this)}>
                                    New Quote
                                </button>
                            </div>
                            <div className="row flex-center">
                                <main className="card">
                                    <p className="quote card-body center" id="bearFactSection">{this.state.random}</p>
                                </main>
                            </div>

                        </div>
                    </div>
                </div>
        );
    }
}

export default Newsletter;