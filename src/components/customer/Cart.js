import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/images_sublime/cart.jpg'
import CartImage from '../../images/images_sublime/cart_1.jpg';
import Banner from "../microComponents/Banner";

class Cart extends Component {
    render() {
        return (
            <div>
                <Banner data="Shopping Cart"/>
                <div className="cart_info">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="cart_info_columns clearfix">
                                    <div className="cart_info_col cart_info_col_product">Product</div>
                                    <div className="cart_info_col cart_info_col_price">Price</div>
                                    <div className="cart_info_col cart_info_col_quantity">Quantity</div>
                                    <div className="cart_info_col cart_info_col_total">Total</div>
                                </div>
                            </div>
                        </div>
                        <div className="row cart_items_row">
                            <div className="col">

                                <div
                                    className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                    <div
                                        className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                                        <div className="cart_item_image">
                                            <div><img src={CartImage} alt=""/></div>
                                        </div>
                                        <div className="cart_item_name_container">
                                            <div className="cart_item_name"><a href="#">Smart Phone Deluxe Edition</a>
                                            </div>
                                            <div className="cart_item_edit"><a href="#">Edit Product</a></div>
                                        </div>
                                    </div>

                                    <div className="cart_item_price">$790.90</div>

                                    <div className="cart_item_quantity">
                                        <div className="product_quantity_container">
                                            <div className="product_quantity clearfix">
                                                <span>Qty</span>
                                                <input id="quantity_input" type="text" pattern="[0-9]*" value="1"/>
                                                <div className="quantity_buttons">
                                                    <div id="quantity_inc_button"
                                                         className="quantity_inc quantity_control"><i
                                                        className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                                    <div id="quantity_dec_button"
                                                         className="quantity_dec quantity_control"><i
                                                        className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cart_item_total">$790.90</div>
                                </div>

                            </div>
                        </div>
                        <div className="row row_cart_buttons">
                            <div className="col">
                                <div
                                    className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                    <div className="button cart_button"><Link to='/'>Continue shopping</Link>
                                    </div>
                                    <div className="cart_buttons_right ml-lg-auto">
                                        <div className="button cart_button"><a href="#">Clear cart</a></div>
                                        <div className="button cart_button"><a href="#">Update cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row_extra">
                            <div className="col-lg-4">


                                <div className="delivery">
                                    <div className="section_title">Shipping method</div>
                                    <div className="section_subtitle">Select the one you want</div>
                                    <div className="delivery_options">
                                        <label className="delivery_option clearfix">Next day delivery
                                            <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                            <span className="delivery_price">$4.99</span>
                                        </label>
                                        <label className="delivery_option clearfix">Standard delivery
                                            <input type="radio" name="radio"/>
                                            <span className="checkmark"></span>
                                            <span className="delivery_price">$1.99</span>
                                        </label>
                                        <label className="delivery_option clearfix">Personal pickup
                                            <input type="radio" checked="checked" name="radio"/>
                                            <span className="checkmark"></span>
                                            <span className="delivery_price">Free</span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6 offset-lg-2">
                                <div className="cart_total">
                                    <div className="section_title">Cart total</div>
                                    <div className="section_subtitle">Final info</div>
                                    <div className="cart_total_container">
                                        <ul>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="cart_total_title">Subtotal</div>
                                                <div className="cart_total_value ml-auto">$790.90</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="cart_total_title">Shipping</div>
                                                <div className="cart_total_value ml-auto">Free</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="cart_total_title">Total</div>
                                                <div className="cart_total_value ml-auto">$790.90</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="button cart_button"><a href="/checkout">Proceed to checkout</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Cart;