import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CheckoutItems extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const cartItem = this.props.cartItemObject;
        const product = this.props.productObject;
        return (
            <li className="row-of-item d-flex flex-row align-items-center justify-content-start">
                <div className="order_list_title col-lg-7 col-md-7 col-xs-7 col-sm-7">{product.itemName}</div>
                <div className="order_list_value ml-auto col-lg-3 col-md-3 col-xs-3 col-sm-3 centered">{cartItem.itemQuantity}</div>
                <div className="order_list_value ml-auto col-lg-3 col-md-3 col-xs-3 col-sm-3">${cartItem.total}</div>
            </li>
        )

    }

}

export default CheckoutItems;