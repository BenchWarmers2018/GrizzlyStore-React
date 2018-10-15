import SAMPLE from "../../images/images_sublime/cart_1.jpg";
import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.cart.items.map(item =>

                    <div className="row cart_items_row">
                        <div className="col">

                            <div
                                className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                <div
                                    className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                                    <div className="cart_item_image">
                                        <div><img src={SAMPLE} alt="image"/></div>
                                    </div>
                                    <div className="cart_item_name_container">
                                        <div className="cart_item_name"><a>Smart Phone Deluxe
                                            Edition</a></div>
                                        <div className="cart_item_edit"><a>Edit Product</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart_item_price">$100</div>

                                <div className="cart_item_quantity">
                                    <div>
                                        <div className="product_quantity clearfix">
                                            <span>Qty</span>
                                            <input id="quantity_input" type="text" pattern="[0-9]*" defaultValue={item.itemQuantity}/>
                                            <div className="quantity_buttons">
                                                <div id="quantity_inc_button"
                                                     className="quantity_inc quantity_control"><i
                                                    className="fa fa-chevron-up" aria-hidden="true"></i></div>
                                                <div id="quantity_dec_button"
                                                     className="quantity_dec quantity_control"><i
                                                    className="fa fa-chevron-down" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="cart_item_total">$100</div>
                                <div className="cart_item_actions">
                                    <button className="btn btn-sm btn-danger"><i
                                        className="fa fa-trash fa-2x"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
                }