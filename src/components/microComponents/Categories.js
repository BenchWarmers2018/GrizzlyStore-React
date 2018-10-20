import React, {Component} from 'react';
import PropTypes from "prop-types";
import ItemsChild from "../customer/shop/ItemsChild";

class Categories extends Component {

    constructor(props){
        super(props);
    }
    changeCategory = (e) => {
        console.log("category name ", e.target.value);
        this.props.onCategoryChange(e.target.value);
    }

    render() {
        const category = this.props.data;
        const activeCategory = this.props.activeCategory;
        return (
            <div className="form-check">
                <label>
                    <input type="radio" value={category.categoryName} className="form-check-input"
                           checked= {activeCategory===category.categoryName}
                           onChange={this.changeCategory}/>
                    {category.categoryName}
                </label>
            </div>
        );
    }
}

Categories.propTypes = {
    data: PropTypes.object.isRequired
}
export default Categories;