import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Formik, Field} from 'formik';
import { withRouter } from 'react-router';
import {submitPassword} from "../../../actions/profileActions";


class ProfilePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values, formikBag) {
        console.log(values);
        const { submitPassword} = this.props;
        submitPassword({password: values.password});
        formikBag.setSubmitting(false);
        this.setState({success: this.props.updates}); // Get update message back from Spring
    }

    componentDidMount() {
        this.props.fetchProfile();
    }

    componentDidUpdate(prevProps) {

    }

    render() {
        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Change
                    Password</h4>
                <br/>
                <Formik
                    initialValues={{password: "", confirmPassword: ""}}
                    validate={(values) => {
                        console.log(values);
                        let errors = {};
                        // VALIDATION
                        if (values.password.length < 8)
                            errors.password = "Password needs to be at least 8 characters";
                        if (values.password.toString().localeCompare(values.confirmPassword.toString())) {
                            errors.confirmPassword = "Passwords don't match!"
                        }
                        if (values.confirmPassword.length === 0) {
                            errors.confirmPassword = "Confirmation Password is required!"
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
                        <form className="form-horizontal form-material " onSubmit={handleSubmit}>
                            <div className="form-group form-group-password">
                                <label className="col-md-12 text-muted label-padding-left">NEW PASSWORD</label>
                                <div className="col-md-12">
                                    <Field type="password" name="password" placeholder="New Password"
                                           className="form-control form-control-line" onChange={handleChange} onBlur={handleBlur}/>
                                    {touched.password && errors.password && <span className="text-danger">{errors.password}</span>}
                                </div>
                            </div>

                            <div className="form-group form-group-password">
                                <label className="col-md-12 text-muted label-padding-left">CONFIRM PASSWORD</label>
                                <div className="col-md-12">
                                    <Field type="password" name="confirmPassword" placeholder="Confirm Password"
                                           className="form-control form-control-line" onChange={handleChange} onBlur={handleBlur}/>
                                    {touched.confirmPassword && errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-success-muted">UPDATE PASSWORD</button>
                                </div>
                                {Object.keys(errors).length === 0 &&
                                <span className="text-success">{this.state.success}</span>}
                            </div>
                        </form>
                    )}
                />
            </div>
        );
    }
};

ProfilePassword.propTypes = {
    submitPassword: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    submitted: PropTypes.bool.isRequired,
    updates: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    submitted: state.profiles.submitted,
    submitting: state.profiles.submitting,
    updates: state.profiles.updates,
    error: state.profiles.error
});

const mapDispatchToProps = {
    submitPassword
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePassword));