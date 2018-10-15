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

    handleClickInc(){

        let stockLevel = this.props.singleItem[0].itemStockLevel;

        if(this.state.count < stockLevel) {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            });
        }
    }

    handleClickDec(){

        let stockLevel = this.props.singleItem[0].itemStockLevel;

        if(this.state.count > 1) {
            this.setState(prevState => {
                return {count: prevState.count - 1}
            });
        }
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

                                        <div className="col-lg-4 price-div">
                                                <h6 className="price">Price</h6>
                                            {
                                                item.itemSalePercentage > 0 &&
                                                <div className="price-div">
                                                    <div className="details_discount">${originalPrice(item)}</div>
                                                    <div className="details_price">${discountPrice(item)}</div>
                                                </div>
                                            }
                                            {
                                                item.itemSalePercentage <= 0 &&
                                                <div className="details_no_sale_price">${originalPrice(item)}</div>
                                            }
                                        </div>




                                    </div>
                                    <div className="quantity-button">
                                        <div>
                                            {
                                                (this.state.count > 1 && item.itemStockLevel >= 1) ? (
                                                    <button className="quantity-buttons" onClick={(e) => this.handleClickDec(e)}>-</button>):(
                                                    <button disabled className="quantity-buttons-disabled" onClick={(e) => this.handleClickDec(e)}>-</button>
                                                )
                                            }
                                        </div>
                                        <div className="quantity-buttons-count">
                                            <h9>{this.state.count}</h9>
                                        </div>
                                        <div >
                                            {
                                                (this.state.count >= 1 && this.state.count < item.itemStockLevel) ? (
                                                    <button className="quantity-buttons" onClick={(e) => this.handleClickInc(e)}>+</button>):(
                                                    <button disabled className="quantity-buttons-disabled" onClick={(e) => this.handleClickInc(e)}>+</button>
                                                )
                                            }
                                        </div>

                                        {
                                            (item.itemStockLevel >= 1) ? (
                                                <div className="button cart_button"><a href="#"><h9>Add to cart</h9></a></div>
                                            ):(
                                                <div disabled className="button cart_button_disabled"><a href="#"><h9>Add to cart</h9></a></div>
                                            )

                                        }


                                    </div>
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
