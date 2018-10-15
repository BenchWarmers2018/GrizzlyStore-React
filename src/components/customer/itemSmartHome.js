import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { fetchItems } from "../../actions/itemsAction"
import {Link} from "react-router-dom";

class ItemSmart extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        const { items } = this.props;

        // Rounding price to 2 decimal points
        function roundPrice(item){
            let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
            return num.toFixed(2);
        }

        function twoDecimalPlace(item){
            let num = item.itemPrice
            return num.toFixed(2);
        }

        if(items.length == 0){
            return <div><h2>No Items to display.</h2></div>
        }
        return (
            <div className="row row-home">

                {items.map(item =>

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
                )}
            </div>
        )
    }
}

ItemSmart.propTypes= {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    items: state.items.items,
    fetched: state.items.fetched,
    fetching :state.items.fetching,
    error: state.items.error,
});

export default connect(mapStateToProps, { fetchItems } )(ItemSmart);