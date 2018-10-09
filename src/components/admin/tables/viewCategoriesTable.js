import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ViewCategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.categoryData,
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
  }

  render() {
    const { data } = this.state;
    console.log(data);
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
                this.state.rowData = rowInfo.original;
                this.toggle();
              }
            };
          }}
        />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal" onRequestClose={this.toggle}>
            <editCategory rowData={this.state.rowData}/>
        </Modal>
      </div>
    );
  }
}

export default ViewCategoriesTable;
