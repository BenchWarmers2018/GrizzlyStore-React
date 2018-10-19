import React, {Component} from 'react';

class OrderConfirmationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cartItem = this.props.data;
        return (

                <tr>
                    <td>{cartItem.idItem}</td>
                    <td>NAME</td>
                    <td>DESCRIPTION</td>
                    <td>{cartItem.itemQuantity}</td>
                    <td>{cartItem.itemPrice}</td>
                    <td>{cartItem.total}</td>
                </tr>
        );
    }
}

export default OrderConfirmationItem;