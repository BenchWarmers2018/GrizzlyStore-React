import React, {Component} from 'react';
import ViewItemsTable from '../tables/viewItemsTable.js';
import { connect } from "react-redux";
import { fetchItems, addItem } from "../../../actions/itemsAction";
import Background from "../../../images/images_essence/bg-img/breadcrumbAdmin.jpg";

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
