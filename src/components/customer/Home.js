import React, {Component} from 'react';
import {fetchHomeItemsPage} from "../../actions/itemsAction";
import {connect} from "react-redux"

// Carousel imports
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider1 from '../../images/grizzlywave.jpg';
import Slider3 from '../../images/pandawave.jpg';
import Slider2 from '../../images/polarwave.jpg';
import ItemSmartHome from './shop/itemSmartHome';
import Images from '../../images/images_sublime/product_1.jpg';
import ItemsChild from "./shop/ItemsChild";


class Home extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchHomeItemsPage(1, 12);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.homePageItems) !== JSON.stringify(this.props.homePageItems)) {
            this.props.fetchHomeItemsPage(1, 12);
        }
    }

    render() {
        const items = this.props.homePageItems;
        return (

            <div>
                {/*---------Carousel BEGINS-------- */}

                <div className="home">
                    <div className="home_slider_container">
                        <Carousel className="carousel_container" autoPlay={true} infiniteLoop={true}
                                  transitionTime={1000}
                                  showStatus={false} showIndicators={false}>
                            <div className="carousel_slide_div slide_bearwave_1">
                                <img src={Slider1}/>
                                <p className="legend legend1">Welcome to the shop <br/>of
                                    BEAR necessities!</p>
                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider2}/>
                                <p className="legend legend2">ImPAWssibly low, <br/>unbeatable prices! </p>
                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider3}/>
                                <p className="legend legend3">Apologise for the <br/>unBEARable puns</p>
                            </div>
                        </Carousel>
                    </div>
                </div>

                {/*---------Carousel ENDS-------- */}

                <div className="products2">
                    <div className="container">
                        <h1 className="pad-top">
                            Popular Items
                            <small className="text-muted beary-popular-title">Beary popular</small>
                        </h1>
                        <hr className="hr-popular-item-home"/>

                        <div className="row row-home">
                            {items.map(item =>
                                <ItemSmartHome key={item.idItem} data={item}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    homePageItems: state.items.homePageItems,
});
const mapDispatchToProps = {
    fetchHomeItemsPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
