import React, {Component} from 'react';
import User from '../../../images/admin_images/users/1.jpg'
import Icon from '@mdi/react';
import {mdiViewDashboard, mdiAccountNetwork, mdiBorderAll, mdiPlusBox} from '@mdi/js';
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
        this.props.dispatch(fetchCategories());
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
                            <li>
                                <div className="user-profile d-flex no-block dropdown m-t-20">
                                    <div className="user-pic"><img src={User} alt="users"
                                                                   className="rounded-circle" width="40"/></div>
                                    <div className="user-content hide-menu m-l-10">
                                        <a href="javascript:void(0)" className="" id="Userdd" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <h5 className="m-b-0 user-name font-medium">Steave Jobs</h5>
                                            <span className="op-5 user-email">varun@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="p-15 m-t-10"><a onClick={this.toggle} href="javascript:void(0)"
                                                           className="btn btn-block create-btn text-white no-block d-flex align-items-center">
                                <Icon path={mdiPlusBox} size={1.5}/>
                                <span className="hide-menu m-l-5">Create New</span>
                            </a></li>
                            <li className="sidebar-item"><a onClick={this.toggleCategoryModal} href="javascript:void(0)"
                                                            className="sidebar-link waves-effect waves-dark sidebar-link">
                                <Icon path={mdiPlusBox} size={1.5}/>
                                <span className="hide-menu m-l-5">Add New Category</span>
                            </a></li>
                            <li className="sidebar-item"><
                                a onClick={this.toggleItemModal} href="javascript:void(0)"
                                  className="sidebar-link waves-effect waves-dark sidebar-link">
                                <Icon path={mdiPlusBox} size={1.5}/>
                                <span className="hide-menu m-l-5">Add New Item</span>
                            </a></li>
                            <li className="sidebar-item"><Link to="/"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiViewDashboard} size={1.5}/><span
                                className="hide-menu">Dashboard</span></a></Link></li>
                            <li className="sidebar-item"><Link to="/profile"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiAccountNetwork} size={1.5}/><span
                                className="hide-menu">Profile</span></a></Link></li>
                            <li className="sidebar-item"><Link
                                to={{pathname: "/viewcategories", state: this.state.categories}}><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiBorderAll} size={1.5}/><span
                                className="hide-menu">View Categories</span></a></Link></li>
                            <li className="sidebar-item"><Link to="/viewitems"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiBorderAll} size={1.5}/><span
                                className="hide-menu">View Items</span></a></Link></li>
                        </ul>

                    </nav>
                </div>

                <Modal isOpen={this.state.itemModal} toggle={this.toggleItemModal} className="cascading-modal">
                    {console.log('SIDEBAR CATEGORIES: ' + this.state.categories)}
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
    categories: state.category.categories,
    addCategoryMessage: state.category.messages,
    categoryStatusAdded: state.category.added
});

export default connect(mapStateToProps)(sidebar);