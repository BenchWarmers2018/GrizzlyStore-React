import React, {Component} from 'react';
import ViewAccountsTable from '../tables/viewAccountsTable.js';
import {connect} from "react-redux";
import {getAllUsers} from "../../../actions/accountAction";

class ViewAccounts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: this.props.accounts
        }
    }

    componentDidMount() {
      // this.props.dispatch(getAllUsers());
    }

    componentDidUpdate(prevProps) {
      if(prevProps.accounts !== this.props.accounts)
      {
        this.setState({accounts: this.props.accounts})
      }
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="page-breadcrumb">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <h4 className="page-title">View Accounts</h4>
                            <div className="d-flex align-items-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">View Accounts</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <h1>View Accounts</h1>
                    <ViewAccountsTable
                        accountData={this.state.accounts}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    accounts: state.accounts.accounts
});

export default connect(mapStateToProps)(ViewAccounts);
