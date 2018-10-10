import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux"
import { addCategory } from "../../../actions/categoriesAction"

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
      <h1 className="text-center has-padding">Add Category</h1>
      <form className = "form">

        {/* Display Error/Success Message */}
        <div className={(props.addCategoryMessage != "") ? (props.categoryStatusAdded == true ? "alert alert-success" : "alert alert-danger") : null}>{props.addCategoryMessage}</div>

        {/* Name Field */}
        <p className="fieldset">
          <label htmlFor="categoryName">Name</label>
          <Field className="full-width has-padding has-border" name="categoryName" type="text" placeholder="Category Name" value={values.categoryName} onChange={handleChange} onBlur={handleBlur}/>
          {touched.categoryName && errors.categoryName && <span><p className="text-danger">{errors.categoryName}</p></span>}
        </p>

        {/* Description Field */}
        <p className="fieldset">
          <label htmlFor="categoryDescription">Description</label>
          <Field className="full-width has-padding has-border" name="categoryDescription" component="textarea" placeholder="Category Description" value={values.categoryDescription} onChange={handleChange} onBlur={handleBlur}/>
          {touched.categoryDescription && errors.categoryDescription && <span><p className="text-danger">{errors.categoryDescription}</p></span>}
        </p>

        <p className="fieldset">
          <input className="full-width" type="submit" value="Add Category"/>
        </p>
      </form>
    </Form>
  )
}
const FormikApp = withFormik({
  mapPropsToValues({ categoryName, categoryDescription }) {
    return {
      categoryName: categoryName || '',
      categoryDescription: categoryDescription || ''
    }
  },
  validationSchema: Yup.object().shape({
    categoryName: Yup.string().matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, "Category names must only contain letters.").required('A name is required for the category!')
  }),
  handleSubmit(values, { props, setSubmitting }) {
    const categoryData = {categoryName: values.categoryName, categoryDescription: values.categoryDescription};
    props.dispatch(addCategory(categoryData));
    setSubmitting(false);
  }
})(AddCategoryForm)

function mapStateToProps(state) {
  return {
  }
};

export default connect(mapStateToProps)(FormikApp)
