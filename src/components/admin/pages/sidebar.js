import React, {Component} from 'react';
import User from '../../../images/admin_images/users/1.jpg'
import Icon from '@mdi/react';
import { mdiViewDashboard, mdiAccountNetwork, mdiBorderAll, mdiPlusBox } from '@mdi/js';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import AddCategoryForm from '../forms/addCategoryForm.js';


class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            categoryModal: false
        }
        this.toggle = this.toggle.bind(this);
        this.toggleCategoryModal = this.toggleCategoryModal.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleCategoryModal() {
        this.setState({
            categoryModal: !this.state.categoryModal
        });
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
                                <Icon path={mdiPlusBox} size={1.5} />
                                 <span className="hide-menu m-l-5">Create New</span>
                            </a></li>
                            <li className="sidebar-item"><a onClick={this.toggleCategoryModal} href="javascript:void(0)"
                                                           className="sidebar-link waves-effect waves-dark sidebar-link">
                                <Icon path={mdiPlusBox} size={1.5} />
                                 <span className="hide-menu m-l-5">Add New Category</span>
                            </a></li>
                            <li className="sidebar-item"><Link to="/"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiViewDashboard} size={1.5}/><span
                                className="hide-menu">Dashboard</span></a></Link></li>
                            <li className="sidebar-item"><Link to="/profile"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiAccountNetwork} size={1.5}/><span
                                className="hide-menu">Profile</span></a></Link></li>
                            <li className="sidebar-item"><a
                                className="sidebar-link waves-effect waves-dark sidebar-link"
                                aria-expanded="false"><Icon path={mdiBorderAll} size={1.5} /><span
                                className="hide-menu">Table</span></a></li>
                        </ul>

                    </nav>
                </div>



                <Container>
                    <Row>
                        <Col md="6">
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
                                <div className="modal-header primary-color white-text">
                                    <h4 className="title">
                                        <Fa className="fa fa-pencil" /> Add new ITEM</h4>
                                    <button type="button" className="close" onClick={this.toggle}>
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <ModalBody className="grey-text">
                                    <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                                    <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                    <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                                    <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                                    <Button color="primary">Save changes</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </Container>

                <Modal isOpen={this.state.categoryModal} toggle={this.toggleCategoryModal} className="cascading-modal">
                    <AddCategoryForm
                      addCategoryMessage={this.props.addCategoryMessage}
                      categoryStatusAdded={this.props.categoryStatusAdded}
                    />
                </Modal>
            </aside>
        );
    }
}

const mapStateToProps = state => ({
    categories:state.category.categories,
    addCategoryMessage: state.category.messages,
    categoryStatusAdded:state.category.added
});

export default connect(mapStateToProps)(sidebar);
