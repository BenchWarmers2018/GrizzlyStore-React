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
          rowData: this.props.rowData
        };
    }

    componentDidUpdate(prevProps) {
      if(prevProps.rowData !== this.props.rowData)
      {
        this.setState({rowData: this.props.rowData})
        this.props.value.categoryName = this.props.rowData.categoryName;
        this.props.value.categoryDescription = this.props.rowData.categoryDescription;
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
            <div className={(props.EditCategoryMessage != "") ? (props.categoryStatusEdited == true ? "alert alert-success" : "alert alert-danger") : null}>{props.EditCategoryMessage}</div>

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
    const categoryData = {idCategory: rowData.idCategory, categoryName: values.categoryName, categoryDescription: values.categoryDescription};
    props.dispatch(editCategory(categoryData));
    setSubmitting(false);
  }
})(EditCategoryForm)

const mapStateToProps = (state) => ({
    categories: state.category.category,
    errors: state.category.errors,
});

export default connect(mapStateToProps)(FormikApp)
