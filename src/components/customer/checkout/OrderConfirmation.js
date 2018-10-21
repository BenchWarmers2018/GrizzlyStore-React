import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import LogoLarge from "../../../images/images_sublime/GrizzlyStoreLogo.png"
import OrderConfirmationItem from "./OrderConfirmationItem";
import Spinner from "../../microComponents/Spinner";
import { withRouter } from "react-router";
import {errorNotification} from "../../microComponents/Notifications";
import { resetOrder } from "../../../actions/orderActions";

class OrderConfirmation extends Component {
    constructor(props){
        super(props);
        this.state = {
            processing: this.props.processing,
            processed: this.props.processed,
            order: this.props.order,
        }
    }

    componentDidUpdate(prevprops){
        if(prevprops.order !== this.props.order){
            this.setState({
                processing: this.props.processing,
                processed: this.props.processed,
                order: this.props.order})
        }
    }

    componentWillUnmount(){
        this.props.resetOrder();
    }



    render() {
        let products = null;
        let items = null;
        let checkoutRows = [];
        if(this.state.processing)
        {
            return(
                <Spinner/>
            )
        }
        else
        {
            if(!this.state.processed){
                errorNotification("Something went wrong", "Please try again...!");
                this.props.history.push('/cart');
            }
            else{
                if(this.props.order !== null)
                {
                    products = this.props.cartItems;
                    items = this.props.order.items;
                    console.log(products);
                    console.log(items);
                    products.forEach(function(product) {
                        items.forEach(function(item) {
                            if(product.idItem === item.idItem)
                            {
                                checkoutRows.push(<OrderConfirmationItem cartItemObject={item} productObject={product} />)
                            }
                        });
                    });
                    console.log(checkoutRows);
                }
            }
        }
        //var testOrder = {orderTotal: 20.2, orderID: "20", orderItems: {itemNo: 3, itemQuantity: 2, itemPrice: 20.2},  }

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
                                                <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Unit
                                                    Cost
                                                </th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {checkoutRows}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            {(this.state.order!==null) &&
                                <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Grand Total</div>
                                        <div className="h2 font-weight-light">{this.state.order.order_Total}</div>
                                    </div>

                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Shipping fee</div>
                                        <div className="h2 font-weight-light">FREE</div>
                                    </div>

                                    <div className="py-3 px-5 text-right">
                                        <div className="mb-2">Sub - Total amount</div>
                                        <div className="h2 font-weight-light">{this.state.order.order_Total}</div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>


        </div>


        );
    }
}


const mapStateToProps = state => ({
    order: state.orders.processedOrder,
    cartItems : state.cart.cartItems,
    processing: state.orders.processing,
    processed: state.orders.processed,
});

const mapDispatchToProps = {
    resetOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderConfirmation));