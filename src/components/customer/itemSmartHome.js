import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {fetchPopularItems} from "../../actions/itemsAction"
import {Link} from "react-router-dom";

class ItemSmart extends Component {

    render() {
        const item = this.props.data;

        // Rounding price to 2 decimal points
        function roundPrice(item){
            let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
            return num.toFixed(2);
        }

        function twoDecimalPlace(item){
            let num = item.itemPrice
            return num.toFixed(2);
        }

        return (

                    <div key={item.idItem} className=" col col-12-home col-lg-4-home">
                        <Link onClick={this.handleItemClicked} value={item.idItem} to={'/items/'+ item.idItem}>
                            <div className="single-product-wrapper single-product-wrapper-home">

                                <div className="product-img product-img-home">
                                    <img src={item.itemImage} alt=""/>

                                    <div className="product-favourite">
                                        <a href="#" className="favme fa fa-heart"></a>
                                    </div>
                                </div>

                                <div className="product-description">
                                    <a href="single-product-details.html">
                                        <h6>{item.itemName}</h6>
                                    </a>
                                    {
                                        item.itemSalePercentage > 0 &&
                                        <p className="product-price"><span
                                            className="old-price" >${twoDecimalPlace(item)}</span><i className="discount-text-red">${roundPrice(item)}</i></p>
                                    }
                                    {
                                        item.itemSalePercentage <= 0 &&
                                        <p className="product-price">${twoDecimalPlace(item)}</p>
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
        )
    }
}


export default (ItemSmart);
