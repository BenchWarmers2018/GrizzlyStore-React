import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { fetchItems } from "../../actions/itemsAction"
import { getVisibleItems } from "../../selectors/itemsSelector";
import Background from "../../images/images_essence/bg-img/breadcumb.jpg";
import ItemsChild from "./ItemsChild"
import { filterText, category, minPrice, maxPrice, sortBy } from '../../actions/filterActions';
import InputRange from 'react-input-range';
import '../../../node_modules/react-input-range/lib/css/index.css';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenVal: {
                min: 0,
                max: 100,
            },
            maxAndMinValues: {
                min: 0,
                max: 100,
            },
            times : 0,
        };
    }

    componentWillMount() {
        this.props.fetchItems();
        // this.setState(prevState => ({
        //     maxAndMinValues: {...this.state.maxAndMinValues, e}
        // }));

    }



    changeCategory = (e) => {
        this.props.category(e.target.value);
    }

    updatePrice = (e) => {
        console.log(this.state.chosenVal.min);
        this.props.minPrice(this.state.chosenVal.min);
        this.props.maxPrice(this.state.chosenVal.max);
    }
    updateMaxAndMinValues = (e) => {
        this.setState(prevState => ({
            maxAndMinValues: {...this.state.maxAndMinValues, e}
        }));
        console.log(this.state);
    }

    render() {

        const items = this.props.items;

        // if(items.length > 0)
        // {
        //     console.log("I was here with: ", items.length, " ", this.state.times);
        //     if(this.state.times==1)
        //     {
        //         console.log("In here now.")
        //         const minimum = Math.min(...this.props.items.map(item => item.itemPrice, 0));
        //         const maximum = Math.max(...this.props.items.map(item => item.itemPrice, 0));
        //         const arr={min: minimum, max: maximum}
        //         this.updateMaxAndMinValues(arr);
        //
        //     }
        //
        // }





        return(
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
                                        <form>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="art" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "art"}
                                                           onChange={this.changeCategory}/>
                                                    Art
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="clothing" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "clothing"}
                                                           onChange={this.changeCategory}/>
                                                    Clothing
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="home" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "home"}
                                                           onChange={this.changeCategory}/>
                                                    Home
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="jewellery" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "jewellery"}
                                                           onChange={this.changeCategory}/>
                                                    Jewellery
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="technology" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "technology"}
                                                           onChange={this.changeCategory}/>
                                                    Technology
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="toys" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === "toys"}
                                                           onChange={this.changeCategory}/>
                                                    Toys
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="" className="form-check-input"
                                                           checked={this.props.sortAndFilter.category === ""}
                                                           onChange={this.changeCategory}/>
                                                    All
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                <div className="widget price mb-50">

                                    <h6 className="widget-title mb-30">Filter by</h6>

                                    <p className="widget-title2 mb-30">Price</p>

                                    <div>

                                        {/*Slider bar here to come.*/}
                                        <InputRange
                                            draggableTrack
                                            maxValue={this.state.maxAndMinValues.max}
                                            minValue={this.state.maxAndMinValues.min}
                                            formatLabel={value => `$${value}`}
                                            onChange={value => this.setState({ chosenVal: value })}
                                            onChangeComplete={this.updatePrice}
                                            value={this.state.chosenVal} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* This is products dive*/}
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">

                                {/* This is Sort dive*/}
                                <div className="row" style={{backgroundColor: "#f8f9f9", marginBottom: "5%"}}>
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
                                                           this.props.filterText(e.target.value);
                                                       }}/>
                                            </div>


                                            <div
                                                className="product-sorting align-items-center d-flex col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                <p>Sort by:</p>
                                                <select value={this.props.sortAndFilter.sortBy}
                                                        onChange={(e) => {
                                                            this.props.sortBy(e.target.value);
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

                                { this.props.items.length === 0 ? <h2>No items to diplay</h2> : <ItemsChild data={items}/>}

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

Items.propTypes= {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    items: getVisibleItems(state.items.items, state.sortAndFilter),
    sortAndFilter: state.sortAndFilter,
    fetched: state.items.fetched,
    fetching :state.items.fetching,
    error: state.items.error,
});

const mapDispatchToProps = {
    fetchItems,
    filterText,
    category,
    minPrice,
    maxPrice,
    sortBy
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);