import React, {Component, Fragment} from 'react';
import {render} from 'react-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {connect} from "react-redux";
import {updateItem} from "../../../actions/itemsAction";
import {notification} from 'antd';
import {Button, ModalFooter} from 'mdbreact';
import './editItemForm.css';
import './sharedFormStyling.css';
import Dropzone from 'react-dropzone';
import {successNotification} from '../../microComponents/Notifications.js';

class EditItemForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rowData: this.props.rowData,
            editItemMessage: this.props.editItemMessage,
            imageThumbnail: this.props.rowData.itemImage,
            confirmDialog: false,
        }

        this.props.values.idItem = this.state.rowData.idItem
        this.props.values.itemName = this.state.rowData.itemName
        this.props.values.itemDescription = this.state.rowData.itemDescription
        this.props.values.itemPrice = this.state.rowData.itemPrice
        this.props.values.itemImage = this.state.rowData.itemImage
        this.props.values.itemSalePercentage = this.state.rowData.itemSalePercentage
        this.props.values.itemStockLevel = this.state.rowData.itemStockLevel

        this.onPreviewDrop = this.onPreviewDrop.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    confirmDelete() {
        this.setState({confirmDialog: true});
        console.log("CONFIRM ITEM DELETE");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rowData !== this.props.rowData) {
            this.setState({rowData: this.props.rowData})
        }
        if(prevProps.items !== this.props.items && !this.props.removed)
        {
            successNotification("Item updated successfully!");
        }
        if (prevProps.items !== this.props.items && this.props.removed) {
            successNotification(this.props.updates);
        }
    }

    onPreviewDrop = (acceptedFiles) => {
        acceptedFiles.map((file) => (
            this.setState({
                imageThumbnail: file.preview,
            }),
                this.props.values.file = file
        ))
    };

    render() {
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            currentData
        } = this.props;

        const dropZoneStyle = {
            padding: '16px 50px 16px',
            width: '100%',
            border: '1px solid #d2d8d8',
            borderRadius: '0.25em'
        }

        return (
            <div>
                <h1 className="text-center has-padding title">Edit Item</h1>

                <div class="text-center">
                    <img src={this.state.imageThumbnail} className="img-fluid imageThumbnail"/>
                </div>

                <Form>
                    <form className="form">

                        {/* Display Error/Success Message */}
                        <div
                            className={(this.props.editItemMessage != "") ? (this.props.itemStatusUpdated == true ? "alert alert-success" : "alert alert-danger") : null}>{this.props.editItemMessage}</div>

                        {/* Item Image */}
                        <p className="fieldset">
                            <label>Image Upload</label>
                            <Dropzone accept="image/*" onDrop={this.onPreviewDrop} style={dropZoneStyle}>
                                Click OR Drag and Drop a new image here!
                            </Dropzone>
                        </p>

                        {/* Name Field */}
                        <p className="fieldset">
                            <label htmlFor="itemName">Name</label>
                            <Field className="full-width has-padding has-border" name="itemName" type="text"
                                   placeholder="Item Name" value={values.itemName} onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {touched.itemName && errors.itemName &&
                            <span><p className="text-danger">{errors.itemName}</p></span>}
                        </p>

                        {/* Description Field */}
                        <p className="fieldset">
                            <label htmlFor="itemDescription">Description</label>
                            <Field className="full-width has-padding has-border" name="itemDescription"
                                   component="textarea" placeholder="Item Description" value={values.itemDescription}
                                   onChange={handleChange} onBlur={handleBlur}/>
                            {touched.itemDescription && errors.itemDescription &&
                            <span><p className="text-danger">{errors.itemDescription}</p></span>}
                        </p>

                        {/* Item Price Field */}
                        <p className="fieldset">
                            <label htmlFor="itemPrice">Price</label>
                            <Field className="full-width has-padding has-border" name="itemPrice" type="text"
                                   placeholder="Example: 12.34" value={values.itemPrice} onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {touched.itemPrice && errors.itemPrice &&
                            <span><p className="text-danger">{errors.itemPrice}</p></span>}
                        </p>

                        {/* Sale Percentage */}
                        <p className="fieldset">
                            <label htmlFor="itemSalePercentage">Sale Percentage</label>
                            <Field className="full-width has-padding has-border" name="itemSalePercentage" type="text"
                                   placeholder="Example: 50" value={values.itemSalePercentage} onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {touched.itemSalePercentage && errors.itemSalePercentage &&
                            <span><p className="text-danger">{errors.itemSalePercentage}</p></span>}
                        </p>

                        {/* Stock Level */}
                        <p className="fieldset">
                            <label htmlFor="itemStockLevel">Stock Level</label>
                            <Field className="full-width has-padding has-border" name="itemStockLevel" type="text"
                                   placeholder="Example: 10" value={values.itemStockLevel} onChange={handleChange}
                                   onBlur={handleBlur}/>
                            {touched.itemStockLevel && errors.itemStockLevel &&
                            <span><p className="text-danger">{errors.itemStockLevel}</p></span>}
                        </p>

                        <ModalFooter className="justify-content-center">
                            <Button size="md" color="success" type="submit">Save Changes</Button>
                            <Button size="md" color="danger" type="button"
                                    onClick={() => this.props.remove(this.state.rowData.idItem)}>Remove
                                Item</Button>
                        </ModalFooter>
                    </form>
                </Form>
            </div>
        )
    }
};

const FormikApp = withFormik({
    mapPropsToValues: ({itemName, itemDescription, itemPrice, itemSalePercentage, itemStockLevel}) => ({
        itemName: itemName || '',
        itemDescription: itemDescription || '',
        itemPrice: itemPrice || '',
        itemSalePercentage: itemSalePercentage || '',
        itemStockLevel: itemStockLevel || '',
    }),
    validationSchema: Yup.object().shape({
        itemName: Yup.string().matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, "Item names may only contain letters and spaces!").required('A name is required for the item!'),
        itemDescription: Yup.string().required('A description is required for the item!'),
        itemPrice: Yup.string().matches(/^\d+\.?\d{1,2}$/, "Item prices may only be a whole or decimal number!").required('A price is required for the item!'),
        itemSalePercentage: Yup.string().matches(/^[0-9]$|^[1-9][0-9]$|^(100)$/, "Sale percentages must be a whole number that is less than 100!").required('A sale percentage is required for the item!'),
        itemStockLevel: Yup.string().matches(/^[0-9]+$/, "The stock level must be a whole number!").required('A stock level is required for the item!')
    }),
    handleSubmit(values, {props, setSubmitting}) {
        const itemData = {
            idItem: props.rowData.idItem,
            itemName: values.itemName,
            itemDescription: values.itemDescription,
            itemImage: values.itemImage,
            itemPrice: values.itemPrice,
            itemSalePercentage: values.itemSalePercentage,
            itemStockLevel: values.itemStockLevel
        };

        let formData = new FormData();
        formData.append('item', JSON.stringify(itemData))
        formData.append('file', values.file)

        props.dispatch(updateItem(formData))

        setSubmitting(false);
    }
})(EditItemForm)

const mapStateToProps = (state) => ({
    editItemMessage: state.items.updateItemMessages,
    itemStatusUpdated: state.items.updated,
    items: state.items.items,
    removed: state.items.removed,
    updates: state.items.updates,
});

export default connect(mapStateToProps)(FormikApp)
