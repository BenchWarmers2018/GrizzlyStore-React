import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchSingleItem } from "../../actions/itemsAction";
import { connect } from 'react-redux';

class ItemsChild extends Component {
    constructor(props) {
        super(props);

    }
    handleItemClicked = (e) => {
        console.log(this.props.data.idItem);
        //this.props.fetchSingleItem(this.props.data.idItem);
    }

    render() {
        const item = this.props.data;

        function roundPrice(item){
            let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
            return num.toFixed(2);
        }

        function twoDecimalPlace(item){
            let num = item.itemPrice
            return num.toFixed(2);
        }


        return (
                    <div className="col-12 col-sm-6 col-lg-4" >
                        <Link onClick={this.handleItemClicked} value={item.idItem} to={'/items/'+ item.idItem}>
                        <div className="single-product-wrapper rounded ">

                            <div className="product-img">
                               <img className="item-image-hover border border-light rounded" src={item.itemImage} alt=""/>


                                {(item.itemSalePercentage > 0) &&
                                    <div className="product-badge offer-badge">
                                        <span>-{item.itemSalePercentage}%</span>
                                    </div>
                                }
                                <div className="product-favourite">
                                    <a href="#" className="favme fa fa-heart"></a>
                                </div>
                            </div>


                            <div className="product-description p-1">
                                <h6 className = "item-page-title">{item.itemName}</h6>

                                {
                                    item.itemSalePercentage > 0 &&
                                    <p className="product-price"><span
                                        className="old-price" >${twoDecimalPlace(item)}</span><i className="discount-text-red">${roundPrice(item)}</i></p>
                                }
                                {
                                    item.itemSalePercentage <= 0 &&
                                    <p className="product-price">${twoDecimalPlace(item)}</p>
                                }


                                <div className="hover-content">

                                    <div className="add-to-cart-btn">
                                        <a href="#" className="btn essence-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>


        );
    }
}

ItemsChild.propTypes = {
    data: PropTypes.object.isRequired
}

const mapDispatchToProps = {
    fetchSingleItem
}

export default connect(null, mapDispatchToProps)(ItemsChild);