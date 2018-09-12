import React, { Component } from 'react';
import Background from "../../images_sublime/categories.jpg";

class Category extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="home_container">
                        <div className="home_background" style={{backgroundImage: "url(" + Background + ")"}}></div>
                        <div className="home_content_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_content">
                                            <div className="home_title">Smart Phones<span>.</span></div>
                                            <div className="home_text"><p>Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed
                                                viverra velit venenatis fermentum luctus.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div
                                    className="sorting_bar d-flex flex-md-row flex-column align-items-md-center justify-content-md-start">
                                    <div className="results">Showing <span>12</span> results</div>
                                    <div className="sorting_container ml-md-auto">
                                        <div className="sorting">
                                            <ul className="item_sorting">
                                                <li>
                                                    <span className="sorting_text">Sort by</span>
                                                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                                    <ul>
                                                        <li className="product_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "original-order" }'>
                                                            <span>Default</span></li>
                                                        <li className="product_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "price" }'>
                                                            <span>Price</span></li>
                                                        <li className="product_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "stars" }'>
                                                            <span>Name</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                                <div className="product_grid">

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_1.jpg" alt=""/></div>
                                        <div className="product_extra product_new"><a href="categories.html">New</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$670</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_2.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Sale</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$520</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_3.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$710</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_4.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$330</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_5.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$170</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_6.jpg" alt=""/></div>
                                        <div className="product_extra product_hot"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$240</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_7.jpg" alt=""/></div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$70</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_8.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$490</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_9.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$410</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_10.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$365</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_11.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$195</div>
                                        </div>
                                    </div>

                                    <div className="product">
                                        <div className="product_image"><img src="images/product_12.jpg" alt=""/></div>
                                        <div className="product_extra product_sale"><a href="categories.html">Hot</a>
                                        </div>
                                        <div className="product_content">
                                            <div className="product_title"><a href="product.html">Smart Phone</a></div>
                                            <div className="product_price">$580</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="product_pagination">
                                    <ul>
                                        <li className="active"><a href="#">01.</a></li>
                                        <li><a href="#">02.</a></li>
                                        <li><a href="#">03.</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;