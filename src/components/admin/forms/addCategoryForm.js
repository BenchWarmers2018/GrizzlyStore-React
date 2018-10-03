import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux"
import { addCategory } from "../../../actions/categoryAction"

const AddCategoryForm = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting
  } = props;

  return(
    <Form>
      <h1>Add Category</h1>
      <form className = "form">
        {/* Display Error Message */}
        <div className={(props.addCategoryError != "") ? 'alert alert-danger' : null}>{props.addCategoryError}</div>

        {/* Name Field */}
        <p className="fieldset">
          <label htmlFor="name">Name</label>
          <Field className="full-width has-padding has-border" name="name" type="text" placeholder="Category Name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          {touched.name && errors.name && <span><p className="text-danger">{errors.name}</p></span>}
        </p>

        {/* Description Field */}
        <p className="fieldset">
          <label htmlFor="description">Description</label>
          <Field className="full-width has-padding has-border" name="description" type="text" placeholder="Category Description" value={values.description} onChange={handleChange} onBlur={handleBlur}/>
          {touched.description && errors.description && <span><p className="text-danger">{errors.description}</p></span>}
        </p>

        <p className="fieldset">
          <input className="full-width" type="submit" value="AddCategory"/>
        </p>
      </form>
    </Form>
  )
}
const FormikApp = withFormik({
  mapPropsToValues({ name, description }) {
    return {
      name: name || '',
      description: description || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().matches(^[a-zA-Z]+$).required('A name is required for the category!')
  }),
  handleSubmit(values, { props, setSubmitting }) {
    const categoryData = {categoryName: values.name, categoryDescription: values.description};
    props.dispatch(addCategory(categoryData));
    setSubmitting(false);
  }
})(AddCategoryForm)

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    error: state.categories.error,
  }
};

export default connect(mapStateToProps)(FormikApp)
