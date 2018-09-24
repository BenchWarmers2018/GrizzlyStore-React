import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';

const App = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting
  } = props;

  return(
    <Form>
      <form className = "form">
        {/* Email Field */}
        <p className="fieldset">
          <label className="image-replace email" htmlFor="emailAddress">Email Address</label>
          <Field className="full-width has-padding has-border" name="emailAddress" type="email" placeholder="E-mail" value={values.emailAddress} onChange={handleChange}/>
          {touched.emailAddress && errors.emailAddress && <p>{errors.emailAddress}</p>}
          {/* {errors.emailAddress} */}
        </p>

        {/* Password Field */}
        <p className="fieldset">
          <label className="image-replace password" htmlFor="password">Password</label>
          <Field className="full-width has-padding has-border" name="password" type="password"  placeholder="Password" values={values.password} onChange={handleChange}/>
          {touched.password && errors.password && <span className="error-message">{errors.password}</span>}
        </p>

        <p className="fieldset">
          <input className="full-width" type="submit" value="Login"/>
        </p>
      </form>
    </Form>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ emailAddress, password }) {
    return {
      emailAddress: emailAddress || '',
      password: password || ''
    }
  },
  validationSchema: Yup.object().shape({
    emailAddress: Yup.string().email('Email Address is not valid.').required('An Email Address is required!'),
    password: Yup.string().min(8, 'Password must be 8 characters or longer.').required('A Password is required!')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.emailAddress === 'yomi@gmail.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 2000)
  }
})(App)

export default FormikApp;
