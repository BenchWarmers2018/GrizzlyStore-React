import React, {Component} from 'react';
import ViewItemsTable from '../tables/viewItemsTable.js';
import { connect } from "react-redux";
import { fetchItems } from "../../../actions/itemsAction";

class ViewItems extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: this.props.items
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  componentDidUpdate(prevProps){
    if(prevProps.items !== this.props.items)
    {
      this.setState({items: this.props.items})
    }
  }

  render() {
    return (
      <div className="page-wrapper">
          <div className="page-breadcrumb">
              <div className="row align-items-center">
                  <div className="col-5">
                      <h4 className="page-title">View Items</h4>
                      <div className="d-flex align-items-center">
                          <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">View Items</li>
                              </ol>
                          </nav>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid">
            <h1>View Items</h1>
            <ViewItemsTable
              itemData={this.state.items}
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    items: state.items.items
});

export default connect(mapStateToProps)(ViewItems);
