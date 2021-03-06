import React from 'react';
import {render} from 'react-dom'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup';
import {connect} from "react-redux"
import { authenticateUser } from "../../../actions/accountAction"
import GoogleLogin from "../GoogleLogin";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
        } = this.props;

        return (
            <Form>
                <form className="form">
                    {/* Display Error Message */}
                    <div
                        className={(this.props.error != "") ? 'alert alert-danger' : null}>{this.props.error}</div>

                    {/* Email Field */}
                    <p className="fieldset">
                        <label className="image-replace email" htmlFor="emailAddress">Email Address</label>
                        <Field className="full-width has-padding has-border" name="emailAddress" type="email"
                               placeholder="Email Address" value={values.emailAddress} onChange={handleChange}
                               onBlur={handleBlur}/>
                        {touched.emailAddress && errors.emailAddress &&
                        <span><p className="login-email-field text-danger">{errors.emailAddress}</p></span>}
                    </p>


                    {/* Password Field */}
                    <p className="fieldset">
                        <label className="image-replace password password-login" htmlFor="password">Password</label>
                        <Field className="full-width has-padding has-border login-password-field" name="password"
                               type="password" placeholder="Password" values={values.password} onChange={handleChange}
                               onBlur={handleBlur}/>
                        {touched.password && errors.password && <span className="text-danger">{errors.password}</span>}
                    </p>

                    <p className="fieldset submit-login-button">
                        <input className="full-width half-width" type="submit" value="Login"/>


                        <div className="login-or hr-login">
                        <hr className="hr-or"/>
                        <span className="span-or">or</span>
                        </div>
                        <GoogleLogin/>
                    </p>
                </form>
            </Form>
        )
    }
};


const FormikApp = withFormik({
    mapPropsToValues({emailAddress, password}) {
        return {
            emailAddress: emailAddress || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        emailAddress: Yup.string().email('Email Address is not valid.').required('An Email Address is required!'),
        password: Yup.string().min(8, 'Password must be 8 characters or longer.').required('A Password is required!')
    }),
    handleSubmit(values, {props, setSubmitting}) {
        const loginData = {accountEmailAddress: values.emailAddress, accountPassword: values.password};
        props.authenticateUser(loginData);
        setSubmitting(false);
    }
})(LoginForm);

const displayError = error => {
    return (
        <div className='alert alert-danger'>{error}</div>
    )
};

const mapStateToProps = (state) => ({
    error: state.accounts.error,
});

const mapDispatchToProps = {
    authenticateUser,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(FormikApp)
