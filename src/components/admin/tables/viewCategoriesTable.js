import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class ViewCategoriesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.categoryData
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.categoryData !== this.props.categoryData)
    {
      this.setState({data: this.props.categoryData})
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
        />
      </div>
    );
  }
}

export default ViewCategoriesTable;