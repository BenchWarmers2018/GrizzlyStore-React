import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {submitAddress} from "../../../actions/profileActions";
import {Formik, Field} from 'formik'
import Autocomplete from 'react-google-autocomplete';
import { Button, notification, Icon } from 'antd';
import {errorNotification, successNotification} from "../../microComponents/Notifications";



class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAddress: null,
        }
    }

    handleUpdate = () => {
        console.log(this.state.newAddress);
        if(this.state.newAddress !== null && typeof this.state.newAddress !== "undefined")
        {
            if(typeof this.state.newAddress.address_components !== "undefined")
            {
                const addressList = this.state.newAddress.address_components;
                const fullAddress = {
                    addressStreetNo: addressList[0].long_name,
                    addressStreet: addressList[1].long_name,
                    addressCity: addressList[2].long_name,
                    addressState: addressList[4].short_name,
                    addressCountry: addressList[5].long_name,
                    addressPostcode: addressList[6].long_name,
                }
                //Passing new address to parent component.
                this.props.onAddressChange(fullAddress);

                successNotification("Address Updated Successfully.");
            }
            else {
                errorNotification("Address Update Failed", "Please choose a valid address from the Suggestions.");
            }
        }
        else {
            errorNotification("Address Update Failed", "Please choose a valid address from the Suggestions.");
        }
        this.setState({newAddress : null});
    }

    render() {
        const address = this.props.data;

        return (
            <div style={{minHeight: "500px"}}>
                <h3 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Edit
                    Address</h3>
                <br/>
                <div className="profile-overview-field-div">
                    <label className="text-muted p-t-30 db">PRIMARY ADDRESS</label>
                    {(address !== null) ?

                        <h5 className="profile-overview-field">
                            {(address.addressUnitNo !== null) ? address.addressUnitNo+"/" : ""}
                            {address.addressStreetNo} {address.addressStreet} {address.addressStreetType}<br/>
                            {address.addressCity}, {address.addressState}<br/>
                            {address.addressCountry} {address.addressPostcode}
                        </h5>
                        :
                        <h5>None Address Found. Please add below.</h5>

                    }
                </div>


                <Autocomplete
                    className = "address-input"
                    onPlaceSelected={(place) => {
                        this.setState({newAddress : place});
                    }}
                    types={[]}
                    componentRestrictions={{country: "au"}}
                />

                <div className="col-sm-12 col-md-12 col-lg-12" style={{bottom : "10%", position: "absolute"}}>
                    <button onClick={this.handleUpdate} className="btn btn-success-muted btn-block">UPDATE ADDRESS</button>
                </div>


                {/*<Formik initialValues={{*/}
                    {/*unitNo: "", streetNo: "", street: "", streetType: "",*/}
                    {/*city: "", postcode: "", state: "", country: "Australia"*/}
                {/*}}*/}
                        {/*validate={(values) => {*/}
                            {/*console.log(values);*/}
                            {/*let errors = {};*/}
                            {/*if (values.postcode.toString().length > 0 && values.postcode.toString().length < 4)*/}
                                {/*errors.postcode = "Postcode should be 4 digits long";*/}
                            {/*if (values.street.length > 0 && values.street.length > 256)*/}
                                {/*errors.street = "Unit No cannot exceed 256 characters";*/}
                            {/*if (values.streetNo.length > 0 && values.streetNo.length > 256)*/}
                                {/*errors.streetNo = "Unit No cannot exceed 256 characters";*/}
                            {/*if (values.streetType.length > 0 && values.streetType.length > 256)*/}
                                {/*errors.streetType = "Unit No cannot exceed 256 characters";*/}
                            {/*if (values.state.length > 3)*/}
                                {/*errors.state = "State cannot be more than 3 characters long";*/}
                            {/*if (values.city.length > 0 && values.city.length > 50)*/}
                                {/*errors.city = "City cannot exceed 50 characters";*/}
                            {/*if (values.country.length > 0 && values.country.length > 50)*/}
                                {/*errors.country = "Country cannot exceed 50 characters";*/}
                            {/*if (values.unitNo.length > 0 && values.unitNo.length > 256)*/}
                                {/*errors.unitNo = "Unit No cannot exceed 256 characters";*/}
                            {/*// VALIDATION*/}
                            {/*console.log('ERRORS HERE: ' + Object.keys(errors).length);*/}
                            {/*return errors;*/}
                        {/*}}*/}
                        {/*onSubmit={this.handleSubmit}*/}
                        {/*render={({*/}
                                     {/*touched,*/}
                                     {/*errors,*/}
                                     {/*values,*/}
                                     {/*handleChange,*/}
                                     {/*handleBlur,*/}
                                     {/*handleSubmit*/}
                                 {/*}) => (*/}
                            {/*<form className="form-horizontal form-material" onSubmit={handleSubmit}>*/}
                                {/*<div className=" form-group form-group-address label-address-unitno">*/}
                                    {/*<label className="col-md-12 text-muted label-padding-left">UNIT NUMBER*/}
                                        {/*<small> (optional)</small>*/}
                                    {/*</label>*/}
                                    {/*<div className="col-md-12">*/}
                                        {/*<Field type="number" name="unitNo"*/}
                                               {/*placeholder={address.addressUnitNo}*/}
                                               {/*className="form-control form-control-line"*/}
                                               {/*onChange={handleChange}*/}
                                               {/*onBlur={handleBlur}/>*/}
                                        {/*{touched.unitNo && errors.unitNo &&*/}
                                        {/*<span className="text-danger">{errors.unitNo}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className=" form-group  form-group-address label-address-streetno">*/}
                                    {/*<label className="col-md-12 text-muted label-padding-left">STREET NUMBER</label>*/}
                                    {/*<div className="col-md-12">*/}
                                        {/*<Field type="number" name="streetNo"*/}
                                               {/*placeholder={address.addressStreetNo}*/}
                                               {/*className="form-control form-control-line"*/}
                                               {/*onChange={handleChange}*/}
                                               {/*onBlur={handleBlur}/>*/}
                                        {/*{touched.streetNo && errors.streetNo &&*/}
                                        {/*<span className="text-danger">{errors.streetNo}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-md-12 text-muted label-padding-left">STREET NAME</label>*/}
                                    {/*<div className="col-md-12">*/}
                                        {/*<Field type="text" name="street"*/}
                                               {/*placeholder={address.addressStreet}*/}
                                               {/*className="form-control form-control-line"*/}
                                               {/*onChange={handleChange}*/}
                                               {/*onBlur={handleBlur}/>*/}
                                        {/*{touched.street && errors.street &&*/}
                                        {/*<span className="text-danger">{errors.street}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-sm-12 text-muted label-padding-left">STREET TYPE</label>*/}
                                    {/*<div className="col-sm-12">*/}
                                        {/*<select className="form-control form-control-line"*/}
                                                {/*value={values.streetType} name="streetType"*/}
                                                {/*onChange={handleChange}*/}
                                                {/*onBlur={handleBlur}>*/}
                                            {/*<option value="--" selected="selected">--</option>*/}
                                            {/*<option value="Ally">Ally</option>*/}
                                            {/*<option value="Arc">Arc</option>*/}
                                            {/*<option value="Bvd">Bvd</option>*/}
                                            {/*<option value="Bypa">Bypa</option>*/}
                                            {/*<option value="Cct">Cct</option>*/}
                                            {/*<option value="Cl">Cl</option>*/}
                                            {/*<option value="Crn">Crn</option>*/}
                                            {/*<option value="Ct">Ct</option>*/}
                                            {/*<option value="Cres">Cres</option>*/}
                                            {/*<option value="Cds">Cds</option>*/}
                                            {/*<option value="Dr">Dr</option>*/}
                                            {/*<option value="Esp">Esp</option>*/}
                                            {/*<option value="Grn">Grn</option>*/}
                                            {/*<option value="Gr">Gr</option>*/}
                                            {/*<option value="Hwy">Hwy</option>*/}
                                            {/*<option value="Jnc">Jnc</option>*/}
                                            {/*<option value="Lane">Lane</option>*/}
                                            {/*<option value="Link">Link</option>*/}
                                            {/*<option value="Mews">Mews</option>*/}
                                            {/*<option value="Nook">Nook</option>*/}
                                            {/*<option value="Pde">Pde</option>*/}
                                            {/*<option value="Pl">Pl</option>*/}
                                            {/*<option value="Rdge">Rdge</option>*/}
                                            {/*<option value="Rd">Rd</option>*/}
                                            {/*<option value="Sq">Sq</option>*/}
                                            {/*<option value="St">St</option>*/}
                                            {/*<option value="Tce">Tce</option>*/}
                                        {/*</select>*/}
                                        {/*{touched.streetType && errors.streetType &&*/}
                                        {/*<span className="text-danger">{errors.streetType}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}


                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-sm-12 text-muted label-padding-left">CITY</label>*/}
                                    {/*<div className="col-sm-12">*/}
                                        {/*<Field type="text" name="city" placeholder={address.addressCity}*/}
                                               {/*className="form-control form-control-line"*/}
                                               {/*onChange={handleChange}*/}
                                               {/*onBlur={handleBlur}/>*/}
                                        {/*{touched.city && errors.city &&*/}
                                        {/*<span className="text-danger">{errors.city}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-md-12 text-muted label-padding-left">POSTCODE</label>*/}
                                    {/*<div className="col-md-12">*/}
                                        {/*<Field type="number" name="postcode"*/}
                                               {/*placeholder={address.addressPostcode}*/}
                                               {/*className="form-control form-control-line"*/}
                                               {/*onChange={handleChange}*/}
                                               {/*onBlur={handleBlur}/>*/}
                                        {/*{touched.postcode && errors.postcode &&*/}
                                        {/*<span className="text-danger">{errors.postcode}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-sm-12 text-muted label-padding-left">STATE</label>*/}
                                    {/*<div className="col-sm-12">*/}
                                        {/*<select name="state" className="form-control form-control-line"*/}
                                                {/*value={values.state}*/}
                                                {/*onChange={handleChange}*/}
                                                {/*onBlur={handleBlur}>*/}
                                            {/*<option value="--" selected="selected">--</option>*/}
                                            {/*<option value="ACT">ACT</option>*/}
                                            {/*<option value="NSW">NSW</option>*/}
                                            {/*<option value="NT">NT</option>*/}
                                            {/*<option value="QLD">QLD</option>*/}
                                            {/*<option value="SA">SA</option>*/}
                                            {/*<option value="TAS">TAS</option>*/}
                                            {/*<option value="VIC">VIC</option>*/}
                                            {/*<option value="WA">WA</option>*/}
                                        {/*</select>*/}
                                        {/*{touched.state && errors.state &&*/}
                                        {/*<span className="text-danger">{errors.state}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="form-group form-group-address">*/}
                                    {/*<label className="col-sm-12 text-muted label-padding-left">COUNTRY</label>*/}
                                    {/*<div className="col-sm-12">*/}
                                        {/*<select name="country" className="form-control form-control-line"*/}
                                                {/*onChange={handleChange}*/}
                                                {/*onBlur={handleBlur}*/}
                                                {/*value={values.country}>*/}
                                            {/*<option value="--" selected="selected">--</option>*/}
                                            {/*<option value="AU">Australia</option>*/}
                                            {/*<option value="Grizzly Land">Grizzly Land</option>*/}
                                        {/*</select>*/}
                                        {/*{touched.country && errors.country &&*/}
                                        {/*<span className="text-danger">{errors.country}</span>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}

                                {/*<div className="form-group">*/}
                                    {/*<Autocomplete*/}
                                        {/*className = "address-input"*/}
                                        {/*onPlaceSelected={(place) => {*/}
                                            {/*console.log(place);*/}
                                        {/*}}*/}
                                        {/*types={[]}*/}
                                        {/*componentRestrictions={{country: "au"}}*/}
                                    {/*/>*/}
                                    {/*<div className="col-sm-12">*/}
                                        {/*<button type="submit" className="btn btn-success-muted">UPDATE ADDRESS</button>*/}
                                    {/*</div>*/}
                                    {/*{this.state.empty &&*/}
                                    {/*<span className="text-danger">At least one field is required for submission</span>}*/}
                                    {/*{Object.keys(errors).length === 0 &&*/}
                                    {/*<span className="text-success">{this.state.success}</span>}*/}
                                {/*</div>*/}
                            {/*</form>*/}
                        {/*)}*/}
                {/*/>*/}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAddress);
