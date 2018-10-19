import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from "../microComponents/Banner";
import connect from "react-redux/es/connect/connect";
import { fetchCart } from '../../actions/cartAction';
import {NORMAL_USER} from "../../CONSTANTS";
import SAMPLE from "../../images/images_sublime/cart_1.jpg";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';
import { Button, notification } from 'antd';
import CartItem from "./CartItem";
import Cart_CartItem from "./Cart_CartItem";

class Cart extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cart : null,
        }
    }

    componentDidMount() {
        let accountId = null;
        if(this.props.userType === NORMAL_USER)
        {
            accountId = this.props.loggedInUser.id;
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
                accountId = this.props.loggedInUser.id;
                this.props.fetchCart(accountId);
            }
        }
        else {
            console.log("Equal");
        }
    }


    render() {
        let cartItems = null;
        const cart = this.props.cart;
        if(cart !== null || typeof cart !== "undefined")
        {
            cartItems = cart.items;
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
                                        <div className="cart_info_col cart_info_col_product">Product</div>
                                        <div className="cart_info_col cart_info_col_price">Price</div>
                                        <div className="cart_info_col cart_info_col_quantity">Quantity</div>
                                        <div className="cart_info_col cart_info_col_total">Total</div>
                                        <div className="cart_info_col cart_info_col_actions">ACTIONS</div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                {/*{this.props.cart.items.map(item =>*/}
                                    {/*<CartItem key={item.idItem} data={item}/>*/}
                                {/*)}*/}
                                <Cart_CartItem data = {this.props.cart.items} />

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
                            </div>

                            <br/>
                            <br/>

                            <div className="row row_extra">
                                <div className="col-lg-4">
                                    <div className="delivery">
                                        <div className="section_title">Payment Method</div>
                                        <div className="section_subtitle">Select the one you want</div>
                                        <div className="delivery_options">
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
                                                    <div className="cart_total_title">Subtotal</div>
                                                    <div className="cart_total_value ml-auto">${cart.total}</div>
                                                </li>
                                                <li className="d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cart_total_title">Shipping</div>
                                                    <div className="cart_total_value ml-auto">Free</div>
                                                </li>
                                                <li className="d-flex flex-row align-items-center justify-content-start">
                                                    <div className="cart_total_title">Total</div>
                                                    <div className="cart_total_value ml-auto">${cart.total}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="button checkout_button" style={{"width" : "100%"}}><Link to="/checkout">Proceed to checkout</Link></div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);