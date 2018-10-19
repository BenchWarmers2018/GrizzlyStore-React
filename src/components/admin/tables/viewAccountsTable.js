import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa } from 'mdbreact';

class ViewAccountsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.accountData,
      rowData: []
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.accountData !== this.props.accountData)
    {
      this.setState({data: this.props.accountData})
    }
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
                  width: 200
                },
                {
                  Header: "Email Address",
                  accessor: "accountEmailAddress",
                  width: 450
                },
                {
                  Header: "Administrator Status",
                  accessor: "accountIsAdmin",
                  width: 350
                },
                {
                  Header: "Toggle Status",
                  Cell: row => (
                    <div className="text-center">
                      <Button><Fa icon="smile-o" size="2x"/></Button>
                    </div>
                  ),
                  width: 150
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

export default ViewAccountsTable;
