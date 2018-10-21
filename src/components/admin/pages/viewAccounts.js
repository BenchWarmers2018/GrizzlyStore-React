import React, {Component} from 'react';
import ViewAccountsTable from '../tables/viewAccountsTable.js';
import {connect} from "react-redux";
import {getAllUsers} from "../../../actions/accountAction";
import Background from "../../../images/images_essence/bg-img/breadcrumbAdmin.jpg";

class ViewAccounts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userAccounts: this.props.userAccounts
        }
    }

    componentDidMount() {
      this.props.dispatch(getAllUsers());
    }

    componentDidUpdate(prevProps) {
      if(prevProps.userAccounts !== this.props.userAccounts)
      {
        this.setState({userAccounts: this.props.userAccounts})
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


                    <ViewAccountsTable
                        accountData={this.state.userAccounts}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userAccounts: state.accounts.userAccounts
});

export default connect(mapStateToProps)(ViewAccounts);
