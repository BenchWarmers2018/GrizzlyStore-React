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
      <div>
        <label className="image-replace email" htmlFor="emailAddress">Email Address</label>
        {touched.emailAddress && errors.emailAddress && <p>{errors.emailAddress}</p>}
        <Field className="full-width has-padding has-border" name="emailAddress" type="email" placeholder="E-mail" value={values.emailAddress} onChange={handleChange}/>
      </div>
      <div>
        <label className="image-replace password" htmlFor="password">Password</label>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field className="full-width has-padding has-border" name="password" type="password"  placeholder="Password" values={values.password} onChange={handleChange}/>
      </div>
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
    emailAddress: Yup.string().email('Email Address is not valid').required('Email Address is required'),
    password: Yup.string().min(8, 'Password must be 8 characters or longer').required('Password is required')
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

// const App = () => (
//
// )
//
// const FormikApp = withFormik( {

// })(LoginForm)

export default FormikApp;
