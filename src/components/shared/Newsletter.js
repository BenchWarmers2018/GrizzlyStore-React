import React, {Component} from 'react';
import bearFacts from './bearFacts.json';

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            randomFact: "Bears are cool",
            randomFacts: bearFacts,
            bearFactsArray: [],
        };
    }

    componentDidMount() {
        //looping through JSON objects to create array
        for (let x in bearFacts.Facts)
            this.state.bearFactsArray.push(bearFacts.Facts[x]);

        const randomNumber = Math.floor(Math.random() * bearFacts.Facts.length);

        //setting state to the fact chosen with a random number
        this.setState({randomFact: this.state.bearFactsArray[randomNumber].fact});
    }

    handleClick() {

        const bearFactArray = [];

        //looping through JSON objects to create array
        for (let x in bearFacts.Facts)
            bearFactArray.push(bearFacts.Facts[x]);

        const randomNumber = Math.floor(Math.random() * bearFacts.Facts.length);

        //setting state to the fact chosen with a random number
        this.setState({randomFact: bearFactArray[randomNumber].fact});
    }

    render() {
        return (
            <div className="newsletter">


                <div className="newsletter_container">
                    <div className="row flex-center">
                        <blockquote className="quote-card card-body">
                            <div className="newsletter_title random_fact_title">
                                <strong>Bear Trivia</strong>
                            </div>
                            <p className="random_fact_card  center" id="bearFactSection" >
                                <em>"{this.state.randomFact}"</em>

                                <div className="wrapper button-new-quote">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.handleClick}>Generate new quote</button>
                                </div>
                            </p>
                        </blockquote>

                    </div>

                </div>
            </div>
        );
    }
}

export default Newsletter;