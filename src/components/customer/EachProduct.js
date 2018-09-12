import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from "../../images/categories.jpg";
import Product from "../../images/details_1.jpg";
import HeaderImage from "../../images/polar_bear_header.jpg";

class EachProduct extends Component {
    render() {
        return (
            <div className="padding-header">

                {/*Content image*/}
                <div className="product_details">
                    <div className="container">
                        <div className="row details_row">

                            <div className="col-lg-6">
                                <div className="details_image">
                                    <img className="details_image_large" src={ Product } />
                                </div>
                            </div>

                            {/*Content Description*/}

                            <div className="col-lg-6">
                                <div className="details_content">
                                    <div className="details_name">Bear Phone</div>
                                    <div className="details_discount">$890</div>
                                    <div className="details_price">$670</div>

                                    <div className="in_stock_container">
                                        <div className="availability">Availability:</div>
                                        <span>In Stock</span>
                                    </div>
                                    <div className="details_text">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                            Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                                            dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                                            consequat nisi ut mauris efficitur lacinia.</p>
                                    </div>

                                    <div className="product_quantity_container">
                                        <div className="product_quantity clearfix">
                                            <span>Qty</span>
                                            <input id="quantity_input" type="text" pattern="[0-9]*" value="1"/>
                                                <div className="quantity_buttons">
                                                    <div id="quantity_inc_button" className="quantity_inc quantity_control">
                                                        <i className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                                    <div id="quantity_dec_button" className="quantity_dec quantity_control">
                                                        <i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                                </div>
                                        </div>
                                        <div className="button cart_button"><a href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row description_row">
                            <div className="col">
                                <div className="description_title_container">
                                    <div className="description_title"><strong>Description</strong></div>
                                </div>
                                <div className="description_text">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                                        dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                                        consequat nisi ut mauris efficitur lacinia.</p>
                                    <br />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Suggested Products*/}

                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="products_title"><strong>Suggested Products</strong></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                                <div className="product_grid">

                                    <div className="product">
                                        <div className="product_image"><img src={Product} /></div>
                                        <div className="product_extra product_new">
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title">Smart Phone</div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src={Product} /></div>
                                        <div className="product_extra product_sale">
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title">Smart Phone</div>
                                            <div className="product_price">$520</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src={Product} /></div>
                                        <div className="product_content">
                                            <div className="product_title">Smart Phone</div>
                                            <div className="product_price">$710</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src={Product} /></div>
                                        <div className="product_content">
                                            <div className="product_title">Smart Phone</div>
                                            <div className="product_price">$330</div>
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

export default EachProduct;