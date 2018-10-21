import React from 'react';
import {render} from 'react-dom'
import {withFormik, Formik, Field} from 'formik'
import * as Yup from 'yup';
import {connect} from "react-redux"
import {Button, Fa, Input, Modal, ModalBody, ModalFooter, Label, InputNumeric} from "mdbreact";
import Dropzone from "react-dropzone";
import {addItem} from "../../../actions/itemsAction";


class AddItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: null,
            message: "",
            type: 'GREEN' // GREEN for success message, RED for error message - After form submission
        };
    }

    onDrop(file) {
        console.log('Coming from Dropzone');
        this.setState({
            image: file[0]
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({message: this.props.updates});
            this.props.error === null ? this.setState({type: 'GREEN'}) : this.setState({type: 'RED'});
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

        console.log('CATEGORIES: ' + this.props.categories);
        const categories = this.props.categories;
        return (
            <div className="item-submission imageName">
                <div className="modal-header primary-color white-text">
                    <h4 className="title" style={{'color': 'white'}}>
                        <Fa className="fa fa-pencil"/> Add new ITEM</h4>
                    <button type="button" className="close" onClick={this.props.toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
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
                        console.log(values);
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
                        <form onSubmit={handleSubmit}>
                            <ModalBody className="grey-text" id="item-modal">
                                <Input size="sm" label="Name" icon="film" group type="text" validate
                                       error="wrong" success="right" name="itemName" onChange={handleChange}
                                       onBlur={handleBlur}/>
                                {touched.itemName && errors.itemName &&
                                <span><p className="text-danger">{errors.itemName}</p></span>}
                                <Input size="sm" label="Description" icon="edit" group type="textarea" validate
                                       error="wrong" success="right" name="itemDesc" onChange={handleChange}
                                       onBlur={handleBlur}/>
                                {touched.itemDesc && errors.itemDesc &&
                                <span><p className="text-danger">{errors.itemDesc}</p></span>}
                                <Input size="sm" min={0} label="Stock" icon="cubes" group type="number" validate
                                       error="wrong"
                                       success="right" name="itemStock" onChange={handleChange}
                                       onBlur={handleBlur}/>
                                {touched.itemStock && errors.itemStock &&
                                <span><p className="text-danger">{errors.itemStock}</p></span>}
                                <Input size="sm" label="Sales Percentage" icon="line-chart" group type="number" validate
                                       error="wrong" className="no-spinner"
                                       success="right" name="itemSales" onChange={handleChange}
                                       onBlur={handleBlur}/>
                                {touched.itemSales && errors.itemSales &&
                                <span><p className="text-danger">{errors.itemSales}</p></span>}
                                <Input size="sm" type="text" rows="2" label="Price" icon="dollar" name="itemPrice"
                                       onChange={handleChange}
                                       onBlur={handleBlur}/>
                                {touched.itemPrice && errors.itemPrice &&
                                <span><p className="text-danger">{errors.itemPrice}</p></span>}
                                <div>
                                    <span className="fa fa-language" style={{'fontSize': '20px'}}/>
                                    <span style={{'fontSize': '15px', 'color': '#757575'}}> Category Type</span>
                                    <select className="form-control form-control-line"
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
                                <span className="fa fa-photo" style={{'fontSize': '20px', 'paddingTop': '20px'}}/>
                                <span style={{'fontSize': '15px', 'color': '#757575'}}> Image</span>
                                <Dropzone accept="image/*" id='itemImage' name='itemImage' label='Image Upload'
                                          style={dropZoneStyle}
                                          className="dropzone col-md-12" onDrop={this.onDrop}>
                                    <p className="textDrop">
                                        {this.state.image === null ?
                                            <b>Upload new Item Image</b> : <b>{this.state.image.name}</b>}
                                    </p>
                                </Dropzone>
                                {touched.itemImage && errors.itemImage &&
                                <span><p className="text-danger">{errors.itemImage}</p></span>}
                            </ModalBody>
                            <ModalFooter id="footer" className='imageName'>
                                <Button type="submit" value="addItem" id="button" color="primary">ADD ITEM</Button>
                                <br/>
                                {this.state.type === 'GREEN' ?
                                    <span><p className="text-success">{this.state.message}</p></span>
                                    :
                                    <span><p className="text-danger">{this.state.message}</p></span>}
                            </ModalFooter>
                        </form>
                    )}>
                </Formik>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        error: state.items.error,
        updates: state.items.updates,
    }
};

export default connect(mapStateToProps)(AddItemForm)
