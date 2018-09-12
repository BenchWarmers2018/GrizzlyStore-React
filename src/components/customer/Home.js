import React, { Component } from 'react';

import Images from '../../images_sublime/product_1.jpg';
import Slider from '../../images_sublime/home_slider_1.jpg'
import Icon1 from '../../images_sublime/icon_1.svg'
import Icon2 from '../../images_sublime/icon_2.svg'
import Icon3 from '../../images_sublime/icon_3.svg'

class Home extends Component {
    render() {

        return (
            <div>
                <div className="home">
                    <div className="home_slider_container">


                        <div className="owl-carousel owl-theme home_slider">


                            <div className="owl-item home_slider_item">
                                <div className="home_slider_background"
                                     style={{backgroundImage: "url(" + Slider + ")"}}></div>
                                <div className="home_slider_content_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="home_slider_content" data-animation-in="fadeIn"
                                                     data-animation-out="animate-out fadeOut">
                                                    <div className="home_slider_title">A new Online Shop experience.
                                                    </div>
                                                    <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                        molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                    </div>
                                                    <div className="button button_light home_button"><a href="#">Shop
                                                        Now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="owl-item home_slider_item">
                                <div className="home_slider_background"
                                     style={{backgroundImage: "url(" + Slider + ")"}}></div>
                                <div className="home_slider_content_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="home_slider_content" data-animation-in="fadeIn"
                                                     data-animation-out="animate-out fadeOut">
                                                    <div className="home_slider_title">A new Online Shop experience.
                                                    </div>
                                                    <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                        molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                    </div>
                                                    <div className="button button_light home_button"><a href="#">Shop
                                                        Now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="owl-item home_slider_item">
                                <div className="home_slider_background"
                                     style={{backgroundImage: "url(" + Slider + ")"}}></div>
                                <div className="home_slider_content_container">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="home_slider_content" data-animation-in="fadeIn"
                                                     data-animation-out="animate-out fadeOut">
                                                    <div className="home_slider_title">A new Online Shop experience.
                                                    </div>
                                                    <div className="home_slider_subtitle">Lorem ipsum dolor sit amet,
                                                        consectetur adipiscing elit. Nullam a ultricies metus. Sed nec
                                                        molestie eros. Sed viverra velit venenatis fermentum luctus.
                                                    </div>
                                                    <div className="button button_light home_button"><a href="#">Shop
                                                        Now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="home_slider_dots_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_slider_dots">
                                            <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                                                <li className="home_slider_custom_dot active">01.</li>
                                                <li className="home_slider_custom_dot">02.</li>
                                                <li className="home_slider_custom_dot">03.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col">

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