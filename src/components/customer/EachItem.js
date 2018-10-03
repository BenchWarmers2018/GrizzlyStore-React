import React, { Component } from 'react';
import Product from "../../images/images_sublime/details_1.jpg";
import { connect } from 'react-redux';
import { fetchSingleItem } from '../../actions/itemsAction'

class EachItem extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const itemID = this.props.match.params.id;
        this.props.fetchSingleItem(itemID);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.props.fetchSingleItem(nextProps.match.params.id);
        }
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.singleItem !== this.props.singleItem)
    //     {
    //         console.log(this.props.singleItem);
    //     }
    // }

    render() {
        console.log(this.props.singleItem);
        const item = this.props.singleItem[0];
        console.log(item);
        if(typeof item === "undefined")
        {
            return <h2>No item Found. Please try again later.</h2>
        }
        return (
            <div className="padding-header">
                {/*Content image*/}
                <div className="product_details">
                    <div className="container">
                        <div className="row details_row">

                            <div className="col-lg-6">
                                <div className="details_image">
                                    <img className="details_image_large" alt="item_image" src={ Product } />
                                </div>
                            </div>

                            {/*Content Description*/}

                            <div className="col-lg-6">

                                <div className="details_content">

                                    <div className="details_name">{item.itemName}</div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="price">Price</div>
                                        </div>
                                        <div className="col-lg-4">
                                            {
                                                item.itemSalePercentage > 0 &&
                                                    <div>
                                                        <div className="details_discount">${item.itemPrice}</div>
                                                        <div className="details_price">${item.itemPrice - (item.itemPrice * item.itemSalePercentage/100)}</div>
                                                    </div>
                                             }
                                            {
                                                item.itemSalePercentage <= 0 &&
                                                <div className="details_price">${item.itemPrice}</div>
                                        }
                                        </div>
                                    </div>


                                    <div className="in_stock_container">
                                        <div className="availability">Availability:</div>
                                        {
                                            (item.itemStockLevel > 0) ?
                                            <span >In Stock</span> :
                                                <span>Out of Stock</span>
                                        }

                                    </div>

                                    <div className="description_title_container mt-15">
                                        <div className="description_title"><strong>Description</strong></div>
                                    </div>
                                        <p>{item.itemDescription}</p>
                                        <br />

                                    <div className="product_quantity_container">
                                        <div className="product_quantity clearfix">
                                            <span>Qty</span>
                                            <input id="quantity_input" type="text" pattern="[0-9]*" value="1"/>
                                                <div className="quantity_buttons">
                                                    <div id="quantity_inc_button" className="quantity_inc quantity_control">
                                                        <i className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                                    <div id="quantity_dec_button" className="quantity_dec quantity_control">
                                                        <i className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                                </div>
                                        </div>
                                        <div className="button cart_button"><a href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row description_row">
                            <div className="col">
                                <div className="description_title_container">
                                    <div className="description_title"><strong>Description</strong></div>
                                </div>
                                <div className="description_text">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                                        dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                                        consequat nisi ut mauris efficitur lacinia.</p>
                                    <br />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Suggested Products*/}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  singleItem: state.items.singleItem,
});

const mapDispatchToProps = {
    fetchSingleItem,
}
export default connect(mapStateToProps, mapDispatchToProps) (EachItem);