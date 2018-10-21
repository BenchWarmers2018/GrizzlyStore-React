import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import EditCategoryForm from "../forms/editCategoryForm.js";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class ViewCategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.categoryData,
      rowData: []
    };

    this.toggle = this.toggle.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  toggle(state, rowInfo) {
      this.setState({
        modal: !this.state.modal },
        () => {
          if (typeof rowInfo !== "undefined")
          {
            this.setState({
              rowData: rowInfo.original
            })
          }
      });
  }

  componentDidUpdate(prevProps){
    if(prevProps.categoryData !== this.props.categoryData)
    {
      this.setState({data: this.props.categoryData})
    }
  }

  deleteCategory() {
    confirmAlert({
      title: 'Confirm to submit',                        // Title dialog
      message: 'Are you sure to do this.',               // Message dialog
      childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
      confirmLabel: 'Confirm',                           // Text button confirm
      cancelLabel: 'Cancel',                             // Text button cancel
      onConfirm: () => alert('Action after Confirm'),    // Action after Confirm
      onCancel: () => alert('Action after Cancel'),      // Action after Cancel
    })
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
                  Header: "Category ID",
                  id: "idCategory",
                  accessor: d => d.idCategory,
                  width: 100
                },
                {
                  Header: "Category Name",
                  accessor: "categoryName"
                },
                {
                  Header: "Category Description",
                  accessor: "categoryDescription",
                },
                ,
                {
                  Header: "Edit",
                  Cell: row => (
                    <div className="text-center">
                      <Button onClick={this.toggle.bind(this)}><Fa icon="pencil" size="2x"/></Button>
                    </div>
                  ),
                  width: 150
                },
                {
                  Header: "Delete",
                  Cell: row => (
                    <div className="text-center">
                      <Button onClick={e => this.deleteCategory.bind(this)}><Fa icon="trash" size="2x"/></Button>
                    </div>
                  ),
                  width: 150
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          //
          // getTdProps={(state, rowInfo, column, instance) => {
          //   return {
          //     onClick: (e, handleOriginal) => {
          //       if (typeof rowInfo !== "undefined" && !this.state.show)
          //       {
          //         this.state.rowData = rowInfo.original;
          //         this.toggle();
          //       }
          //     }
          //   };
          // }}
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
            <EditCategoryForm
              rowData={this.state.rowData}/>
        </Modal>
      </div>
    );
  }
}

export default ViewCategoriesTable;
