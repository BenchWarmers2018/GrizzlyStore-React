import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from '../../images/bearwave3.jpg';
import Images from '../../images_sublime/product_1.jpg';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="home_slider_container">



                        <Carousel className="carousel_container" autoPlay={true} infiniteLoop={true} transitionTime={1000}>
                            <div className="carousel_slide_div">
                                <img src={Slider} />
                                <p className="legend">Welcome <br/>to the shop of
                                <br/>BEAR necessities!</p>

                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider} />
                                <p className="legend">Legend2</p>
                            </div>
                            <div className="carousel_slide_div">
                                <img src={Slider} />
                                <p className="legend">Legend3</p>
                            </div>
                        </Carousel>


                    </div>
                </div>


                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="h1">Popular Items</div>
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