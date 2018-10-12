import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile, submitPersonalDetails} from "../../../actions/profileActions";
import {Formik, Field} from 'formik';
import {withRouter} from 'react-router';
import Dropzone from 'react-dropzone'

class ProfilePersonal extends Component {
    constructor(props) {
        super(props);
        this.validatePhone = this.validatePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.getPostValues = this.getPostValues.bind(this);
        this.FileListItem = this.FileListItem.bind(this);
        this.state = {
            success: "",
            empty: false,
            firstName: '',
            lastName: '',
            phone: '',
            image: null,
            imageName: ''
        };
    }

    onSelect(file) {
        console.log(file[0].name);
        this.setState({
            image: file[0],
            imageName: file[0].name
        });
    }

    onDrop(file) {
        console.log('Coming from Dropzone');
        this.setState({
            image: file[0],
            imageName: file[0].name
        });
        this.fileUpload.files = new this.FileListItem(file);
    }

    getPostValues(values) {
        var data = {
            phone: '',
            lastName: '',
            firstName: '',
            image: this.state.image,
            imageName: this.state.imageName
        };
        values.firstName.length === 0 ? data.firstName = this.state.firstName : data.firstName = values.firstName;
        values.lastName.length === 0 ? data.lastName = this.state.lastName : data.lastName = values.lastName;
        values.phone.toString().length === 0 ? data.phone = this.state.phone : data.phone = values.phone;

        return data;
    }

    // Create a FileList object from an array of File objects.
    FileListItem(a) {
        a = [].slice.call(Array.isArray(a) ? a : arguments);
        for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
        if (!d) throw new TypeError("expected argument to FileList is File or array of File objects");
        for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
        return b.files
    }


    componentDidMount() {
        this.props.fetchProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.setState(
                {
                    phone: this.props.profile[0].profile.profilePhoneNumber,
                    firstName: this.props.profile[0].profile.profileFirstName,
                    lastName: this.props.profile[0].profile.profileLastName,
                    image: null,
                    imageName: ''
                });
        }
    }

    validatePhone = (phone) => {
        let re = /^\d{10}$/;
        console.log(re.test(phone));
        return re.test(phone);
    };

    handleSubmit(values, formikBag) {
        console.log('IMAGE HERE ' + values.image);
        if (!((this.state.image === null) && (values.phone.toString().length === 0) && (values.firstName.length === 0) && (values.lastName.length === 0))) {
            this.setState({empty: false});
            console.log(values);
            const submissionValues = this.getPostValues(values);
            this.submitPersonalDetails(submissionValues);
            formikBag.setSubmitting(false);
            this.props.fetchProfile();
            this.setState({success: this.props.updates}); // Get update message back from Spring
            console.log("SUCCESS " + JSON.stringify(this.props.profile[0]) + " " + this.state.success);
        }
        else {
            console.log('Need to enter at least one value for submission');
            this.setState({empty: true});
        }
    }

    render() {
        if (this.props.file !== undefined)
            this.setState({imageName: this.props.file[0].name});
        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile"
                    style={{textAlign: 'center', color: 'black'}}>Personal Details</h4>
                <br/>
                <Formik
                    initialValues={{firstName: "", lastName: "", phone: "", image: null}}
                    validate={(values) => {
                        if (this.state.image !== null)
                            values.image = this.state.image;
                        console.log(values);
                        let errors = {};
                        // VALIDATION
                        if (values.phone.toString().length > 0 && !this.validatePhone(values.phone)) {
                            errors.phone = "Phone numbers can only be 10 digits long!"
                        }
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
                        <form className="form-horizontal form-material" onSubmit={handleSubmit}>
                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">FIRST NAME</label>
                                <div className="col-md-12">
                                    <Field type="text" name="firstName"
                                           placeholder={this.state.firstName}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">LAST NAME</label>
                                <div className="col-md-12">
                                    <Field type="text" name="lastName"
                                           placeholder={this.state.lastName}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">PHONE NUMBER</label>
                                <div className="col-md-12">
                                    <Field type="number" name="phone"
                                           placeholder={this.state.phone}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                    {touched.phone && errors.phone &&
                                    <span className="text-danger">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">IMAGE</label>
                                <div className="col-md-12">
                                    <input className="imageInput"
                                           style={{alignContent: 'center', justifyContent: 'center'}} id="image"
                                           name="image" type="file" ref={(ref) => this.fileUpload = ref} title=" "
                                           accept="image/*"
                                           onChange={(event) => {
                                               event.preventDefault();
                                               let file = event.currentTarget.files[0];
                                               setFieldValue('image', file);
                                               if (file !== undefined) {
                                                   this.setState({imageName: file.name});
                                                   this.onSelect([file]);
                                               }
                                           }}/>
                                    <br/>
                                    <Dropzone accept="image/*" id='image' name='image' label='Image Upload'
                                              style={{textAlignVertical: 'center', alignItems: 'center',}}
                                              className="dropzone col-md-12" onDrop={this.onDrop}>
                                        <p className="textDrop">
                                            {this.state.image === null ?
                                                <b>Upload new Profile Image</b> : <b>{this.state.imageName}</b>}
                                        </p>
                                    </Dropzone>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-success-muted">UPDATE DETAILS</button>
                                    <button type="button" onClick={() => {
                                        this.setState({image: null, imageName: ''});
                                        console.log('IMAGE NAME ' + this.state.image);
                                        this.fileUpload.files = null;
                                        this.fileUpload.value = '';
                                        setFieldValue('image', null);
                                    }} className="btn btn-fail-muted">REMOVE IMAGE
                                    </button>
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

ProfilePersonal.propTypes = {
    submitPersonalDetails: PropTypes.func.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    updates: PropTypes.string.isRequired,
    submitted: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    fetched: state.profiles.fetched,
    updates: state.profiles.updates,
    profile: state.profiles.profile,
    fetching: state.profiles.fetching,
    submitting: state.profiles.submitting,
    submitted: state.profiles.submitted,
    error: state.profiles.error
});

const mapDispatchToProps = {
    submitPersonalDetails,
    fetchProfile
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePersonal));
