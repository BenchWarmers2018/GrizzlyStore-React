import SAMPLE from "../../images/images_sublime/cart_1.jpg";
import React from "react";
import {deleteItemFromCart} from "../../actions/cartAction";

class CartItem extends React.Component {

    render() {
        const item = this.props.cartItemObject;
        const product = this.props.productObject;

            return (
            <div className="row cart_items_row">
                <div className="col">
                    <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">
                                        <div className="cart_item_image">
                                            <div><img src={product.itemImage} alt="image"/></div>
                                        </div>
                                        <div className="cart_item_name_container">
                                            <div className="cart_item_name"><a>{product.itemName}</a></div>
                                        </div>
                                    </div>

                        <div className="cart_item_price">${item.itemPrice}</div>

                        <div className="cart_item_quantity">
                            <div>
                                <div className="product_quantity clearfix">
                                    <span>Qty</span>
                                    <input type="text" pattern="[0-9]*" defaultValue={item.itemQuantity}/>
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

                        <div className="cart_item_total">${item.total}</div>
                        <div className="cart_item_actions">
                            <button className="btn btn-sm btn-danger" onClick={this.deleteItemFromCart}><i
                                className="fa fa-trash fa-2x"></i></button></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CartItem;
