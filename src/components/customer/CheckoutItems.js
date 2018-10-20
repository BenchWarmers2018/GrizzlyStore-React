import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CheckoutItems extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const cartItem = this.props.data;
        return (
            <li className="d-flex flex-row align-items-center justify-content-start">
                <div className="order_list_title">Product{}</div>
                <div className="order_list_value ml-auto">{cartItem.itemQuantity}</div>
                <div className="order_list_value ml-auto">{cartItem.total}</div>
            </li>
        )

    }

}

export default CheckoutItems;