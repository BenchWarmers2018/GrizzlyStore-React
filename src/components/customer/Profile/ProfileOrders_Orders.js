import React, {Component} from 'react';

class ProfileOrders_Orders extends Component {
    render() {
        const product = this.props.productObject;
        const processedOrder = this.props.processedOrder;
        return (
            <tr>
                <td>{processedOrder.idItem}</td>
                <td>{product.itemName}</td>
                <td>{processedOrder.itemQuantity}</td>
                <td>{processedOrder.itemPrice}</td>
                <td>{processedOrder.total}</td>
            </tr>
        );
    }
}

export default ProfileOrders_Orders;