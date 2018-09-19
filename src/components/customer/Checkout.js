import React, { Component } from 'react';
import Background from '../../images/images_sublime/cart.jpg'

class Checkout extends Component {
    render() {
        return (
            <div className="doNotRemoveDiv">
                <div className="home">
                    <div className="home_container">
                        <div className="home_background" style={{backgroundImage: "url(" + Background + ")"}}></div>
                        <div className="home_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_content">
                                            <div className="breadcrumbs">
                                                <ul>
                                                    <li><a>Home</a></li>
                                                    <li><a>Shopping Cart</a></li>
                                                    <li>Checkout</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="checkout">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-6">
                                <div className="billing checkout_section">
                                    <div className="section_title">Billing Address</div>
                                    <div className="section_subtitle">Enter your address info</div>
                                    <div className="checkout_form_container">
                                        <form action="#" id="checkout_form" className="checkout_form">
                                            <div className="row">
                                                <div className="col-xl-6">

                                                    <label htmlFor="checkout_name">First Name*</label>
                                                    <input type="text" id="checkout_name" className="checkout_input"
                                                           required="required"/>
                                                </div>
                                                <div className="col-xl-6 last_name_col">

                                                    <label htmlFor="checkout_last_name">Last Name*</label>
                                                    <input type="text" id="checkout_last_name"
                                                           className="checkout_input" required="required"/>
                                                </div>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_company">Company</label>
                                                <input type="text" id="checkout_company" className="checkout_input"/>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_country">Country*</label>
                                                <select name="checkout_country" id="checkout_country"
                                                        className="dropdown_item_select checkout_input"
                                                        require="required">
                                                    <option></option>
                                                    <option>Lithuania</option>
                                                    <option>Sweden</option>
                                                    <option>UK</option>
                                                    <option>Italy</option>
                                                </select>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_address">Address*</label>
                                                <input type="text" id="checkout_address" className="checkout_input"
                                                       required="required"/>
                                                    <input type="text" id="checkout_address_2"
                                                           className="checkout_input checkout_address_2"
                                                           required="required"/>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_zipcode">Zipcode*</label>
                                                <input type="text" id="checkout_zipcode" className="checkout_input"
                                                       required="required"/>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_city">City/Town*</label>
                                                <select name="checkout_city" id="checkout_city"
                                                        className="dropdown_item_select checkout_input"
                                                        require="required">
                                                    <option></option>
                                                    <option>City</option>
                                                    <option>City</option>
                                                    <option>City</option>
                                                    <option>City</option>
                                                </select>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_province">Province*</label>
                                                <select name="checkout_province" id="checkout_province"
                                                        className="dropdown_item_select checkout_input"
                                                        require="required">
                                                    <option></option>
                                                    <option>Province</option>
                                                    <option>Province</option>
                                                    <option>Province</option>
                                                    <option>Province</option>
                                                </select>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_phone">Phone no*</label>
                                                <input type="phone" id="checkout_phone" className="checkout_input"
                                                       required="required"/>
                                            </div>
                                            <div>

                                                <label htmlFor="checkout_email">Email Address*</label>
                                                <input type="phone" id="checkout_email" className="checkout_input"
                                                       required="required"/>
                                            </div>
                                            <div className="checkout_extra">
                                                <div>
                                                    <input type="checkbox" id="checkbox_terms" name="regular_checkbox"
                                                           className="regular_checkbox" checked="checked"/>
                                                        <label htmlFor="checkbox_terms"><img src="images/check.png"
                                                                                             alt=""/></label>
                                                        <span className="checkbox_title">Terms and conditions</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="checkbox_account" name="regular_checkbox"
                                                           className="regular_checkbox"/>
                                                        <label htmlFor="checkbox_account"><img src="images/check.png"
                                                                                               alt=""/></label>
                                                        <span className="checkbox_title">Create an account</span>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="checkbox_newsletter"
                                                           name="regular_checkbox" className="regular_checkbox"/>
                                                        <label htmlFor="checkbox_newsletter"><img src="images/check.png"
                                                                                                  alt=""/></label>
                                                        <span
                                                            className="checkbox_title">Subscribe to our newsletter</span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-6">
                                <div className="order checkout_section">
                                    <div className="section_title">Your order</div>
                                    <div className="section_subtitle">Order details</div>


                                    <div className="order_list_container">
                                        <div
                                            className="order_list_bar d-flex flex-row align-items-center justify-content-start">
                                            <div className="order_list_title">Product</div>
                                            <div className="order_list_value ml-auto">Total</div>
                                        </div>
                                        <ul className="order_list">
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Cocktail Yellow dress</div>
                                                <div className="order_list_value ml-auto">$59.90</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Subtotal</div>
                                                <div className="order_list_value ml-auto">$59.90</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Shipping</div>
                                                <div className="order_list_value ml-auto">Free</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Total</div>
                                                <div className="order_list_value ml-auto">$59.90</div>
                                            </li>
                                        </ul>
                                    </div>


                                    <div className="payment">
                                        <div className="payment_options">
                                            <label className="payment_option clearfix">Paypal
                                                <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                            <label className="payment_option clearfix">Cach on delivery
                                                <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                            <label className="payment_option clearfix">Credit card
                                                <input type="radio" name="radio"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                            <label className="payment_option clearfix">Direct bank transfer
                                                <input type="radio" checked="checked" name="radio"/>
                                                    <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>


                                    <div className="order_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Proin pharetra temp or so dales. Phasellus sagittis auctor gravida. Integ er
                                        bibendum sodales arcu id te mpus. Ut consectetur lacus.
                                    </div>
                                    <div className="button order_button"><a href="#">Place Order</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;