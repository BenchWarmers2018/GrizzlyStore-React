import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/cartAction';

class Products extends Component {
    render() {
        /**
         * this.props.products is populated through the redux store and mapStateToProps
         * this.props.addToCart is added through mapDispatchToProps
         */

        const productList = this.props.products.map( (item,index)  => {
            return <div key={index}>
                <p style={{ color: "#767676"}}>{item.name} - {item.price} $ </p>
                <button className="button"
                        onClick={() => this.props.addItemToCart(item)}>
                    Add To Cart
                </button>
            </div>
        });

        return (
            <div className= "products">
                { productList }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: item => dispatch(addItemToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);
