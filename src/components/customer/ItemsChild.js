import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemsChild extends Component {
    render() {

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../../images/images_essence/product-img', false, /\.(png|jpe?g|svg)$/));

        const items = this.props.data;
        console.log(items);

        return (


            <div className="row">

                {items.map(item =>

                    <div key={item.idItem} className="col-12 col-sm-6 col-lg-4">
                        <div className="single-product-wrapper">

                            <div className="product-img">
                                <img src={images['product-1.jpg']} alt=""/>

                                <img className="hover-img" src={images['product-2.jpg']}
                                     alt=""/>


                                <div className="product-badge offer-badge">
                                    <span>-30%</span>
                                </div>

                                <div className="product-favourite">
                                    <a href="#" className="favme fa fa-heart"></a>
                                </div>
                            </div>


                            <div className="product-description">
                                <span>{item.itemName}</span>
                                <a href="single-product-details.html">
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
                    </div>
                )}


            </div>
        );
    }
}

ItemsChild.propTypes = {
    data: PropTypes.array.isRequired
}

export default ItemsChild;