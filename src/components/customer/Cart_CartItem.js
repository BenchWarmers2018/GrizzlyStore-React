import React, {Component} from 'react';
import { fetchSingleItemForCart } from "../../actions/cartAction";
import connect from "react-redux/es/connect/connect";
import CartItem from "./CartItem";

class Cart_CartItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let list = [];
        console.log(this.props.data);
        if(this.props.data.length > 0)
        {
            this.props.data.map(item=>
                list.push(item.idItem)
            );
            this.props.fetchSingleItemForCart(list);
        }
    }

    componentDidUpdate(prevProps){
        console.log("Tried again");
        if(JSON.stringify(prevProps.cartItems) !== JSON.stringify(this.props.cartItems))
        {
            let list = [];
            if(this.props.data.length > 0)
            {
                this.props.data.map(item=>
                    list.push(item.idItem)
                );
                this.props.fetchSingleItemForCart(list);
            }
        }
    }


    render() {
        let products = null;
        let items = null;
        let cartRows = [];
        if(this.props.data.length > 0 && this.props.cartItems.length > 0)
        {
            products = this.props.cartItems;
            items = this.props.data;
            products.forEach(function(product) {
                items.forEach(function(item) {
                    if(product.idItem === item.idItem)
                    {
                        cartRows.push(<CartItem cartItemObject={item} productObject={product} />)
                    }
                });
            });
        }
        return (
            <div>
                {cartRows}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    cartItems : state.cart.cartItems,
});

const mapDispatchToProps = {
    fetchSingleItemForCart,
};


export default connect(mapStateToProps, mapDispatchToProps) (Cart_CartItem);
