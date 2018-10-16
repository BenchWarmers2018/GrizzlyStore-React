import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import EditItemForm from "../forms/editItemForm.js";

class ViewItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.itemData,
      rowData: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
          modal: !this.state.modal
      });
      console.log
  }

  componentDidUpdate(prevProps){
    if(prevProps.itemData !== this.props.itemData)
    {
      this.setState({data: this.props.itemData})
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
                  Header: "Item ID",
                  id: "idItem",
                  accessor: d => d.idItem,
                  width: 75
                },
                {
                  Header: "Name",
                  accessor: "itemName",
                  width: 400
                },
                {
                  Header: "Description",
                  accessor: "itemDescription",
                  width: 400
                },
                {
                  Header: "Price ($)",
                  accessor: "itemPrice",
                  width: 75
                },
                {
                  Header: "Sale %",
                  accessor: "itemSalePercentage",
                  width: 75
                },
                {
                  Header: "Stock Level",
                  accessor: "itemStockLevel",
                  width: 100
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"

          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                if (typeof rowInfo !== "undefined")
                {
                  this.state.rowData = rowInfo.original;
                  this.toggle();
                }
                console.log(rowInfo);
              }
            };
          }}
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
            <EditItemForm
              rowData={this.state.rowData}/>
        </Modal>
      </div>
    );
  }
}

export default ViewItemsTable;
