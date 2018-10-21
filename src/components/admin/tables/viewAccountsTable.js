import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa } from 'mdbreact';
import {connect} from "react-redux";
import { toggleAdminStatus } from "../../../actions/accountAction"

class ViewAccountsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.accountData,
      rowData: []
    };

    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidUpdate(prevProps){
    if(prevProps.accountData !== this.props.accountData)
    {
      this.setState({data: this.props.accountData})
    }

    if(prevProps.accounts !== this.props.accounts)
    {
      this.setState({data: this.props.accounts})
    }
  }

  handleToggle(row) {
    this.props.dispatch(toggleAdminStatus(row.original))
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Account ID",
                  id: "idAccount",
                  accessor: d => d.idAccount,
                  width: 400
                },
                {
                  Header: "Email Address",
                  accessor: "accountEmailAddress",
                  width: 450
                },
                {
                  Header: "Administrator Status",
                  accessor: "accountIsAdmin",
                  Cell: row => (
                    <div class="text-center">
                      <Button color={row.original.accountIsAdmin ? "success" : "danger"} onClick={() => this.handleToggle(row)}>
                        {row.original.accountIsAdmin ? <Fa icon="toggle-on" size="2x"/> : <Fa icon="toggle-off" size="2x"/>}
                      </Button>
                    </div>
                  ),
                  width: 350
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.userAccounts,
});

export default connect(mapStateToProps)(ViewAccountsTable);
