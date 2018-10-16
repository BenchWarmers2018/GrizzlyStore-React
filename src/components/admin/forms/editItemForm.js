import React from 'react';
import { render } from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from "react-redux";
import { updateItem } from "../../../actions/itemsAction";
import { notification } from 'antd';
import { Button, ModalFooter } from 'mdbreact';
import './editItemForm.css';
import Dropzone from 'react-dropzone';

class EditItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          rowData: this.props.rowData,
          editItemMessage: this.props.editItemMessage
        };

        this.props.values.itemName = this.state.rowData.itemName
        this.props.values.itemDescription = this.state.rowData.itemDescription
        this.props.values.itemPrice = this.state.rowData.itemPrice
        this.props.values.itemImage = this.state.rowData.itemImage
        this.props.values.itemSalePercentage = this.state.rowData.itemSalePercentage
        this.props.values.itemStockLevel = this.state.rowData.itemStockLevel
    }

    componentDidUpdate(prevProps) {
      if(prevProps.rowData !== this.props.rowData)
      {
        this.setState({rowData: this.props.rowData})
      }

      if(prevProps.items != this.props.items)
      {
        notification.success({
            message: 'Item Edited Successfully!'
        });
      }
    }

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

      return(
        <Form>
          <h1 className="text-center has-padding">Edit Item</h1>
          <form className = "form">

            {/* Display Error/Success Message */}
            <div className={(this.props.editItemMessage != "") ? (this.props.itemStatusUpdated == true ? "alert alert-success" : "alert alert-danger") : null}>{this.props.editItemMessage}</div>

            {/* Item Image */}
            <p className="fieldset">
              <div class="text-center">
                <img src={this.props.rowData.itemImage} className="img-fluid imageThumbail"/>
              </div>
              <label htmlFor="itemImage">Image</label>
              <Field className="full-width has-padding has-border" name="itemImage" type="text" placeholder="Item Image" value={values.itemImage} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemImage && errors.itemImage && <span><p className="text-danger">{errors.itemImage}</p></span>}
            </p>

            {/* Name Field */}
            <p className="fieldset">
              <label htmlFor="itemName">Name</label>
              <Field className="full-width has-padding has-border" name="itemName" type="text" placeholder="Item Name" value={values.itemName} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemName && errors.itemName && <span><p className="text-danger">{errors.itemName}</p></span>}
            </p>

            {/* Description Field */}
            <p className="fieldset">
              <label htmlFor="itemDescription">Description</label>
              <Field className="full-width has-padding has-border" name="itemDescription" component="textarea" placeholder="Item Description" value={values.itemDescription} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemDescription && errors.itemDescription && <span><p className="text-danger">{errors.itemDescription}</p></span>}
            </p>

            {/* Item Price Field */}
            <p className="fieldset">
              <label htmlFor="itemPrice">Price</label>
              <Field className="full-width has-padding has-border" name="itemPrice" type="text" placeholder="Example: 12.34" value={values.itemPrice} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemPrice && errors.itemPrice && <span><p className="text-danger">{errors.itemPrice}</p></span>}
            </p>

            {/* Sale Percentage */}
            <p className="fieldset">
              <label htmlFor="itemSalePercentage">Sale Percentage</label>
              <Field className="full-width has-padding has-border" name="itemSalePercentage" type="text" placeholder="Example: 50" value={values.itemSalePercentage} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemSalePercentage && errors.itemSalePercentage && <span><p className="text-danger">{errors.itemSalePercentage}</p></span>}
            </p>

            {/* Stock Level */}
            <p className="fieldset">
              <label htmlFor="itemStockLevel">Stock Level</label>
              <Field className="full-width has-padding has-border" name="itemStockLevel" type="text" placeholder="Example: 10" value={values.itemStockLevel} onChange={handleChange} onBlur={handleBlur}/>
              {touched.itemStockLevel && errors.itemStockLevel && <span><p className="text-danger">{errors.itemStockLevel}</p></span>}
            </p>

            <ModalFooter className="justify-content-center">
                <Button size="lg" color="danger" type="submit">Save Changes</Button>
            </ModalFooter>
          </form>
        </Form>
      )
    }
};

const FormikApp = withFormik({
  mapPropsToValues: ({ itemName, itemDescription, itemImage, itemPrice, itemSalePercentage, itemStockLevel }) => ({
    itemName: itemName || '',
    itemDescription: itemDescription || '',
    itemImage: itemImage || '',
    itemPrice: itemPrice || '',
    itemSalePercentage: itemSalePercentage || '',
    itemStockLevel: itemStockLevel || '',
  }),
  validationSchema: Yup.object().shape({
    itemName: Yup.string().matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, "Item names may only contain letters and spaces!").required('A name is required for the item!'),
    itemDescription: Yup.string().required('A description is required for the item!'),
    itemImage: Yup.string().required('An image is requuired for the item!'),
    itemPrice: Yup.string().matches(/^\d+\.?\d{1,2}$/, "Item prices may only be a whole or decimal number!").required('A price is required for the item!'),
    itemSalePercentage: Yup.string().matches(/^[0-9]$|^[1-9][0-9]$|^(100)$/, "Sale percentages must be a whole number that is less than 100!").required('A sale percentage is required for the item!'),
    itemStockLevel: Yup.string().matches(/^[0-9]+$/, "The stock level must be a whole number!").required('A stock level is required for the item!')
  }),
  handleSubmit(values, { props, setSubmitting }) {
    const itemData = {idItem: props.rowData.idItem, itemName: values.itemName, itemDescription: values.itemDescription, itemImage: values.itemImage, itemPrice: values.itemPrice, itemSalePercentage: values.itemSalePercentage, itemStockLevel: values.itemStockLevel, lastModified: props.rowData.lastModified};
    props.dispatch(updateItem(itemData));
    setSubmitting(false);
  }
})(EditItemForm)

const mapStateToProps = (state) => ({
  editItemMessage: state.items.updateItemMessages,
  itemStatusUpdated: state.items.updated,
  items: state.items.items
});

export default connect(mapStateToProps)(FormikApp)
