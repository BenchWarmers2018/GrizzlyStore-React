import React, { Component } from 'react';
import Product from "../../images/images_sublime/details_1.jpg";
import { connect } from 'react-redux';
import { fetchSingleItem } from '../../actions/itemsAction'
import { fetchCategoriesforItem } from '../../actions/categoriesAction'
import Banner from "../microComponents/Banner";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


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
            console.log("ITEM STOCK LEVEL IS: " + this.state.stockLevel);
        }
    }

    createTable = () => {
        let dropDownItems = []

        // Outer loop to create parent
        const size = this.props.singleItem[0].itemStockLevel;
        console.log()
        if(size>0)
        {
            for (let i = 1; i < size+1; i++) {
                //Create the parent and add the children
                dropDownItems.push(<DropdownItem>{i}</DropdownItem>)
            }
        }
        return dropDownItems
    }

    handleClick=(type)=>{
        console.log("STOCK LEVEL IS: " + this.props.singleItem[0].itemStockLevel)
        this.setState(prevState => {
            return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
        });
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        console.log(this.props.singleItem);
        const item = this.props.singleItem[0];
        console.log(item);

        if(typeof item === "undefined")
        {
            return <h2>No item Found. Please try again later.</h2>
        }

        function discountPrice(item){
            let num = item.itemPrice - (item.itemPrice * item.itemSalePercentage/100);
            return num.toFixed(2);
        }

        function originalPrice(item){
            let num = item.itemPrice
            return num.toFixed(2);
        }

        // function checkMin(){
        //     if(this.state.count > 1 && item.itemStockLevel !=0){
        //         <button onClick={this.decrement} id="quantity_dec_button" className="quantity_dec quantity_control"></button>
        //     }
        //     else{
        //         <button disabled id="quantity_dec_button" className="quantity_dec quantity_control"></button>
        //     }
        // }
        //
        // function checkMax(){
        //     if(this.state.count < item.itemStockLevel && item.itemStockLevel!=0){
        //         <button  onClick={this.increment} id="quantity_inc_button" className="quantity_inc quantity_control"></button>
        //     }
        //     else{
        //         <button disabled id="quantity_inc_button" className="quantity_inc quantity_control"></button>
        //     }
        // }

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
                                    <div className="row each-item-main-div">
                                        <div>
                                            <div className="price">Price</div>
                                        </div>
                                        <div className="col-lg-4 price-div">
                                            {
                                                item.itemSalePercentage > 0 &&
                                                <div>
                                                    <div className="details_discount">${originalPrice(item)}</div>
                                                    <div className="details_price">${discountPrice(item)}</div>
                                                </div>
                                            }
                                            {
                                                item.itemSalePercentage <= 0 &&
                                                <div className="details_no_sale_price">${originalPrice(item)}</div>
                                            }
                                        </div>
                                        <div className="quantity_buttons">
                                            <input type='button' onClick={this.handleClick.bind(this, 'add')} value='Inc'/>
                                            <input type='button' onClick={this.handleClick.bind(this, 'sub')} value='Dec'/>
                                            <h6>{this.state.count}</h6>

                                        </div>
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

                                        <div className="product_quantity clearfix">
                                            <span>Qty</span>
                                            <select id="quantity_input" type="number" value="1"/>

                                        </div>

                                        <div className="button cart_button"><a href="#">Add to cart</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

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
});

const mapDispatchToProps = {
    fetchSingleItem,
    fetchCategoriesforItem,
}
export default connect(mapStateToProps, mapDispatchToProps) (EachItem);
