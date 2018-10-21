import React, {Component} from 'react';
import ViewCategoriesTable from '../tables/viewCategoriesTable.js';
import { connect } from "react-redux";
import { fetchCategories } from "../../../actions/categoriesAction";
import Background from "../../../images/images_essence/bg-img/breadcrumbAdmin.jpg";

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
  }

  render() {
    return (
      <div className="page-wrapper">
          <div className="breadcumb_area breadcrumb_admin bg-img" style={{backgroundImage: "url(" + Background + ")"}}>
              <div className="container h-100">
                  <div className="row h-100 align-items-center">
                      <div className="col-12">
                          <div className="page-title text-center">
                              <h2>View Accounts</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid admin-container-fluid">
            <ViewCategoriesTable
              categoryData={this.state.categories}
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    categories: state.category.categories
});

export default connect(mapStateToProps)(ViewCategories);
