import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { fetchItems } from "../../actions/itemsAction"
import { getVisibleItems } from "../../selectors/itemsSelector";
import Background from "../../images/images_essence/bg-img/breadcumb.jpg";
import {Link} from "react-router-dom";
import ItemsChild from "./ItemsChild"
import { filterText, category, startYear, endYear, sortBy } from '../../actions/filterActions';

class Items extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.dispatch(fetchItems());
    }

    render() {

        const items = this.props.items;
        console.log(items);
        console.log(this.props);


        if(items.length == 0){
            return <div><h2>No Items to display.</h2></div>
        }

        return (

            <div className="container-fluid">
                <div className="breadcumb_area bg-img" style={{backgroundImage: "url(" + Background + ")"}}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <div className="page-title text-center">
                                    <h2>All Items</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="shop_grid_area section-padding-80">
                    <div className="container">
                        <div className="row">

                            {/* This is Filters dive*/}
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop_sidebar_area">


                                    <div className="widget catagory mb-50">

                                        <h6 className="widget-title mb-30">Catagories</h6>


                                        <div className="catagories-menu">
                                            <ul id="menu-content2" className="menu-content collapse show">

                                                <li>
                                                    <Link to="/category/art">Art</Link>
                                                </li>
                                                <li>
                                                    <Link to="/category/clothing">Clothing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/category/home">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/category/jewellery">Jewellery</Link>
                                                </li>
                                                <li>
                                                    <Link to="/category/technology">Technology</Link>
                                                </li>
                                                <li>
                                                    <Link to="/category/toys">Toys</Link>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>


                                    <div className="widget price mb-50">

                                        <h6 className="widget-title mb-30">Filter by</h6>

                                        <p className="widget-title2 mb-30">Price</p>

                                        <div data-role="rangeslider">
                                            <Slider value={100}
                                                    orientation="horizontal"/>
                                        </div>
                                    </div>




                                </div>
                            </div>

                            {/* This is products dive*/}
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">

                                    {/* This is Sort dive*/}
                                    <div className="row" style={{backgroundColor:"#f8f9f9", marginBottom:"5%" }}>
                                        <div className="col-12">
                                            <div
                                                className="product-topbar d-flex align-items-center justify-content-between row">

                                                <div className="total-products col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                    <p><span>{this.props.items.length}</span> Products found</p>
                                                </div>

                                                <div
                                                    className="search_panel_content d-flex flex-row align-items-center justify-content-between col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                        <input type="text" className="search_input" placeholder="Search"
                                                               required="required" value={this.props.sortAndFilter.text}
                                                               onChange={(e) => {
                                                                   this.props.dispatch(filterText(e.target.value));
                                                               }}/>
                                                </div>


                                                <div className="product-sorting align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                    <p>Sort by:</p>
                                                        <select value={this.props.sortAndFilter.sortBy}
                                                                onChange={(e) => {
                                                                    this.props.dispatch(sortBy(e.target.value));
                                                                }} id="sortByselect">
                                                            <option value="title">Title</option>
                                                            <option value="hightolow">Price: $$ - $</option>
                                                            <option value="lowtohigh">Price: $ - $$</option>
                                                        </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* This is products child class that displays all the items*/}
                                    <ItemsChild data={items} />
                                    {/* End of child class */}



                                </div>

                                <nav aria-label="navigation">
                                    <ul className="pagination mt-50 mb-70">
                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="fa fa-angle-left"></i></a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                                        <li className="page-item"><a className="page-link" href="#">21</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i
                                            className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

// Items.propTypes= {
//     fetchItems: PropTypes.func.isRequired,
//     items: PropTypes.array.isRequired,
// }

const mapStateToProps = state => ({
    items: getVisibleItems(state.items.items, state.sortAndFilter),
    sortAndFilter: state.sortAndFilter,
    fetched: state.items.fetched,
    fetching :state.items.fetching,
    error: state.items.error,
});

export default connect(mapStateToProps)(Items);