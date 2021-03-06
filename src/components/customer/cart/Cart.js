import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../microComponents/Banner";
import connect from "react-redux/es/connect/connect";
import { fetchCart } from '../../../actions/cartAction';
import {NORMAL_USER} from "../../../CONSTANTS";
import SAMPLE from "../../../images/images_sublime/cart_1.jpg";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { Button, notification } from 'antd';
import {deleteCart} from "../../../actions/cartAction";
import Cart_CartItem from "./Cart_CartItem";
import { Redirect } from 'react-router-dom'
import {errorNotification, successNotification} from "../../microComponents/Notifications";

class Cart extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cart : null,
        }
    }

    deleteAllFromCart = () => {
        let accountId = null;
        if(typeof this.props.loggedInUser !== "undefined" && this.props.loggedInUser !== null)
        {
            if(this.props.userType === NORMAL_USER)
            {
                console.log("yay");
                accountId = this.props.loggedInUser.idAccount;
                const cart = { "idAccountForeign": accountId};
                this.props.deleteCart(cart);
                successNotification("Successfully Deleted Cart");
            }
        }
    }

    proceedError = () =>
    {
        errorNotification("Could not proceed", "Please add items to your cart first")
    }

    componentDidMount() {
        let accountId = null;
        if(this.props.userType === NORMAL_USER)
        {
            accountId = this.props.loggedInUser.idAccount;
            this.props.fetchCart(accountId);
        }
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart))
        {
            let accountId = null;
            if(this.props.userType === NORMAL_USER)
            {
                console.log("Not equal");
                accountId = this.props.loggedInUser.idAccount;
                this.props.fetchCart(accountId);
            }
        }
        else {
            console.log("Equal");
        }
    }


    render() {
        if(this.props.loggedInUser === null)
        {
            successNotification("Please login to access Cart.")
            return(
                <Redirect to="/"/>
                )
        }

        //const item = this.props.cartItemObject;
        let cartItems = null;
        const cart = this.props.cart;
        if(cart !== null || typeof cart !== "undefined")
        {
            cartItems = cart.items;
        }

        // Rounding price to 2 decimal points
        function roundPrice(num){
            return num.toFixed(2);
        }

        return (
            <div>
                <Banner data="Shopping Cart"/>
                { (this.props.cart.items) ?
                    <div className="cart_info">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="cart_info_columns clearfix">

                                        <div className="cart_info_col cart_info_col_image"><h9>Image</h9></div>
                                        <div className="cart_info_col cart_info_col_product"><h9>Product</h9></div>
                                        <div className="cart_info_col cart_info_col_price "><h9>Price</h9></div>
                                        <div className="cart_info_col cart_info_col_quantity"><h9>Quantity</h9></div>
                                        <div className="cart_info_col cart_info_col_total"><h9>Total</h9></div>
                                        <div className="cart_info_col cart_info_col_actions"><h9>Remove</h9></div>
                                    </div>
                                </div>
                            </div>
                        <br/>


                            <div>
                                {/*{this.props.cart.items.map(item =>*/}
                                    {/*<CartItem key={item.idItem} data={item}/>*/}
                                {/*)}*/}
                                <Cart_CartItem data = {this.props.cart.items} />

                                <div className="row row_cart_buttons">
                                    <div className="col">
                                        <div
                                            className="cart_buttons d-flex flex-lg-row flex-column align-items-start justify-content-start">
                                            <Link to='/' className="btn-no-decoration"><button type="button" className="btn btn-dark">Continue shopping</button></Link>
                                            <div className="cart_buttons_right ml-lg-auto">
                                                <button type="button" className="btn btn-dark" onClick={this.deleteAllFromCart}>Clear cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="row row_extra payment-total-cart-div">
                                <div className="col-lg-4 ">
                                    <div className="delivery ">
                                        <div className="section_title">Payment Method</div>
                                        <div className="section_subtitle">Select payment option</div>
                                        <div className="delivery_options ">
                                            <label className="delivery_option clearfix">Paypal
                                                <input type="radio" checked="checked" name="radio"/>
                                                <span className="checkmark"></span>
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
                                                    <div className="cart_total_title"><b>Subtotal</b></div>
                                                    <div className="cart_total_value ml-auto">${roundPrice(cart.total)}</div>
                                                </li>
                                                <li className="d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cart_total_title"><b>Shipping</b></div>
                                                    <div className="cart_total_value ml-auto"><i>Free</i></div>
                                                </li>
                                                <li className="d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cart_total_title"><b>Total</b></div>
                                                    <div className="cart_total_value ml-auto">${roundPrice(cart.total)}</div>
                                                </li>
                                            </ul>
                                        </div>

                                        {this.props.cart.items.length > 0 ?
                                            <div className="button order_button" style={{"width": "100%"}}><Link
                                                to="/checkout">Proceed to checkout</Link></div>
                                            :
                                            <div onClick={this.proceedError} className="button checkout_button" style={{"width" : "100%"}}><a>Proceed to checkout</a></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <h1>Your cart is Empty<br/>Please click Continue Shopping to add to your cart</h1>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedInUser : state.accounts.loggedInUser,
    userType : state.accounts.userType,
    cart: state.cart.cart,
    errors: state.cart.errors,
});

const mapDispatchToProps = {
    fetchCart,
    deleteCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);