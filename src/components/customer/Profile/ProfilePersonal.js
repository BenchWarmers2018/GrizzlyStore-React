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
        this.onDrop = this.onDrop.bind(this)
        this.state = {
            success: "",
            empty: false,
            firstName: '',
            lastName: '',
            mobile: '',
            image: null,
            imageName: ''
        };
    }

    onDrop(file) {
        console.log(file[0].name);
        this.setState({
            image: file,
            imageName: file[0].name
        });
    }

    componentDidMount() {
        this.props.fetchProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.setState(
                {
                    mobile: this.props.profile[0].profile.profilePhoneNumber,
                    firstName: this.props.profile[0].profile.profileFirstName,
                    lastName: this.props.profile[0].profile.profileLastName
                });
        }
    }

    validatePhone = (phone) => {
        let re = /^\d{10}$/;
        console.log(re.test(phone));
        return re.test(phone);
    };

    handleSubmit(values, formikBag) {
        if (!((values.phone.toString().length === 0) && (values.firstName.length === 0) && (values.lastName.length === 0))) {
            const {submitPersonalDetails} = this.props;
            this.setState({empty: false});
            console.log(values);
            submitPersonalDetails({phone: values.phone, firstName: values.firstName, lastName: values.lastName});
            formikBag.setSubmitting(false);
            this.setState({success: this.props.updates}); // Get update message back from Spring
            console.log("SUCCESS " + JSON.stringify(this.props.profile[0]) + " " + this.state.success);
        }
        else {
            console.log('Need to enter at least one value for submission');
            this.setState({empty: true});
        }
    }

    render() {
        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile"
                    style={{textAlign: 'center', color: 'black'}}>Personal Details</h4>
                <br/>
                <Formik
                    initialValues={{firstName: "", lastName: "", phone: ""}}
                    validate={(values) => {
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
                                 handleSubmit
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
                                           placeholder={this.state.mobile}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                    {touched.phone && errors.phone &&
                                    <span className="text-danger">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <Dropzone style={{
                                    textAlignVertical: 'center',
                                    alignItems: 'center',
                                }} className="dropzone col-md-12" onDrop={this.onDrop}>
                                    <p className="textDrop">
                                        <i>Drag new profile image here</i>
                                    </p>
                                </Dropzone>
                                <a className="imageName"
                                   style={{textAlign: "left", width: '100%'}}>{this.state.imageName}</a>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-success-muted">UPDATE DETAILS</button>
                                    <button type="button" onClick={() => {
                                        this.setState({image: null, imageName: ''});
                                        console.log('IMAGE NAME ' + this.state.image)
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