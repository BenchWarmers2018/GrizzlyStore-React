import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'

const initialValues = {
  emailAddress: '',
  password: '',
}

// export default function LoginForm() {
//   return(
//     <Formik
//       initialValues = {initialValues}
//       validate = {validationSchema}
//       onSubmit={onSubmit}
//       render={form}
//     />
//   )
// }

const form = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    isSubmitting
  } = props;

  return(
    <form>
      <div>
        <label className="image-replace email" htmlFor="emailAddress">E-mail</label>
        <Field className="full-width has-padding has-border" name="emailAddress" type="email" placeholder="E-mail" value={values.emailAddress} onChange={handleChange}/>
      </div>
      <div>
        <label className="image-replace password" htmlFor="password">Password</label>
        <Field className="full-width has-padding has-border" name="password" type="password"  placeholder="Password" values={values.password} onChange={handleChange}/>
      </div>
    </form>
  )
}

const FormikApp = withFormik({
  mapPropsToValues({ emailAddress }) {
    return {
      emailAddress: emailAddress || ''
    }
   }
})(form)
// const App = () => (
//
// )
//
// const FormikApp = withFormik( {

// })(LoginForm)

export default form;
