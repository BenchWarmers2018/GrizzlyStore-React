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
        }
    }


    createTable = () => {
        let dropDownItems = []

        // Outer loop to create parent
        const size = this.props.singleItem[0].itemStockLevel;
        if(size>0)
        {
            for (let i = 1; i < size+1; i++) {
                //Create the parent and add the children
                dropDownItems.push(<DropdownItem>{i}</DropdownItem>)
            }
        }
        return dropDownItems
    }


    render() {
        console.log(this.props.singleItem);
        const item = this.props.singleItem[0];
        console.log(item);
        if(typeof item === "undefined")
        {
            return <h2>No item Found. Please try again later.</h2>
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
                                    <img className="details_image_large" alt="item_image" src={ Product } />
                                </div>
                            </div>

                            {/*Content Description*/}

                            <div className="col-lg-6">

                                <div className="details_content">

                                    <div className="details_name">{item.itemName}</div>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="price">Price</div>
                                        </div>
                                        <div className="col-lg-4">
                                            {
                                                item.itemSalePercentage > 0 &&
                                                    <div>
                                                        <div className="details_discount">${item.itemPrice}</div>
                                                        <div className="details_price">${item.itemPrice - (item.itemPrice * item.itemSalePercentage/100)}</div>
                                                    </div>
                                             }
                                            {
                                                item.itemSalePercentage <= 0 &&
                                                <div className="details_price">${item.itemPrice}</div>
                                        }
                                        </div>
                                    </div>



                                        {
                                            (item.itemStockLevel > 0) ?
                                                <div className="in_stock_container ">
                                                    <div className="availability">Availability:</div>
                                                    <span >In Stock</span>
                                                </div>:
                                                <div className="out_of_stock_container">
                                                    <div className="availability">Availability:</div>
                                                    <span>Out of Stock</span>
                                                </div>
                                        }



                                    <div className="product_quantity_container mb-0" >
                                        <Dropdown size="lg">
                                            <DropdownToggle caret color="dark">
                                                Quantity
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                {this.createTable()}
                                            </DropdownMenu>
                                        </Dropdown>
                                        {/*<div className="product_quantity clearfix">*/}
                                            {/*<span>Qty</span>*/}
                                            {/*<input id="quantity_input" type="number" value="1"/>*/}
                                                {/*<div className="quantity_buttons">*/}
                                                    {/*<div id="quantity_inc_button" className="quantity_inc quantity_control">*/}
                                                        {/*<i className="fa fa-chevron-up" aria-hidden="true"></i></div>*/}
                                                    {/*<div id="quantity_dec_button" className="quantity_dec quantity_control">*/}
                                                        {/*<i className="fa fa-chevron-down" aria-hidden="true"></i></div>*/}
                                                {/*</div>*/}
                                        {/*</div>*/}
                                        <div className="button cart_button"><a href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row description_row">
                            <div className="col">
                                <div className="description_title_container">
                                    <div className="description_title"><strong>Description</strong></div>
                                </div>
                                <p>{item.itemDescription}</p>
                                <br />
                                <div className="description_text">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                        Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea
                                        dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris
                                        consequat nisi ut mauris efficitur lacinia.</p>
                                    <br />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*Suggested Products*/}

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