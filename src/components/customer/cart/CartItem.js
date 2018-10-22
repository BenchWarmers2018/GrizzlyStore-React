import React from "react";
import {NORMAL_USER} from "../../../CONSTANTS";
import {successNotification} from "../../microComponents/Notifications";
import {deleteItemFromCart} from "../../../actions/cartAction";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';

class CartItem extends React.Component {

    deleteFromCart = () => {
        let accountId = null;
        if(typeof this.props.loggedInUser !== "undefined")
        {
            if(this.props.userType === NORMAL_USER)
            {
                accountId = this.props.loggedInUser.idAccount;
                const cart = { "idAccountForeign": accountId, "items": [ { "idItem": this.props.cartItemObject.idItem, "total": this.props.cartItemObject.total} ] };
                this.props.deleteItemFromCart(cart);
                successNotification("Successfully Deleted an Item");
            }
        }
    };

    render() {
        const item = this.props.cartItemObject;
        const product = this.props.productObject;

            return (
            <div className="row cart_items_row">
                <div className="col">
                    <div className="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                    <div className="cart_item_product d-flex flex-row align-items-center justify-content-start">

                                        <div className="cart_item_image">
                                            <div><Link to={"/items/"+item.idItem}><img src={product.itemImage} alt="image"/></Link></div>
                                        </div>
                                        <div className="cart_item_name_container">
                                            <div className="cart_item_name"><Link to={"/items/"+item.idItem}>{product.itemName}</Link></div>
                                        </div>
                                    </div>
                        <div className="cart_item_price">${item.itemPrice}</div>

                        <div className="cart_item_quantity">
                            <div>
                                <div className="product_quantity clearfix">
                                    <span>Qty</span>
                                    <input type="text" disabled defaultValue={item.itemQuantity}/>
                                    <div className="quantity_buttons">
                                        {/*<div id="quantity_inc_button"*/}
                                             {/*className="quantity_inc quantity_control"><i*/}
                                            {/*className="fa fa-chevron-up" aria-hidden="true"></i></div>*/}
                                        {/*<div id="quantity_dec_button"*/}
                                             {/*className="quantity_dec quantity_control"><i*/}
                                            {/*className="fa fa-chevron-down" aria-hidden="true"></i></div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart_item_total">${item.total}</div>
                        <div className="cart_item_actions">
                            <button className="btn btn-sm btn-danger" onClick={this.deleteFromCart}><i
                                className="fa fa-trash fa-2x"></i></button></div>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    loggedInUser : state.accounts.loggedInUser,
    userType: state.accounts.userType,
});
const mapDispatchToProps = {
    deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
