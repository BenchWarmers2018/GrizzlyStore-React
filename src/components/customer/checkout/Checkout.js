import React, { Component } from 'react';
import Banner from "../../microComponents/Banner";
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { connect } from "react-redux";
import CheckoutItems from "./CheckoutItems";
import { withRouter } from "react-router";
import {errorNotification, successNotification} from "../../microComponents/Notifications";
import { processOrder } from "../../../actions/orderActions";
import {Redirect} from "react-router-dom";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart : this.props.cart,
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
                        <div className="row">


                            <div className="col-lg-4">
                                <div className="billing checkout_section">
                                    <div className="section_title">Billing Address</div>
                                    <div className="section-subtitle">Please update your address on your profile before continuing</div>
                                    {/*<div className="section_subtitle">Enter your address info</div>*/}
                                    {/*<div className="checkout_form_container">*/}
                                        {/*<form action="#" id="checkout_form" className="checkout_form">*/}
                                            {/*<div className="row">*/}
                                                {/*<div className="col-xl-6">*/}

                                                    {/*<label htmlFor="checkout_name">First Name*</label>*/}
                                                    {/*<input type="text" id="checkout_name" className="checkout_input"*/}
                                                           {/*required="required"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="col-xl-6 last_name_col">*/}

                                                    {/*<label htmlFor="checkout_last_name">Last Name*</label>*/}
                                                    {/*<input type="text" id="checkout_last_name"*/}
                                                           {/*className="checkout_input" required="required"/>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_company">Company</label>*/}
                                                {/*<input type="text" id="checkout_company" className="checkout_input"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_country">Country*</label>*/}
                                                {/*<select name="checkout_country" id="checkout_country"*/}
                                                        {/*className="dropdown_item_select checkout_input"*/}
                                                        {/*require="required">*/}
                                                    {/*<option></option>*/}
                                                    {/*<option>Lithuania</option>*/}
                                                    {/*<option>Sweden</option>*/}
                                                    {/*<option>UK</option>*/}
                                                    {/*<option>Italy</option>*/}
                                                {/*</select>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_address">Address*</label>*/}
                                                {/*<input type="text" id="checkout_address" className="checkout_input"*/}
                                                       {/*required="required"/>*/}
                                                    {/*<input type="text" id="checkout_address_2"*/}
                                                           {/*className="checkout_input checkout_address_2"*/}
                                                           {/*required="required"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_zipcode">Zipcode*</label>*/}
                                                {/*<input type="text" id="checkout_zipcode" className="checkout_input"*/}
                                                       {/*required="required"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_city">City/Town*</label>*/}
                                                {/*<select name="checkout_city" id="checkout_city"*/}
                                                        {/*className="dropdown_item_select checkout_input"*/}
                                                        {/*require="required">*/}
                                                    {/*<option></option>*/}
                                                    {/*<option>City</option>*/}
                                                    {/*<option>City</option>*/}
                                                    {/*<option>City</option>*/}
                                                    {/*<option>City</option>*/}
                                                {/*</select>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_province">Province*</label>*/}
                                                {/*<select name="checkout_province" id="checkout_province"*/}
                                                        {/*className="dropdown_item_select checkout_input"*/}
                                                        {/*require="required">*/}
                                                    {/*<option></option>*/}
                                                    {/*<option>Province</option>*/}
                                                    {/*<option>Province</option>*/}
                                                    {/*<option>Province</option>*/}
                                                    {/*<option>Province</option>*/}
                                                {/*</select>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_phone">Phone no*</label>*/}
                                                {/*<input type="phone" id="checkout_phone" className="checkout_input"*/}
                                                       {/*required="required"/>*/}
                                            {/*</div>*/}
                                            {/*<div>*/}

                                                {/*<label htmlFor="checkout_email">Email Address*</label>*/}
                                                {/*<input type="phone" id="checkout_email" className="checkout_input"*/}
                                                       {/*required="required"/>*/}
                                            {/*</div>*/}
                                            {/*<div className="checkout_extra">*/}
                                                {/*<div>*/}
                                                    {/*<input type="checkbox" id="checkbox_terms" name="regular_checkbox"*/}
                                                           {/*className="regular_checkbox" checked="checked"/>*/}
                                                        {/*<label htmlFor="checkbox_terms"><img src="images/check.png"*/}
                                                                                             {/*alt=""/></label>*/}
                                                        {/*<span className="checkbox_title">Terms and conditions</span>*/}
                                                {/*</div>*/}
                                                {/*<div>*/}
                                                    {/*<input type="checkbox" id="checkbox_account" name="regular_checkbox"*/}
                                                           {/*className="regular_checkbox"/>*/}
                                                        {/*<label htmlFor="checkbox_account"><img src="images/check.png"*/}
                                                                                               {/*alt=""/></label>*/}
                                                        {/*<span className="checkbox_title">Create an account</span>*/}
                                                {/*</div>*/}
                                                {/*<div>*/}
                                                    {/*<input type="checkbox" id="checkbox_newsletter"*/}
                                                           {/*name="regular_checkbox" className="regular_checkbox"/>*/}
                                                        {/*<label htmlFor="checkbox_newsletter"><img src="images/check.png"*/}
                                                                                                  {/*alt=""/></label>*/}
                                                        {/*<span*/}
                                                            {/*className="checkbox_title">Subscribe to our newsletter</span>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</form>*/}
                                    {/*</div>*/}
                                </div>
                            </div>



                            <div className="col-lg-8">
                                <div className="order checkout_section">
                                    <div className="section_title">Your order</div>
                                    <div className="section_subtitle">Order details</div>


                                    <div className="order_list_container">
                                        <div
                                            className="order_list_bar d-flex flex-row align-items-center justify-content-start row">
                                            <div className="order_list_title col-lg-8 col-md-8 col-xs-8 col-sm-8">Product</div>
                                            <div className="order_list_value ml-auto col-lg-3 col-md-3 col-xs-3 col-sm-3">Quantity</div>
                                            <div className="order_list_value ml-auto col-lg-1 col-md-1 col-xs-1 col-sm-1">Total</div>
                                        </div>

                                        <ul className="order_list">
                                            {checkoutRows}
                                            <li className="d-flex flex-row align-items-center justify-content-start mt-100">
                                                <div className="order_list_title">Subtotal</div>
                                                <div className="order_list_value ml-auto">{this.props.cart.total}</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Shipping</div>
                                                <div className="order_list_value ml-auto">Free</div>
                                            </li>
                                            <li className="d-flex flex-row align-items-center justify-content-start">
                                                <div className="order_list_title">Total</div>
                                                <div className="order_list_value ml-auto">{this.props.cart.total}</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div style={{width: "90%"}}>
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
                                            color: 'black',// gold | blue | silver | black
                                                    }}
                                        />
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

const mapStateToProps = state => ({
    cart : state.cart.cart,
    cartItems: state.cart.cartItems,
    loggedInUser: state.accounts.loggedInUser,
});

const mapDispatchToProps = {
    processOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));