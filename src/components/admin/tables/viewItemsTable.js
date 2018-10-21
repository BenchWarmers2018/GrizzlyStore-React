import React, {Component} from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';
import EditItemForm from "../forms/editItemForm.js";
import {successNotification} from '../../microComponents/Notifications.js';
import {deleteItem} from "../../../actions/itemsAction";
import {confirmAlert} from 'react-confirm-alert';
import {connect} from "react-redux";
import {deleteCategory} from "../../../actions/categoriesAction";
import {DELETE_ITEM} from "../../../CONSTANTS";

class ViewItemsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: props.itemData,
            rowData: [],
        };
        this.toggle = this.toggle.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleDelete(row) {
        confirmAlert({
            title: row.original.categoryName,
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.removeItem(row)
                },
                {
                    label: 'No',
                }
            ],
        })
    }

    removeItem(row) {
        console.log("ITEM ID: " + row.original.idItem);
        this.props.dispatch(deleteItem(row.original));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemData !== this.props.itemData) {
            this.setState({data: this.props.itemData})
        }
        if (prevProps.items !== this.props.items && this.props.removed) {
            successNotification(this.props.updates);
        }
    }

    render() {
        const {data} = this.state;
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
                                    width: 65
                                },
                                {
                                    Header: "Name",
                                    accessor: "itemName",
                                    width: 350
                                },
                                {
                                    Header: "Description",
                                    accessor: "itemDescription",
                                    width: 250
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
                                    width: 90
                                },
                                {
                                    Header: 'Edit',
                                    Cell: (
                                        <div className="text-center">
                                            <Button onClick={this.toggle} color="info" size="sm"><Fa
                                                icon="pencil"
                                                size="2x"/></Button>
                                        </div>
                                    ),
                                    width: 100
                                },
                                {
                                    Header: 'Delete',
                                    Cell: row => (
                                        <div className="text-center">
                                            <Button onClick={() => this.handleDelete(row)} color="danger" size="sm"><Fa
                                                icon="trash" size="2x"/></Button>
                                        </div>
                                    ),
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
                                if (typeof rowInfo !== "undefined") {
                                    this.state.rowData = rowInfo.original;
                                    //this.toggle();
                                }
                            }
                        };
                    }}
                />

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                    <EditItemForm
                        rowData={this.state.rowData}
                        addItem={this.addItem}/>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.items.error,
        updates: state.items.updates,
        items: state.items.items,
        removed: state.items.removed,
    }
};

export default connect(mapStateToProps)(ViewItemsTable);
