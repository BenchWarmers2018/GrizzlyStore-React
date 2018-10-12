import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux"
import { editCategory } from "../../../actions/categoriesAction"

class EditCategoryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          rowData: this.props.rowData,
          editCategoryMessage: this.props.editCategoryMessage
        };

        this.props.values.categoryName = this.state.rowData.categoryName
        this.props.values.categoryDescription = this.state.rowData.categoryDescription
    }

    componentDidUpdate(prevProps) {
      if(prevProps.rowData !== this.props.rowData)
      {
        this.setState({rowData: this.props.rowData})
      }
    }

    render() {
      const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        currentData
      } = this.props;

      return(
        <Form>
          <h1 className="text-center has-padding">Edit Category</h1>
          <form className = "form">

            {/* Display Error/Success Message */}
            <div className={(this.props.editCategoryMessage != "") ? (this.props.categoryStatusUpdated == true ? "alert alert-success" : "alert alert-danger") : null}>{this.props.editCategoryMessage}</div>

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
              <input className="full-width" type="submit" value="Save"/>
            </p>
          </form>
        </Form>
      )
    }
};

const FormikApp = withFormik({
  mapPropsToValues: ({ categoryName, categoryDescription }) => ({
    categoryName: categoryName || '',
    categoryDescription: categoryDescription || ''
  }),
  validationSchema: Yup.object().shape({
    categoryName: Yup.string().matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, "Category names must only contain letters.").required('A name is required for the category!')
  }),
  handleSubmit(values, { props, setSubmitting }) {
    const categoryData = {idCategory: props.rowData.idCategory, categoryName: values.categoryName, categoryDescription: values.categoryDescription};
    props.dispatch(editCategory(categoryData));
    setSubmitting(false);
  }
})(EditCategoryForm)

const mapStateToProps = (state) => ({
  editCategoryMessage: state.category.editMessages,
  categoryStatusUpdated: state.category.updated
});

export default connect(mapStateToProps)(FormikApp)
