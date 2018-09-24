import React from 'react';
import { render } from 'react-dom'
import { withFormik } from 'formik'

class LoginForm {
  render() {
    return(
      <form className="form">
          <p className="fieldset">
              <label className="image-replace email" htmlFor="login-emailaddress">E-mail</label>
              <input className="full-width has-padding has-border" id="login-emailaddress" type="email" placeholder="E-mail" value={this.props.loginData.emailAddress} />
                  {/* <span className="error-message">An account with this email address does not exist!</span> */}
          </p>

          <p className="fieldset">
              <label className="image-replace password" htmlFor="login-password">Password</label>
              <input className="full-width has-padding has-border" id="login-password" type="password"  placeholder="Password" value={this.props.loginData.password}/>
                  {/* <span className="error-message">Wrong password! Try again.</span> */}
          </p>

          <p className="fieldset">
              <input className="full-width" type="submit" value="Login" />
          </p>
      </form>
    );
  }
}

const FormikApp = withFormik( {

})(LoginForm)

export default LoginForm;
