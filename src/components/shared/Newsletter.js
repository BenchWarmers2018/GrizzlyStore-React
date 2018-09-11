import React, {Component} from 'react';
import bearFacts from './bearFacts.json';
// import {getFact} from "../../../public/assets/js/facts";


class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            random: 0,
            randomFacts: bearFacts,
        };
    }

    // componentDidMount() {
    //     fetch('./bearFacts.json')
    //         .then(response => response.json())
    //         .then(randomFacts => this.setState({ randomFacts }));
    //
    //
    //     // fetch('./bearFacts.json')
    //     //     .then(results => {
    //     //         let
    //     //
    //     //     })
    //
    // }




    handleClick() {


        // let parsed = JSON.parse(bearFacts);

        let bearFactsArray = [];

        for(let x in bearFacts.Facts){
            bearFactsArray.push(bearFacts.Facts[x]);
        }

        // let bearFactConvert = data.map((value, index) => {
        //     return (
        //         <div key={index}>
        //             {Object.keys(value)[0]}
        //         </div>
        //     );
        // });
        //
        // let pairs = [];
        // for(let key in this.props.data){
        //     pairs.push({key});
        // }

        // let bearFactArray = [];
        // for (let i in bearFacts.Facts) {
        //     bearFactArray.push(bearFacts.Facts[i].);
        // }
        console.log(bearFactsArray[1]);


        // const randomNumber = Math.floor(Math.random() * bearFacts.Facts.length);
        // console.log(randomNumber);
        // console.log(bearFactArray.length);
        //
        // this.setState({random: bearFactArray[randomNumber].fact});
    }

    render() {
        return (
            <div className="newsletter">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="newsletter_border"></div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row flex-center">
                            <main className="card random_fact_div">
                                <div className="newsletter_title random_fact_title"
                                     onClick={this.handleClick.bind(this)}>Bear Trivia
                                </div>
                                <p className="quote card-body center" id="bearFactSection"
                                   onClick={this.handleClick.bind(this)}>{this.state.random}</p>
                            </main>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;