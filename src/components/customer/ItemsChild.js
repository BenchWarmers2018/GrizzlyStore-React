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

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../../images/images_essence/product-img', false, /\.(png|jpe?g|svg)$/));

        const item = this.props.data;

        return (
                    <div className="col-12 col-sm-6 col-lg-4">
                        <Link onClick={this.handleItemClicked} value={item.idItem} to={'/items/'+ item.idItem}>
                        <div className="single-product-wrapper">

                            <div className="product-img">
                                <img src={images['product-1.jpg']} alt=""/>

                                <img className="hover-img" src={images['product-2.jpg']}
                                     alt=""/>


                                {(item.itemSalePercentage > 0) &&
                                    <div className="product-badge offer-badge">
                                        <span>-{item.itemSalePercentage}%</span>
                                    </div>
                                }
                                <div className="product-favourite">
                                    <a href="#" className="favme fa fa-heart"></a>
                                </div>
                            </div>


                            <div className="product-description">
                                <span>{item.itemName}</span>
                                <a>
                                    <h6>{item.itemDescription}</h6>
                                </a>
                                {
                                    item.itemSalePercentage > 0 &&
                                    <p className="product-price"><span
                                        className="old-price">${item.itemPrice}</span>${item.itemPrice - (item.itemPrice * item.itemSalePercentage/100)}</p>
                                }
                                {
                                    item.itemSalePercentage <= 0 &&
                                    <p className="product-price">${item.itemPrice}</p>
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