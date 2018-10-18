import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ViewAccountsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.accountData,
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
                  width: 75
                },
                {
                  Header: "Email Address",
                  accessor: "accountEmailAddress"
                },
                {
                  Header: "Administrator Status",
                  accessor: "accountIsAdmin",
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
