import React, { Component } from 'react';
import Background from "../../images_essence/bg-img/breadcumb.jpg"
import { Link } from 'react-router-dom';
import ItemSmart from './itemSmart';


class AllItems extends Component {
    render() {
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

                                        <div className="widget-desc">
                                            <div className="slider-range">
                                                <div data-min="49" data-max="360" data-unit="$"
                                                     className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                                                     data-value-min="49" data-value-max="360"
                                                     data-label-result="Range:">
                                                    <div
                                                        className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all"
                                                          tabIndex="0"></span>
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all"
                                                          tabIndex="0"></span>
                                                </div>
                                                <div className="range-price">Range: $49.00 - $360.00</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="widget color mb-50">

                                        <p className="widget-title2 mb-30">Color</p>
                                        <div className="widget-desc">
                                            <ul className="d-flex">
                                                <li><a href="#" className="color1"></a></li>
                                                <li><a href="#" className="color2"></a></li>
                                                <li><a href="#" className="color3"></a></li>
                                                <li><a href="#" className="color4"></a></li>
                                                <li><a href="#" className="color5"></a></li>
                                                <li><a href="#" className="color6"></a></li>
                                                <li><a href="#" className="color7"></a></li>
                                                <li><a href="#" className="color8"></a></li>
                                                <li><a href="#" className="color9"></a></li>
                                                <li><a href="#" className="color10"></a></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="widget brands mb-50">

                                        <p className="widget-title2 mb-30">Brands</p>
                                        <div className="widget-desc">
                                            <ul>
                                                <li><a href="#">Asos</a></li>
                                                <li><a href="#">Mango</a></li>
                                                <li><a href="#">River Island</a></li>
                                                <li><a href="#">Topshop</a></li>
                                                <li><a href="#">Zara</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* This is products dive*/}
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">

                                    {/* This is Sort dive*/}
                                    <div className="row">
                                        <div className="col-12">
                                            <div
                                                className="product-topbar d-flex align-items-center justify-content-between">

                                                <div className="total-products">
                                                    <p><span>186</span> products found</p>
                                                </div>

                                                <div className="product-sorting d-flex">
                                                    <p>Sort by:</p>
                                                    <form action="#" method="get">
                                                        <select name="select" id="sortByselect">
                                                            <option value="value">Highest Rated</option>
                                                            <option value="value">Newest</option>
                                                            <option value="value">Price: $$ - $</option>
                                                            <option value="value">Price: $ - $$</option>
                                                        </select>
                                                        <input type="submit" className="d-none" value=""/>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* This is products detailed div*/}

                                <ItemSmart/>


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

export default AllItems;