import React from 'react';
import {render} from 'react-dom'
import {withFormik, Formik, Field} from 'formik'
import * as Yup from 'yup';
import {connect} from "react-redux"
import {Button, Fa, Input, Modal, ModalBody, ModalFooter, Label, InputNumeric} from "mdbreact";
import Dropzone from "react-dropzone";
import {addItem} from "../../../actions/itemsAction";
import {successNotification} from '../../microComponents/Notifications.js';

class AddItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: null,
            message: "",
            addedItemMessage: ""
        };
    }

    onDrop(file) {
        this.setState({
            image: file[0]
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({message: this.props.addedItemMessage});
        }

        if (prevProps.itemAdded && (prevProps.addedItem !== this.props.addedItem) ) {
            successNotification(this.props.addedItemMessage);
        }
    }

    handleSubmit(values, formikBag) {
        this.props.dispatch(addItem(values.itemName, values.itemDesc, values.itemImage, values.itemPrice,
            values.itemStock, values.itemSales, values.itemCategory));
        formikBag.setSubmitting(false);
    }

    render() {
        const dropZoneStyle = {
            padding: '16px 50px 16px',
            width: '100%',
            textAlignVertical: 'center',
            alignItems: 'center'
        };

        const categories = this.props.categories;
        return (
            <div className="item-submission imageName">
                <Formik
                    initialValues={{
                        itemName: "",
                        itemPrice: "",
                        itemDesc: "",
                        itemImage: null,
                        itemStock: "",
                        itemSales: "",
                        itemCategory: ""
                    }}
                    validate={(values) => {
                        if (this.state.image !== null)
                            values.itemImage = this.state.image;
                        let errors = {};
                        // VALIDATION
                        if (!values.itemName.length > 0)
                            errors.itemName = 'A name is required for the item!';
                        else if (!values.itemName.match(/^[a-zA-Z]+( [a-zA-Z]+)*$/))
                            errors.itemName = "Item names must only contain letters!";
                        if (!values.itemDesc.length > 0)
                            errors.itemDesc = 'A description is required for the item!';
                        if (!values.itemPrice.length > 0)
                            errors.itemPrice = 'Item price is required!';
                        else if (!values.itemPrice.match(/^[+-]?([0-9]*[.])?[0-9]+$/))
                            errors.itemPrice = 'Price must be a numeric value';
                        if (!values.itemSales.toString().length > 0)
                            errors.itemSales = 'Item price is required!';
                        if (!values.itemStock.toString().length > 0)
                            errors.itemStock = 'Item stock level is required!';
                        if (values.itemImage === null)
                            errors.itemImage = 'An image is required for the item!';
                        if (values.itemCategory.length === 0 || values.itemCategory === '--')
                            errors.itemCategory = 'Item category is required!';
                        return errors;
                    }}
                    onSubmit={this.handleSubmit}
                    render={({
                                 touched,
                                 errors,
                                 values,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 setFieldValue
                             }) => (
                        <div>
                          {/* Display Error/Success Message */}
                          <div
                              className={(this.state.addedItemMessage != "") ? (this.props.itemAdded == true ? "alert alert-success" : "alert alert-danger") : null}>{this.state.addedItemMessage}
                          </div>

                          <h1 className="text-center has-padding title">Add Item</h1>

                          <form onSubmit={handleSubmit}>

                              <ModalBody className="grey-text" id="item-modal">

                                  {/*Name*/}
                                  <Input size="sm" label="Name" group type="text" validate
                                         error="wrong" success="right" name="itemName" onChange={handleChange}
                                         onBlur={handleBlur}/>
                                  {touched.itemName && errors.itemName &&
                                  <span><p className="text-danger">{errors.itemName}</p></span>}

                                  {/*Description*/}
                                  <Input size="sm" label="Description" group type="textarea" validate
                                         error="wrong" success="right" name="itemDesc" onChange={handleChange}
                                         onBlur={handleBlur}/>
                                  {touched.itemDesc && errors.itemDesc &&
                                  <span><p className="text-danger">{errors.itemDesc}</p></span>}

                                  {/*Stock Level*/}
                                  <Input size="sm" min={0} label="Stock" group type="number" validate
                                         error="wrong"
                                         success="right" name="itemStock" onChange={handleChange}
                                         onBlur={handleBlur}/>
                                  {touched.itemStock && errors.itemStock &&
                                  <span><p className="text-danger">{errors.itemStock}</p></span>}

                                  {/*Sales Percentage*/}
                                  <Input size="sm" label="Sales Percentage" group type="number" validate
                                         error="wrong" className="no-spinner"
                                         success="right" name="itemSales" onChange={handleChange}
                                         onBlur={handleBlur}/>
                                  {touched.itemSales && errors.itemSales &&
                                  <span><p className="text-danger">{errors.itemSales}</p></span>}

                                  {/*Price*/}
                                  <Input size="sm" type="text" rows="2" label="Price" name="itemPrice"
                                         onChange={handleChange}
                                         onBlur={handleBlur}/>
                                  {touched.itemPrice && errors.itemPrice &&
                                  <span><p className="text-danger">{errors.itemPrice}</p></span>}

                                  {/*Category*/}
                                  <div>
                                      <span style={{'fontSize': '15px', 'color': '#757575'}}> Category Type</span>
                                      <select className="form-control form-control-line md-form md-form-category"
                                              value={values.itemCategory} name="itemCategory"
                                              onChange={handleChange}
                                              onBlur={handleBlur}>
                                          <option value="--" selected="selected">--</option>
                                          {categories.map(category => <option
                                              value={category.categoryName}>{category.categoryName}</option>)}
                                      </select>
                                      {touched.itemCategory && errors.itemCategory &&
                                      <span><p className="text-danger">{errors.itemCategory}</p></span>}
                                  </div>

                                  {/*Image*/}
                                  <span style={{'fontSize': '15px', 'color': '#757575'}} className="add-item-padding md-form"> Image</span>
                                  <Dropzone accept="image/*" id='itemImage' name='itemImage' label='Image Upload'
                                            style={dropZoneStyle}
                                            className="dropzone col-md-12" onDrop={this.onDrop}>
                                      <p className="textDrop">
                                          {this.state.image === null ?
                                              <b>Click to Upload new Item Image</b> : <b>{this.state.image.name}</b>}
                                      </p>
                                  </Dropzone>
                                  {touched.itemImage && errors.itemImage &&
                                  <span><p className="text-danger">{errors.itemImage}</p></span>}

                              </ModalBody>

                              <ModalFooter id="footer" className='imageName'>
                                  <Button type="submit" value="addItem" id="button" color="primary">ADD ITEM</Button>
                              </ModalFooter>

                          </form>
                        </div>
                    )}>
                </Formik>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        error: state.items.error,
        addedItemMessage: state.items.addedItemMessage,
        itemAdded: state.items.added,
        addedItem: state.items.addedItem
    }
};

export default connect(mapStateToProps)(AddItemForm)
