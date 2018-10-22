import React, { Component } from 'react';
import Banner from "../../microComponents/Banner";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from "react-redux";
import CheckoutItems from "./CheckoutItems";
import { withRouter } from "react-router";
import {errorNotification, successNotification} from "../../microComponents/Notifications";
import { processOrder } from "../../../actions/orderActions";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart : this.props.cart,
            data: this.props.data,
        }
    }

    //Paypal Methods
    onSuccess = (payment) =>{
        console.log('Successful payment!', payment);
        this.props.processOrder(this.props.cart);
        this.props.history.push('/confirmation');
    }

    onError = (error) =>{
        errorNotification("An Error Occured", "Please try again later.")
    }

    onCancel = (data) =>{
        console.log('Cancelled payment!', data);
        errorNotification("Payment Cancelled by User", "Please try again...!")
    }


    render() {
        const address = this.props.data;
        if(this.props.loggedInUser === null)
        {
            return(
                <Redirect to="/"/>
            )
        }
        if(this.props.cart !== null)
        {
            if(this.props.cart.items.length === 0)
            {
                successNotification("Please add an item to your cart first")
                return(
                    <Redirect to="/"/>
                )
            }
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.cart.total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
        const client = {
            sandbox:    'AQYXwgCRBWvS2TSDtOjMdhyuMRrx6SL0fI9fgZX42Q5z3Y8UnCboGMVKrDs0s9vdhq6sXF_613Bx2Qee',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        //End of Paypal Methods.

        // {(this.props.cart !== null || typeof this.props.cart !== "undefined") ?
        //     this.props.cart.items.map(cartItem=>
        //         <CheckoutItems data={cartItem} />
        //     )
        //     :
        //     <div>"Hello No items here."</div>
        // }

        let products = null;
        let items = null;
        let checkoutRows = [];
        if(this.props.cart.items.length > 0 && this.props.cartItems.length > 0)
        {
            products = this.props.cartItems;
            items = this.props.cart.items;
            products.forEach(function(product) {
                items.forEach(function(item) {
                    if(product.idItem === item.idItem)
                    {
                        checkoutRows.push(<CheckoutItems cartItemObject={item} productObject={product} />)
                    }
                });
            });
        }


        return (
            <div className="doNotRemoveDiv">

                <Banner data="Checkout"/>

                <div className="checkout">
                    <div className="container">





                        <div className=" row">
                            <div className="order checkout_section">
                                <div className="section_title">Your order</div>
                                <div className="section_subtitle">Order details</div>


                                <div className="order_list_container">
                                    <div className="order_list_bar d-flex flex-row align-items-center justify-content-start">
                                        <div className="order_list_title col-lg-7 col-md-7 col-xs-7 col-sm-7">Product</div>
                                        <div className="order_list_value ml-auto col-lg-3 col-md-3 col-xs-3 col-sm-3 centered">Quantity</div>
                                        <div className="order_list_value ml-auto col-lg-3 col-md-3 col-xs-3 col-sm-3">Total</div>
                                    </div>

                                    <div className="checkout-rows-order">
                                        {checkoutRows}
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div className="row">
                        <div className=" billing checkout_section">
                            <div className="billing-section-div col-lg-8 col-md-8 col-xs-8 col-sm-8">
                                <div className="billing-address">
                                    <div className="section_title billing-address-div">Billing Address</div>
                                    <div className="section-subtitle"><b>Please update your address on your profile before continuing</b></div>
                                    <br/>
                                    <div className="section-subtitle correct-address muted"><i>Please ensure your address is correct</i></div>

                                </div>
                                <div className="billing-payment col-lg-8 col-md-8 col-xs-8 col-sm-8">
                                    <div className="section_title">Total</div>
                                    <ul className="order_list">
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="order_list_title col-lg-2 col-md-2 col-xs-2 col-sm-2"><b>Subtotal</b></div>
                                            <div className="order_list_value ml-auto col-lg-2 col-md-2 col-xs-2 col-sm-2">${this.props.cart.total}</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="order_list_title col-lg-2 col-md-2 col-xs-2 col-sm-2"><b>Shipping</b></div>
                                            <div className="order_list_value ml-auto col-lg-2 col-md-2 col-xs-2 col-sm-2"><i>Free</i></div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div className="order_list_title col-lg-2 col-md-2 col-xs-2 col-sm-2"><b>Total</b></div>
                                            <div className="order_list_value ml-auto col-lg-2 col-md-2 col-xs-2 col-sm-2">${this.props.cart.total}</div>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="paypal-button" style={{width: "50%"}}>
                            <PaypalExpressBtn
                                env={env}
                                client={client}
                                currency={currency}
                                total={total}
                                onError={this.onError}
                                onSuccess={this.onSuccess}
                                onCancel={this.onCancel}
                                style={{
                                    label: 'checkout',
                                    size: 'responsive',    // small | medium | large | responsive
                                    shape: 'rect',     // pill | rect
                                    color: 'blue',// gold | blue | silver | black
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cart : state.cart.cart,
    cartItems: state.cart.cartItems,
    loggedInUser: state.accounts.loggedInUser,
});

const mapDispatchToProps = {
    processOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));