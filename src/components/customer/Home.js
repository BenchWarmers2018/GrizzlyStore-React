import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider1 from '../../images/grizzlywave.jpg';
import Slider3 from '../../images/pandawave.jpg';
import Slider2 from '../../images/polarwave.jpg';
import Images from '../../images_sublime/product_1.jpg';
import Slider from '../../images_sublime/home_slider_1.jpg';
import ItemSmartHome from './itemSmartHome';
import Images from '../../images/images_sublime/product_1.jpg';
import Slider from '../../images/images_sublime/home_slider_1.jpg';

class Home extends Component {
    render() {
        return (
            <div>


                {/*---------Carousel BEGINS-------- */}

                <div className="home">
                    <div className="home_slider_container">
                        <Carousel className="carousel_container" autoPlay={true} infiniteLoop={true} transitionTime={1000}
                        showStatus={false} showIndicators={false}>
                            <div className="carousel_slide_div slide_bearwave_1">
                                <img src={Slider1} />
                                <p className="legend legend1">Welcome to the shop <br/>of
                                BEAR necessities!</p>
                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider2} />
                                <p className="legend legend2">ImPAWssibly low, <br/>unbeatable prices! </p>
                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider3} />
                                <p className="legend legend3">Apologise for the <br/>unBEARable puns</p>
                            </div>
                        </Carousel>
                    </div>
                </div>

                {/*---------Carousel ENDS-------- */}

                <ItemSmartHome/>

                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="pad-top">
                                    Popular Items
                                    <small className="text-muted"> Beary popular</small>
                                </h1>
                                <hr/>
                                <div className="product_grid">
                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_extra product_new"><a href="categories.html">New</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Sale</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_extra product_hot"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>


                                    <div className="product">
                                        <div className="product_image"><img src={Images} alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
