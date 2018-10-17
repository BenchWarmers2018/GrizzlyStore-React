import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux"
import { addCategory } from "../../../actions/categoriesAction"
import { notification } from 'antd';
import { Button, ModalFooter } from 'mdbreact';
import './sharedFormStyling.css';

class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          addCategoryMessage: this.props.addCategoryMessage
        };
    }

    componentDidUpdate(prevProps) {
      if(this.props.categoryStatusAdded && (prevProps.categories != this.props.categories))
      {
        notification.success({
            message: 'Category Added Successfully!'
        });
      }
    }

    render() {
      const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting
      } = this.props;

      return(
        <div>
          <h1 className="text-center title">Add Category</h1>
          <Form>
            <form className = "form">
              {/* Display Error/Success Message */}
              <div className={(this.props.addCategoryMessage != "") ? (this.props.categoryStatusAdded == true ? "alert alert-success" : "alert alert-danger") : null}>{this.props.addCategoryMessage}</div>

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

              <ModalFooter className="justify-content-center">
                  <Button size="lg" color="danger" type="submit">Add Category</Button>
              </ModalFooter>
            </form>
          </Form>
        </div>
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
    const categoryData = {categoryName: values.categoryName, categoryDescription: values.categoryDescription};
    props.dispatch(addCategory(categoryData));
    setSubmitting(false);
  }
})(AddCategoryForm)

const mapStateToProps = state => ({
  addCategoryMessage: state.category.messages,
  categories: state.category.categories,
  categoryStatusAdded: state.category.added
});

export default connect(mapStateToProps)(FormikApp)
