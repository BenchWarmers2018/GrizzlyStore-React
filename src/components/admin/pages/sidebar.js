import React, {Component} from 'react';
import User from '../../../images/admin_images/users/1.jpg'
import Dropzone from 'react-dropzone';
import Icon from '@mdi/react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import {mdiViewDashboard, mdiAccountNetwork, mdiBorderAll, mdiPlusBox} from '@mdi/js';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';


class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            uploadedFile: ''
        };
        this.toggle = this.toggle.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            uploadedFile: ''
        });

    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {

    }

    render() {
        let dropzoneRef;
        return (
            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li>
                                <div className="user-profile d-flex no-block dropdown m-t-20">
                                    <div className="user-pic">
                                        <img src={User} alt="users"
                                             className="rounded-circle"
                                             width="40"/></div>
                                    <div className="user-content hide-menu m-l-10">
                                        <a href="javascript:void(0)" className="" id="Userdd" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <h5 className="m-b-0 user-name font-medium">Steave Jobs</h5>
                                            <span className="op-5 user-email">varun@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="p-15 m-t-10">
                                <a onClick={this.toggle} href="javascript:void(0)"
                                   className="btn btn-block create-btn text-white no-block d-flex align-items-center">
                                    <Icon path={mdiPlusBox} size={1.5}/>
                                    <span className="hide-menu m-l-5">Create New</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                       aria-expanded="false">
                                        <Icon path={mdiViewDashboard} size={1.5}/>
                                        <span className="hide-menu">Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/profile">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                       aria-expanded="false">
                                        <Icon path={mdiAccountNetwork} size={1.5}/>
                                        <span className="hide-menu">Profile</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                   aria-expanded="false">
                                    <Icon path={mdiBorderAll} size={1.5}/>
                                    <span className="hide-menu">Table</span>
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>

                <Container>
                    <Row>
                        <Col md="6">
                            <form>
                                <Modal isOpen={this.state.modal} className="cascading-modal">
                                    <div className="modal-header primary-color white-text">
                                        <h4 className="title">
                                            <Fa className="fa fa-pencil"/> Add new ITEM</h4>
                                        <button type="button" className="close" onClick={this.toggle}>
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <ModalBody className="grey-text">
                                        <div className="md-form mb-5">
                                            <i className="fa fa-film prefix grey-text"/>
                                            <input type="email" id="defaultForm-email" name="itemName" className="form-control validate"
                                            placeholder="Name" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-info prefix grey-text"/>
                                            <input type="email" id="defaultForm-email"
                                                  name="itemDescription" className="form-control validate"
                                            placeholder="Description" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-dollar prefix grey-text"/>
                                            <input type="number" id="defaultForm-email" name="itemPrice" className="form-control validate"
                                            placeholder="Price" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-percent prefix grey-text"/>
                                            <input type="number" id="defaultForm-email" name="itemSales" className="form-control validate"
                                            placeholder="Sales Percentage" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-envelope prefix grey-text"/>
                                            <input type="email" id="defaultForm-email" name="itemCategory" className="form-control validate"
                                                   placeholder="Category" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <i className="fa fa-hashtag prefix grey-text"/>
                                            <input type="number" id="defaultForm-email" name="itemStock" className="form-control validate"
                                                   placeholder="Stock" required/>
                                            <label data-error="wrong" data-success="right" htmlFor="defaultForm-email"/>
                                        </div>
                                        <div className="md-form mb-5">
                                            <Dropzone name="itemImage" className="dropzone-area" ref={(node) => {
                                                dropzoneRef = node;
                                            }} multiple={false} accept="image/*" onDrop={this.onImageDrop} required>
                                                <p className="content">Drag and Drop image here</p>
                                            </Dropzone>
                                        </div>
                                        <br/>
                                        <div className="text-center mb-3 col-md-12">
                                            <Button onClick={() => {
                                                dropzoneRef.open()
                                            }}>
                                                Click to Add Image
                                            </Button>
                                        </div>
                                        <div>
                                            <p>{this.state.uploadedFile.name}</p>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <div className="text-center mb-3 col-md-12">
                                            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                                            <Button color="primary">Create Item</Button>
                                        </div>
                                    </ModalFooter>
                                </Modal>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </aside>
        );
    }
}

export default sidebar;