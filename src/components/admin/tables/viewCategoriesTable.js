import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import EditCategoryForm from "../forms/editCategoryForm.js";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import {connect} from "react-redux";
import { deleteCategory } from "../../../actions/categoriesAction"
import { successNotification, errorNotification } from '../../microComponents/Notifications.js';

class ViewCategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.categoryData,
      rowData: []
    };

    this.toggle = this.toggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(row) {
      this.setState({
        modal: !this.state.modal,
        rowData: row.original
      })
  }

  handleDelete(row) {
    confirmAlert({
      title: row.original.categoryName,
      message: 'Are you sure you want to delete this category?' +
               ' This will also delete ALL items in this category too!',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(deleteCategory(row.original))
        },
        {
          label: 'No',
        }
      ],
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.categories !== this.props.categories)
    {
      this.setState({data: this.props.categories})

      if(prevProps.deletedCategory !== this.props.deletedCategory && this.props.categoryStatusDeleted)
      {
          successNotification(this.props.categorySuccessMessage);
      }
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
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
                  width: 500
                },
                {
                  Header: 'Edit',
                  Cell: row => (
                      <div className="text-center">
                          <Button onClick={() => this.handleEdit(row)} color="info" size="sm"><Fa icon="pencil" size="2x"/></Button>
                      </div>
                  ),
                  width: 100
                },
                {
                  Header: 'Delete',
                  Cell: row => (
                      <div className="text-center">
                          <Button onClick={() => this.handleDelete(row)} color="danger" size="sm"><Fa icon="trash" size="2x"/></Button>
                      </div>
                  ),
                  width: 100
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
            <EditCategoryForm
              rowData={this.state.rowData}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoryStatusDeleted: state.category.deleted,
  categories: state.category.categories,
  categorySuccessMessage: state.category.deleteSuccessMessage,
  deletedCategory: state.category.deletedCategory
});

export default connect(mapStateToProps)(ViewCategoriesTable);
