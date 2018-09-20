import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { fetchItems } from "../../actions/itemsAction"

class ItemSmart extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../../images/images_essence/product-img', false, /\.(png|jpe?g|svg)$/));

        const { items } = this.props;
        console.log(items);

        if(items.length == 0){
            return <div><h2>No Items to display.</h2></div>
        }
        return (
            <div className="row row-home">

                {items.map(item =>

                    <div key={item.idItem} className="col-12 col-12-home col-sm-6 col-lg-4 col-lg-4-home">
                        <div className="single-product-wrapper single-product-wrapper-home">

                            <div className="product-img product-img-home">
                                <img src={images['product-1.jpg']} alt=""/>

                                <img className="hover-img" src={images['product-2.jpg']}
                                     alt=""/>

                                <div className="product-favourite">
                                    <a href="#" className="favme fa fa-heart"></a>
                                </div>
                            </div>


                            <div className="product-description">
                                {/*<span>{item.itemName}</span>*/}
                                <a href="single-product-details.html">
                                    <h6>{item.itemName}</h6>
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


                                {/*<div className="hover-content">*/}

                                    {/*<div className="add-to-cart-btn add-to-cart-btn-home">*/}
                                        {/*<a href="#" className="btn essence-btn">Add to Cart</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        );
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