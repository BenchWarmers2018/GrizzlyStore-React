import React, { Component } from 'react';
import PaginationComponent from '../microComponents/PaginationComponent'
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { fetchCategories } from "../../actions/categoriesAction"
import { filterText, category, minPrice, maxPrice, sortBy, page } from '../../actions/filterActions';
import { getVisibleItems, fetchFilteredItems } from "../../selectors/itemsSelector";
import ItemsChild from "./ItemsChild"
import InputRange from 'react-input-range';
import '../../../node_modules/react-input-range/lib/css/index.css';
import Categories from "../microComponents/Categories";
import Banner from "../microComponents/Banner";
import {ITEM_PAGE_SIZE} from "../../CONSTANTS";
import Spinner from "../microComponents/Spinner";

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenVal: {
                min: this.props.sortAndFilter.minPrice,
                max: this.props.sortAndFilter.maxPrice,
            },
            leastPrice:this.props.sortAndFilter.minPrice,
            mostPrice: this.props.sortAndFilter.maxPrice,
            times:0,
            searchText:"",
        }
    }

    componentDidMount() {

        this.props.fetchCategories();
        if(typeof this.props.match.params.categoryName !== "undefined")
        {
            this.props.category(this.props.match.params.categoryName);
            //this.props.fetchFilteredItems(this.props.sortAndFilter.text, this.props.sortAndFilter.minPrice, this.props.sortAndFilter.maxPrice, this.props.sortAndFilter.sortBy, this.props.sortAndFilter.category, this.props.sortAndFilter.page, ITEM_PAGE_SIZE);
        }
        if(typeof this.props.pageProps.number === "undefined" || this.props.pageProps.number <= 0)
        {
            this.props.fetchFilteredItems(this.props.sortAndFilter.text, this.props.sortAndFilter.minPrice, this.props.sortAndFilter.maxPrice, this.props.sortAndFilter.sortBy, this.props.sortAndFilter.category, this.props.sortAndFilter.page, ITEM_PAGE_SIZE);
        }
    }


    componentDidUpdate(prevProps) {
        console.log("I tried atleast " , this.props.match.params.categoryName);
        if(prevProps.sortAndFilter !== this.props.sortAndFilter || prevProps.match.params.categoryName !== this.props.match.params.categoryName)
        {
            if(prevProps.match.params.categoryName !== this.props.match.params.categoryName)
            {
                this.props.category(this.props.match.params.categoryName);
            }
            this.props.fetchFilteredItems(this.props.sortAndFilter.text, this.props.sortAndFilter.minPrice, this.props.sortAndFilter.maxPrice, this.props.sortAndFilter.sortBy, this.props.sortAndFilter.category, this.props.sortAndFilter.page, ITEM_PAGE_SIZE);
            console.log("Category in items " , this.props.sortAndFilter.category);
            console.log("Sort in items " , this.props.sortAndFilter.sortBy);
            console.log("Min in items " , this.props.sortAndFilter.minPrice);
            console.log("Max in items " , this.props.sortAndFilter.maxPrice);
            console.log("search text in items " , this.props.sortAndFilter.text);
        }


        if(this.props.leastItemPrice !== prevProps.leastItemPrice || this.props.mostItemPrice !== prevProps.mostItemPrice)
        {
            console.log("previous: ",prevProps.sortAndFilter.category, " Now is :", this.props.sortAndFilter.category);
            const chosenVal = { min: this.props.leastItemPrice, max: this.props.mostItemPrice }
            if(this.props.sortAndFilter.text !== prevProps.sortAndFilter.text ||
                this.props.sortAndFilter.category !== prevProps.sortAndFilter.category || this.state.times === 0)
            {
                console.log("changin all 4 price values")
                this.setState(
                    {chosenVal: chosenVal, leastPrice: this.props.leastItemPrice, mostPrice: this.props.mostItemPrice, times:1});
            }
            else {
                console.log("changin only 2 price values")
                this.setState(
                    {chosenVal: chosenVal});
            }
        }
    }

    handlePageChange = (page) => {
        this.props.page(page);
        this.setState(prevState => ({
            pageProps: {...prevState.pageProps, number: page}
        }))
    }

    handleCategoryChange = (catName) => {
        console.log("Category in items " , catName);
        this.props.category(catName);

        //Setting price range to default
        this.props.minPrice(0);
        this.props.maxPrice(0);

    }

    resetCategory = (e) => {
        console.log("Category in items " , e.target.value);
        this.props.category(e.target.value);

        //Setting price range to default
        this.props.minPrice(0);
        this.props.maxPrice(0);
    }



    updatePrice = (e) => {
        this.props.minPrice(this.state.chosenVal.min);
        this.props.maxPrice(this.state.chosenVal.max);
    }

    handleSearch = (e) => {
        console.log("I was clicked with value " + this.state.searchText);
        e.preventDefault();
        //Setting price range to default
        this.props.minPrice(0);
        this.props.maxPrice(0);
        this.props.filterText(this.state.searchText);


    }
    render() {

        const items = this.props.filteredPagedItems;
        const categories = this.props.categories;
        console.log(items);


        if(this.props.fetching === true){
            return(
                <Spinner/>
            );
        }
        return(
        <div className="container-fluid">

            {/* Banner component */}
            {(this.props.sortAndFilter.category.length > 0) ?
                <Banner data={this.props.sortAndFilter.category}/> :
                <Banner data="All Items"/>
            }
            {/*Banner component end*/}

            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">

                        {/* This is Filters dive*/}
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">


                                <div className="widget catagory mb-50">

                                    <h6 className="widget-title mb-30">Categories</h6>


                                    <div className="catagories-menu">
                                        <form>
                                            {categories.map(category=>
                                            <Categories activeCategory={this.props.sortAndFilter.category} key={category.idCategory} data={category} onCategoryChange={this.handleCategoryChange}/>
                                            )}
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" value="" className="form-check-input"
                                                           checked= {this.props.sortAndFilter.category===""}
                                                           onChange={this.resetCategory}/>
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
                                            minValue={this.state.leastPrice}
                                            maxValue={this.state.mostPrice}
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
                                                <p><span>{this.props.pageProps.totalElements}</span> Products found</p>
                                            </div>

                                            <div
                                                className="search_panel_content d-flex flex-row align-items-center justify-content-between col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                                {/*<input type="text" className="search_input" placeholder="Search"*/}
                                                       {/*required="required" value={this.props.sortAndFilter.text}*/}
                                                       {/*onChange={(e) => {*/}
                                                           {/*this.props.filterText(e.target.value);*/}
                                                           {/*//Setting price range to default*/}
                                                           {/*this.props.minPrice(0);*/}
                                                           {/*this.props.maxPrice(0);*/}
                                                       {/*}}/>*/}
                                                <form className="form-inline md-form mr-auto mb-4" onSubmit={this.handleSearch}>
                                                    <input className="form-control mr-sm-2" type="text"
                                                           placeholder="Search..." aria-label="Search" value={this.state.searchText}
                                                           onChange={(e) => {
                                                               this.setState({searchText: e.target.value});

                                                           }}/>
                                                </form>
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

                                { this.props.filteredPagedItems.length === 0 ? <h2>No items to diplay</h2> :
                                    <div className="row">
                                        {items.map(item =>
                                        <ItemsChild key={item.idItem} data={item}/>
                                        )}

                                    </div>}

                                {/* End of child class */}


                            </div>

                            {/**
                            *** Pgination ultimate boot 4 methods***
                             *
                             currentPage = props.currentPage,
                             totalPages = props.totalPages,
                             boundaryPagesRange = props.boundaryPagesRange,
                             siblingPagesRange = props.siblingPagesRange,
                             hideEllipsis = props.hideEllipsis,
                             hidePreviousAndNextPageLinks = props.hidePreviousAndNextPageLinks,
                             hideFirstAndLastPageLinks = props.hideFirstAndLastPageLinks,
                             onChange = props.onChange,
                             restProps = _objectWithoutProperties(props, ['currentPage', 'totalPages', 'boundaryPagesRange', 'siblingPagesRange', 'hideEllipsis', 'hidePreviousAndNextPageLinks', 'hideFirstAndLastPageLinks', 'onChange']);

                             */}

                                 <div className="col-lg-8 col-md-8 col-sm-10" styles="alignContent:center">
                                     {this.props.pageProps.number===undefined || this.props.pageProps.number <= 0 ?
                                         <PaginationComponent currentPage={1}
                                                              totalPages={1}/> :
                                         <PaginationComponent currentPage={this.props.pageProps.number}
                                                              totalPages={this.props.pageProps.totalPages}
                                                              onPageChange={this.handlePageChange}
                                         />
                                     }

                                 </div>
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
};

const mapStateToProps = state => ({
    items: getVisibleItems(state.items.pagedItems, state.sortAndFilter),
    filteredPagedItems: state.items.pagedItems,
    categories: state.category.categories,
    sortAndFilter: state.sortAndFilter,
    pageProps: state.items.pageProps,
    leastItemPrice: state.items.leastItemPrice,
    mostItemPrice: state.items.mostItemPrice,
    fetched: state.items.fetched,
    fetching :state.items.fetching,
    error: state.items.error,
});

const mapDispatchToProps = {
    fetchFilteredItems,
    fetchCategories,
    filterText,
    category,
    minPrice,
    maxPrice,
    sortBy,
    page,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);