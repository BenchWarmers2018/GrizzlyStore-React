import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile, submitAddress} from "../../../actions/profileActions";
import {Formik, Field} from 'formik'
import * as Yup from 'yup';

class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getPostValues = this.getPostValues.bind(this);
        this.state = {
            success: "",
            empty: false,
            unitNo: '',
            postcode: '',
            street: '',
            streetNo: '',
            city: '',
            state: '',
            country: '',
            streetType: ''
        };
        const address = this.props.data;
        this.setState(
            {
                unitNo: address.addressUnitNo,
                postcode: address.addressPostcode,
                street: address.addressStreet,
                streetNo: address.addressStreetNo,
                streetType: address.addressStreetType,
                country: address.addressCountry,
                city: address.addressCity,
                state: address.addressState,
            });
    }

//     componentDidMount() {
//         this.props.fetchProfile();
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.profile !== this.props.profile) {

//         }
//     }

    handleSubmit(values, formikBag) {
        if (!((values.unitNo.toString().length === 0) && (values.city.length === 0) && (values.postcode.toString().length === 0)
            && (values.country !== '--') && (values.state !== '--') && (values.streetType !== '--') &&
            (values.street.length === 0) && (values.streetNo.toString().length === 0))) {
            const {submitAddress} = this.props;
            console.log(values);
            formikBag.setSubmitting(false);
            const submissionValues = this.getPostValues(values);
            submitAddress(submissionValues);
            console.log(this.props.updates + ' UPDATES COMING!');
            this.props.fetchProfile();
            this.setState({success: this.props.updates}); // Get update message back from Spring
            console.log("SUCCESS " + this.state.success);
        }

        else {
            console.log('Cannot submit empty form. Please fill one field');
            this.setState({empty: true});
        }
    }

    getPostValues(values) {
        var data = {
            unitNo: '',
            postcode: '',
            street: '',
            streetNo: '',
            city: '',
            state: '',
            country: '',
            streetType: ''
        };
        values.city.length === 0 ? data.city = this.state.city : data.city = values.city;
        values.country.length === 0 ? data.country = this.state.country : data.country = values.country;
        values.state === '--' ? data.state = this.state.state : data.country = values.state;
        values.street.length === 0 ? data.street = this.state.street : data.street = values.street;
        values.streetNo.toString().length === 0 ? data.streetNo = this.state.streetNo : data.streetNo = values.streetNo;
        values.streetType.length === 0 ? data.streetType = this.state.streetType : data.streetType = values.streetType;
        values.postcode.toString().length === 0 ? data.postcode = this.state.postcode : data.postcode = values.postcode;
        values.unitNo.toString().length === 0 ? data.unitNo = this.state.unitNo : data.unitNo = values.unitNo;
        return data;
    }

    render() {
        const address = this.props.data;

        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Edit
                    Address</h4>
                <br/>
                <Formik initialValues={{
                    unitNo: "", streetNo: "", street: "", streetType: "",
                    city: "", postcode: "", state: "", country: "Australia"
                }}
                        validate={(values) => {
                            console.log(values);
                            let errors = {};
                            if (values.postcode.toString().length > 0 && values.postcode.toString().length < 4)
                                errors.postcode = "Postcode should be 4 digits long";
                            if (values.street.length > 0 && values.street.length > 256)
                                errors.street = "Unit No cannot exceed 256 characters";
                            if (values.streetNo.length > 0 && values.streetNo.length > 256)
                                errors.streetNo = "Unit No cannot exceed 256 characters";
                            if (values.streetType.length > 0 && values.streetType.length > 256)
                                errors.streetType = "Unit No cannot exceed 256 characters";
                            if (values.state.length > 3)
                                errors.state = "State cannot be more than 3 characters long";
                            if (values.city.length > 0 && values.city.length > 50)
                                errors.city = "City cannot exceed 50 characters";
                            if (values.country.length > 0 && values.country.length > 50)
                                errors.country = "Country cannot exceed 50 characters";
                            if (values.unitNo.length > 0 && values.unitNo.length > 256)
                                errors.unitNo = "Unit No cannot exceed 256 characters";
                            // VALIDATION
                            console.log('ERRORS HERE: ' + Object.keys(errors).length);
                            return errors;
                        }}
                        onSubmit={this.handleSubmit}
                        render={({
                                     touched,
                                     errors,
                                     values,
                                     handleChange,
                                     handleBlur,
                                     handleSubmit
                                 }) => (
                            <form className="form-horizontal form-material" onSubmit={handleSubmit}>
                                <div className=" form-group form-group-address label-address-unitno">
                                    <label className="col-md-12 text-muted label-padding-left">UNIT NUMBER
                                        <small> (optional)</small>
                                    </label>
                                    <div className="col-md-12">
                                        <Field type="number" name="unitNo"
                                               placeholder={address.addressUnitNo}
                                               className="form-control form-control-line"
                                               onChange={handleChange}
                                               onBlur={handleBlur}/>
                                        {touched.unitNo && errors.unitNo &&
                                        <span className="text-danger">{errors.unitNo}</span>}
                                    </div>
                                </div>
                                <div className=" form-group  form-group-address label-address-streetno">
                                    <label className="col-md-12 text-muted label-padding-left">STREET NUMBER</label>
                                    <div className="col-md-12">
                                        <Field type="number" name="streetNo"
                                               placeholder={address.addressStreetNo}
                                               className="form-control form-control-line"
                                               onChange={handleChange}
                                               onBlur={handleBlur}/>
                                        {touched.streetNo && errors.streetNo &&
                                        <span className="text-danger">{errors.streetNo}</span>}
                                    </div>
                                </div>
                                <div className="form-group form-group-address">
                                    <label className="col-md-12 text-muted label-padding-left">STREET NAME</label>
                                    <div className="col-md-12">
                                        <Field type="text" name="street"
                                               placeholder={address.addressStreet}
                                               className="form-control form-control-line"
                                               onChange={handleChange}
                                               onBlur={handleBlur}/>
                                        {touched.street && errors.street &&
                                        <span className="text-danger">{errors.street}</span>}
                                    </div>
                                </div>

                                <div className="form-group form-group-address">
                                    <label className="col-sm-12 text-muted label-padding-left">STREET TYPE</label>
                                    <div className="col-sm-12">
                                        <select className="form-control form-control-line"
                                                value={values.streetType} name="streetType"
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                            <option value="--" selected="selected">--</option>
                                            <option value="Ally">Ally</option>
                                            <option value="Arc">Arc</option>
                                            <option value="Bvd">Bvd</option>
                                            <option value="Bypa">Bypa</option>
                                            <option value="Cct">Cct</option>
                                            <option value="Cl">Cl</option>
                                            <option value="Crn">Crn</option>
                                            <option value="Ct">Ct</option>
                                            <option value="Cres">Cres</option>
                                            <option value="Cds">Cds</option>
                                            <option value="Dr">Dr</option>
                                            <option value="Esp">Esp</option>
                                            <option value="Grn">Grn</option>
                                            <option value="Gr">Gr</option>
                                            <option value="Hwy">Hwy</option>
                                            <option value="Jnc">Jnc</option>
                                            <option value="Lane">Lane</option>
                                            <option value="Link">Link</option>
                                            <option value="Mews">Mews</option>
                                            <option value="Nook">Nook</option>
                                            <option value="Pde">Pde</option>
                                            <option value="Pl">Pl</option>
                                            <option value="Rdge">Rdge</option>
                                            <option value="Rd">Rd</option>
                                            <option value="Sq">Sq</option>
                                            <option value="St">St</option>
                                            <option value="Tce">Tce</option>
                                        </select>
                                        {touched.streetType && errors.streetType &&
                                        <span className="text-danger">{errors.streetType}</span>}
                                    </div>
                                </div>


                                <div className="form-group form-group-address">
                                    <label className="col-sm-12 text-muted label-padding-left">CITY</label>
                                    <div className="col-sm-12">
                                        <Field type="text" name="city" placeholder={address.addressCity}
                                               className="form-control form-control-line"
                                               onChange={handleChange}
                                               onBlur={handleBlur}/>
                                        {touched.city && errors.city &&
                                        <span className="text-danger">{errors.city}</span>}
                                    </div>
                                </div>

                                <div className="form-group form-group-address">
                                    <label className="col-md-12 text-muted label-padding-left">POSTCODE</label>
                                    <div className="col-md-12">
                                        <Field type="number" name="postcode"
                                               placeholder={address.addressPostcode}
                                               className="form-control form-control-line"
                                               onChange={handleChange}
                                               onBlur={handleBlur}/>
                                        {touched.postcode && errors.postcode &&
                                        <span className="text-danger">{errors.postcode}</span>}
                                    </div>
                                </div>

                                <div className="form-group form-group-address">
                                    <label className="col-sm-12 text-muted label-padding-left">STATE</label>
                                    <div className="col-sm-12">
                                        <select name="state" className="form-control form-control-line"
                                                value={values.state}
                                                onChange={handleChange}
                                                onBlur={handleBlur}>
                                            <option value="--" selected="selected">--</option>
                                            <option value="ACT">ACT</option>
                                            <option value="NSW">NSW</option>
                                            <option value="NT">NT</option>
                                            <option value="QLD">QLD</option>
                                            <option value="SA">SA</option>
                                            <option value="TAS">TAS</option>
                                            <option value="VIC">VIC</option>
                                            <option value="WA">WA</option>
                                        </select>
                                        {touched.state && errors.state &&
                                        <span className="text-danger">{errors.state}</span>}
                                    </div>
                                </div>

                                <div className="form-group form-group-address">
                                    <label className="col-sm-12 text-muted label-padding-left">COUNTRY</label>
                                    <div className="col-sm-12">
                                        <select name="country" className="form-control form-control-line"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.country}>
                                            <option value="--" selected="selected">--</option>
                                            <option value="AU">Australia</option>
                                            <option value="Grizzly Land">Grizzly Land</option>
                                        </select>
                                        {touched.country && errors.country &&
                                        <span className="text-danger">{errors.country}</span>}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-success-muted">UPDATE ADDRESS</button>
                                    </div>
                                    {this.state.empty &&
                                    <span className="text-danger">At least one field is required for submission</span>}
                                    {Object.keys(errors).length === 0 &&
                                    <span className="text-success">{this.state.success}</span>}
                                </div>
                            </form>
                        )}
                />
            </div>

        );
    }
}

ProfileAddress.propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    submitAddress: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    updates: PropTypes.string.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profiles.profile,
    fetched: state.profiles.fetched,
    updates: state.profiles.updates,
    fetching: state.profiles.fetching,
    error: state.profiles.error
});

const mapDispatchToProps = {
    submitAddress,
    fetchProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddress);
