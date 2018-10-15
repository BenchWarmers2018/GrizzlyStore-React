import React from 'react';
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from "react-redux"
import { addCategory } from "../../../actions/categoriesAction"
import { notification } from 'antd';
import { Button, ModalFooter } from 'mdbreact';

class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          addCategoryMessage: this.props.addCategoryMessage
        };
    }

    componentDidUpdate(prevProps) {
      if(prevProps.errors != this.props.errors)
      {
        if(this.props.errors.categoryName)
        {
          notification.error({
            message: this.props.errors.categoryName,
            style: {
            },
          });
        }
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
        <Form>
          <h1 className="text-center has-padding">Add Category</h1>
          <form className = "form">
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
              <div className="text-center">
                <Button size="lg" color="blue-grey">Close</Button>
                <Button size="lg" color="danger" type="submit">Add Category</Button>
              </div>
            </ModalFooter>
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
    const categoryData = {categoryName: values.categoryName, categoryDescription: values.categoryDescription};
    props.dispatch(addCategory(categoryData));
    setSubmitting(false);
  }
})(AddCategoryForm)

const mapStateToProps = state => ({
  addCategoryMessage: state.category.messages,
  categoryStatusAdded: state.category.added
});

export default connect(mapStateToProps)(FormikApp)
