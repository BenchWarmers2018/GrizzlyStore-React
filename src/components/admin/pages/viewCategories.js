import React, {Component} from 'react';
import ViewCategoriesTable from '../tables/viewCategoriesTable.js';
import { connect } from "react-redux";
import { fetchCategories } from "../../../actions/categoriesAction";

class ViewCategories extends Component {

  constructor(props){
    super(props);
    this.state = {
      categories: this.props.categories
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  componentDidUpdate(prevProps){
    if(prevProps.categories !== this.props.categories)
    {
      this.setState({categories: this.props.categories})
    }

    if(prevProps.updatedCategory !== this.props.updatedCategory)
    {
      
      this.setState({categories: this.props.categories})
    }
  }

  render() {
    return (
      <div className="page-wrapper">
          <div className="page-breadcrumb">
              <div className="row align-items-center">
                  <div className="col-5">
                      <h4 className="page-title">View Categories</h4>
                      <div className="d-flex align-items-center">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">View Categories</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid">
            <h1>View Categories</h1>
            <ViewCategoriesTable
              categoryData={this.state.categories}
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    categories: state.category.categories,
    updatedCategory: state.category.updatedCategory
});

export default connect(mapStateToProps)(ViewCategories);
