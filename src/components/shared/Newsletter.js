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


                <div className="newsletter_container" onClick={this.handleClick}>
                    <div className="row flex-center">
                        <main className="card random_fact_div">
                            <div className="newsletter_title random_fact_title">
                                <strong>Bear Trivia</strong>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="container">
                                        <blockquote className="shadow-lg p-3 mb-5 bg-white rounded block">
                                            <p className="random_fact_card card-body center" id="bearFactSection" >
                                                {this.state.randomFact}
                                            </p>
                                            <div className="wrapper">
                                                <button type="button" className="btn btn-outline-primary">Generate new quote</button>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>

                </div>
            </div>
        );
    }
}

export default Newsletter;