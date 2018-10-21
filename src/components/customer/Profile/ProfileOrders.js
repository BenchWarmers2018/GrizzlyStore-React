import React, {Component} from 'react';
import { connect } from "react-redux"

class ProfileOrders extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="profile-overview-mainDiv">
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Previous Orders</h4>
                <br/>
                <div className="profile-overview-mainDiv">
                    <div className="profile-overview-field-div">
                        <label className="text-muted">Orders listed down below</label>


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

export default connect(mapStateToProps(ProfileOrders));