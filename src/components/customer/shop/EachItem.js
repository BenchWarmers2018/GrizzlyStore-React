import React, { Component } from 'react';
import Product from "../../../images/images_sublime/details_1.jpg";
import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../actions/itemsAction'
import { fetchCategoriesforItem } from '../../../actions/categoriesAction'
import {addItemToCart, deleteItemFromCart} from '../../../actions/cartAction';
import Banner from "../../microComponents/Banner";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import {NORMAL_USER} from "../../../CONSTANTS";
import {Icon, notification} from "antd";
import {errorNotification, successNotification} from "../../microComponents/Notifications";

class EachItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            stockLevel: 0,
            message: null,
            count: 1,
        };
    };

    componentDidMount() {
        const itemID = this.props.match.params.id;
        this.props.fetchSingleItem(itemID);
        this.props.fetchCategoriesforItem(itemID);
    }

    componentDidUpdate(nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.props.fetchSingleItem(this.props.match.params.id);
            this.props.fetchCategoriesforItem(this.props.match.params.id);
            this.setState.stockLevel = this.props.singleItem[0].itemStockLevel;
        }
    }

    //Handles button for decreasing stock
    handleClickInc(){

        let stockLevel = this.props.singleItem[0].itemStockLevel;

        if(this.state.count < stockLevel) {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            });
        }
    }

    //Handles button for increasing stock
    handleClickDec(){

        if(this.state.count > 1) {
            this.setState(prevState => {
                return {count: prevState.count - 1}
            });
        }
    }

    // Adding item to cart
    addToCart = () => {
        let accountId = null;
        console.log(this.props.loggedInUser.idAccount);
        if(typeof this.props.loggedInUser !== "undefined")
        {
            if(this.props.userType === NORMAL_USER)
            {
                accountId = this.props.loggedInUser.idAccount;
                const item = this.props.singleItem[0];

                const cart = { "idAccountForeign": accountId, "items": [{ "idItem": item.idItem, "itemQuantity": this.state.count, "itemPrice": this.discountPrice(item)}]};
                this.props.addItemToCart(cart);
                successNotification("Successfully Added to Cart");
            }
        }
        else
        {
            
        }
    };

    notAllowed = () =>
    {
        if(this.props.loggedInUser=== null)
            errorNotification("No Account Detected", "Please login to add items to your cart.")
        else
            errorNotification("No Stock Available", "Please try again after some time.")
    }

    discountPrice = (item) => {
        let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
        return num.toFixed(2);
    }

    render() {
        const item = this.props.singleItem[0];

        if(typeof item === "undefined")
        {
            return <h2>No item Found. Please try again later.</h2>
        }



        function originalPrice(item){
            let num = item.itemPrice;
            return num.toFixed(2);
        }

        return (
            <div>
                {/*Content image*/}
                {this.props.itemCategory.map(category =>
                    <Banner data={category.categoryName} />
                )}

                <div className="product_details">
                    <div className="container">
                        <div className="row details_row">

                            <div className="col-lg-6">
                                <div className="details_image">
                                    <img className="details_image_large" alt="item_image" src={item.itemImage} />
                                </div>
                            </div>

                            {/*Content Description*/}
                            <div className="col-lg-6">

                                <div className="details_content">

                                    <div className="details_name">{item.itemName}</div>

                                    {/*Price or Discounted Price*/}
                                    <div className="row each-item-main-div">

                                        <div className="col-lg-4 price-div">
                                            <h6 className="price">Price</h6>
                                            {
                                                item.itemSalePercentage > 0 &&
                                                <div className="price-div">
                                                    <div className="details_discount">${originalPrice(item)}</div>
                                                    <div className="details_price">${this.discountPrice(item)}</div>
                                                </div>
                                            }
                                            {
                                                item.itemSalePercentage <= 0 &&
                                                <div className="details_no_sale_price">${originalPrice(item)}</div>
                                            }
                                        </div>

                                    </div>

                                    {/*Increment/Decrement Buttons*/}
                                    <div className="quantity-button">
                                        <div>
                                            {
                                                (this.state.count > 1 && item.itemStockLevel >= 1) ? (
                                                    <button className="btn btn-primary" onClick={(e) => this.handleClickDec(e)}><div className="btn-enlarge">-</div></button>):(
                                                    <button disabled className="btn btn-primary" onClick={(e) => this.handleClickDec(e)}><div className="btn-enlarge">-</div></button>
                                                )
                                            }
                                        </div>
                                        <div className="quantity-buttons-count">
                                            <h9>{this.state.count}</h9>
                                        </div>
                                        <div >
                                            {/* "quantity-buttons-disabled" class disabled and used bootstrap "btn btn-dark"*/}
                                            {
                                                (this.state.count >= 1 && this.state.count < item.itemStockLevel) ? (
                                                    <button className="btn btn-primary" onClick={(e) => this.handleClickInc(e)}><div className="btn-enlarge">+</div></button>):(
                                                    <button disabled className=" btn btn-primary" onClick={(e) => this.handleClickInc(e)}><div className="btn-enlarge">+</div></button>
                                                )
                                            }
                                        </div>

                                        {
                                            (item.itemStockLevel >= 1 && this.props.loggedInUser!== null) ? (
                                                <div className="button cart_button" onClick={this.addToCart}><a>Add to cart</a></div>
                                            ):(
                                                <div onClick={this.notAllowed} disabled className="button cart_button_disabled"><a>Add to cart</a></div>
                                            )
                                        }
                                    </div>

                                    {/*Stock Availability --> Out of Stock/In Stock*/}
                                    <div>
                                        {
                                            (item.itemStockLevel > 0) ? (
                                                <div className="in_stock_container ">
                                                    <div className="availability">Availability:</div>
                                                    <span >IN STOCK</span>
                                                </div> ): (
                                                <div className="out_of_stock_container">
                                                    <div className="availability">Availability:</div>
                                                    <span className="discount-text-red">OUT OF STOCK</span>
                                                </div> )
                                        }

                                        {/*<Dropdown size="lg">*/}
                                        {/*/!*<DropdownToggle caret color="dark">*!/*/}
                                        {/*/!*Quantity*!/*/}
                                        {/*/!*</DropdownToggle>*!/*/}

                                        {/*<DropdownMenu>*/}
                                        {/*{this.createTable()}*/}
                                        {/*</DropdownMenu>*/}
                                        {/*</Dropdown>*/}

                                        {/*<div>*/}
                                        {/*{doDecrement()}*/}
                                        {/*<input type="text" className="number" value={this.state.value}></input>*/}
                                        {/*<button onClick={doIncrement} className=" item-stock-increment fa fa-plus fa-inverse fa-2x"></button>*/}
                                        {/*<sub>{this.state.message}</sub>*/}
                                        {/*</div>*/}

                                        {/*<div className="product_quantity clearfix">*/}
                                        {/*<span>Qty</span>*/}
                                        {/*<select id="quantity_input" type="number" value="1"/>*/}
                                        {/*<div className="quantity_buttons">*/}
                                        {/*<div id="quantity_inc_button" className="quantity_inc quantity_control">*/}
                                        {/*<i className="fa fa-chevron-up" aria-hidden="true"></i></div>*/}
                                        {/*<div id="quantity_dec_button" className="quantity_dec quantity_control">*/}
                                        {/*<i className="fa fa-chevron-down" aria-hidden="true"></i></div>*/}
                                        {/*</div>*/}
                                        {/*</div>*/}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/*Product Description*/}
                    <div className="row description_row">
                        <div className="col">
                            <div className="description_title_container">
                                <div className="description_title"><strong>Description</strong></div>
                            </div>
                            <p>{item.itemDescription}
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                                dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                                consequat nisi ut mauris efficitur lacinia.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    singleItem: state.items.singleItem,
    itemCategory: state.category.itemCategory,
    loggedInUser : state.accounts.loggedInUser,
    userType : state.accounts.userType,
});

const mapDispatchToProps = {
    fetchSingleItem,
    fetchCategoriesforItem,
    addItemToCart,
    deleteItemFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps) (EachItem);
