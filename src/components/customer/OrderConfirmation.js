import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import {fetchFilteredItems, getVisibleItems} from "../../selectors/itemsSelector";
import {fetchCategories} from "../../actions/categoriesAction";
import {category, filterText, maxPrice, minPrice, page, sortBy} from "../../actions/filterActions";
import LogoLarge from "../../images/images_sublime/GrizzlyStoreLogo.png"
import CheckoutItems from "./CheckoutItems";
import OrderConfirmationItem from "../OrderConfirmationItem";

class OrderConfirmation extends Component {
    constructor(props){
        super(props);
    }



    render() {
        var testOrder = {orderTotal: 20.2, orderID: "20", orderItems: {itemNo: 3, itemQuantity: 2, itemPrice: 20.2},  }
        return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="row p-5">
                                <div className="col-md-6">
                                    <img src={LogoLarge}/>
                                </div>

                                <div className="col-md-6 text-right">
                                    <p className="font-weight-bold mb-1">Invoice number: </p>
                                </div>
                            </div>

                            <hr className="my-5"/>

                                <div className="row pb-5 p-5">
                                    <div className="col-md-6">
                                        <p className="font-weight-bold mb-4">Client Information</p>
                                        <p className="mb-1">Grizzlystore</p>
                                        <p>13 Bear St,
                                            Mordialloc</p>
                                        <p className="mb-1">Victoria, 3195</p>
                                    </div>

                                    <div className="col-md-6 text-right">
                                        <p className="font-weight-bold mb-4">Payment Details</p>
                                        <p className="mb-1"><span className="text-muted">Payment Type: </span>PayPal </p>
                                        <p className="mb-1"><span className="text-muted">Name: </span> </p>
                                    </div>
                                </div>

                                <div className="row p-5">
                                    <div className="col-md-12">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th className="border-0 text-uppercase small font-weight-bold">ID</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Item</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Description</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Unit
                                                    Cost
                                                </th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {(this.props.cart !== null || typeof this.props.cart !== "undefined") ?
                                                this.props.cart.items.map(cartItem =>
                                                    <OrderConfirmationItem data={cartItem}/>
                                                )
                                                :
                                                <tr>"Hello No items here."</tr>
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Grand Total</div>
                                        <div className="h2 font-weight-light">$234,234</div>
                                    </div>

                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Shipping fee</div>
                                        <div className="h2 font-weight-light">FREE</div>
                                    </div>

                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Sub - Total amount</div>
                                        <div className="h2 font-weight-light">$32,432</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


        );
    }
}


const mapStateToProps = state => ({
    orders: state.orders.processedOrder,
    cartItems : state.cart.cartItems,
    cart : state.cart.cart,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);