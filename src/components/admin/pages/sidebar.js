import React, {Component} from 'react';
import Icon from '@mdi/react';
import {mdiAccountCircle, mdiAccountMultiple, mdiViewGrid,
    mdiViewList, mdiFolderPlus, mdiLibraryPlus} from '@mdi/js';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import {Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';
import AddCategoryForm from '../forms/addCategoryForm.js';
import AddItemForm from '../forms/addItemForm.js';
import {fetchCategories} from "../../../actions/categoriesAction";

class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemModal: false,
            categoryModal: false,
            categories: this.props.categories
        };
        this.toggleCategoryModal = this.toggleCategoryModal.bind(this);
        this.toggleItemModal = this.toggleItemModal.bind(this);

    }

    toggleCategoryModal() {
        this.setState({
            categoryModal: !this.state.categoryModal
        });
    }

    toggleItemModal() {
        this.setState({
            itemModal: !this.state.itemModal
        });
    }

    componentDidMount() {
      this.props.dispatch(fetchCategories());
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categories !== this.props.categories) {
            this.setState({categories: this.props.categories})
        }
    }

    render() {
        return (
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">

                            {/*View Profile*/}
                            <li className="sidebar-item">
                                <Link to="/profile">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                        <Icon className="mdi sidebar-item-icon mdi-light" path={mdiAccountCircle} size={1.5}/>
                                        <span className="sidebar-heading hide-menu">Admin Profile</span>
                                    </a>
                                </Link>
                            </li>

                            {/*Toggle Add Category*/}
                            <li className="sidebar-item">
                                <a onClick={this.toggleCategoryModal} href="javascript:void(0)"
                                   className="sidebar-link waves-effect waves-dark sidebar-link">
                                    <Icon path={mdiFolderPlus} size={1.5}/>
                                    <span className="sidebar-heading hide-menu m-l-5">Add New Category</span>
                                </a>
                            </li>

                            {/*Toggle Add Item*/}
                            <li className="sidebar-item">
                                <a onClick={this.toggleItemModal} href="javascript:void(0)"
                                  className="sidebar-link waves-effect waves-dark sidebar-link">
                                    <Icon path={mdiLibraryPlus} size={1.5}/>
                                    <span className="sidebar-heading hide-menu m-l-5">Add New Item</span>
                                </a>
                            </li>

                            {/*View Categories*/}
                            <li className="sidebar-item">
                                <Link to={{pathname: "/viewcategories", state: this.state.categories}}>
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                        <Icon path={mdiViewList} size={1.5}/>
                                        <span className="sidebar-heading hide-menu">View Categories</span>
                                    </a>
                                </Link>
                            </li>

                            {/*View Items*/}
                            <li className="sidebar-item">
                                <Link to="/viewitems">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                        <Icon path={mdiViewGrid} size={1.5}/>
                                        <span className="sidebar-heading hide-menu">View Items</span>
                                    </a>
                                </Link>
                            </li>

                            {/*View Accounts*/}
                            <li className="sidebar-item">
                                <Link to="/viewaccounts">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                        <Icon path={mdiAccountMultiple} size={1.5}/>
                                        <span className="sidebar-heading hide-menu">View Accounts</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </div>
                <Modal isOpen={this.state.itemModal} toggle={this.toggleItemModal} className="cascading-modal">
                    <AddItemForm categories={this.state.categories} toggle={this.toggleItemModal}/>
                </Modal>
                <Modal isOpen={this.state.categoryModal} toggle={this.toggleCategoryModal} className="cascading-modal">
                    <AddCategoryForm />
                </Modal>
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories
});

export default connect(mapStateToProps)(sidebar);
