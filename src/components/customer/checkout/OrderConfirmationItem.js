import React, {Component} from 'react';

class OrderConfirmationItem extends Component {
    constructor(props) {
        super(props);
    }

    // function roundPrice(item){
    //     let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
    //     return num.toFixed(2);
    // }
    //
    // function twoDecimalPlace(item){
    //     let num = item.itemPrice
    //     return num.toFixed(2);
    // }

    render() {
        const cartItem = this.props.cartItemObject;
        const product = this.props.productObject;
        console.log(cartItem);
        console.log(product)
        return (
                <tr>
                    <td>{cartItem.idItem}</td>
                    <td>{product.itemName}</td>
                    <td>{cartItem.itemQuantity}</td>
                    <td>{cartItem.itemPrice}</td>
                    <td>{cartItem.total}</td>
                </tr>
        );
    }
}

export default OrderConfirmationItem;