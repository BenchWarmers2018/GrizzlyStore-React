import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import EditCategoryForm from "../forms/editCategoryForm.js";
import { connect } from "react-redux"

class ViewCategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.categoryData,
      editCategoryMessage: props.editCategoryMessage,
      rowData: []
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
          modal: !this.state.modal
      });
  }

  componentDidUpdate(prevProps){
    if(prevProps.categoryData !== this.props.categoryData)
    {
      this.setState({data: this.props.categoryData})
    }

    if(prevProps.editCategoryMessage !== this.props.editCategoryMessage)
    {
      this.setState({editCategoryMessage: this.props.editCategoryMessage})
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
              }
            };
          }}
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
            {/* <EditCategoryForm rowData={this.state.rowData} editCategoryMessage={this.props.editCategoryMessage}/> */}
            {console.log("View Categories Table")}
            {console.log(this.state.editCategoryMessage)}
            <EditCategoryForm
              rowData={this.state.rowData}
              editCategoryMessage={this.state.editCategoryMessage}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    editCategoryMessage: state.category.messages,
    categoryStatusUpdated: state.category.updated
});

export default connect(mapStateToProps)(ViewCategoriesTable);
