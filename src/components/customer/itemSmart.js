import React, { Component } from 'react';
import { connect } from "react-redux"
import { fetchItems } from "../../actions/itemsAction"

const mapStateToProps = store => ({
    items: store.items.items,
    fetched: store.items.fetched,
    fetching :store.items.fetching,
    error: store.items.error,
});

class ItemSmart extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(fetchItems())
    }

    render() {
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }
        const images = importAll(require.context('../../images_essence/product-img', false, /\.(png|jpe?g|svg)$/));

        const { items } = this.props;
        console.log(items);

        if(items.length == 0){
            return <div><h2>No Items to display.</h2></div>
        }
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

export default connect(mapStateToProps)(ItemSmart);