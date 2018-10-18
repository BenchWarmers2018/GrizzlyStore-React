import React, {Component} from 'react';
import {Formik, Field} from 'formik';
import Dropzone from 'react-dropzone'

class ProfilePersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: "",
            empty: false,
            image: null,
            imageName: ''
        };
    }

    /**** Start of upload image functions ****/
    onSelect = (file) => {
        console.log(file[0].name);
        this.setState({
            image: file[0],
            imageName: file[0].name
        });
    }

    onDrop = (file) => {
        console.log('Coming from Dropzone');
        this.setState({
            image: file[0],
            imageName: file[0].name
        });
        this.fileUpload.files = new this.FileListItem(file);
    }

    // Create a FileList object from an array of File objects.
    FileListItem = (a) => {
        a = [].slice.call(Array.isArray(a) ? a : arguments);
        for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
        if (!d) throw new TypeError("expected argument to FileList is File or array of File objects");
        for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
        return b.files
    }
    /**** End of upload image functions ****/
    getPostValues = (values) => {
        var data = {
            phone: values.phone,
            lastName: values.lastName,
            firstName: values.firstName,
            image: this.state.image,
            imageName: this.state.imageName
        };
        return data;
    }


    validatePhone = (phone) => {
        let re = /^\d{10}$/;
        return re.test(phone);
    };
    validateName = (name) => {
        let reg = /^([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
        return reg.test(name);
    }

    handleSubmit = (values, formikBag) => {
        console.log('IMAGE HERE ' + values.image);
        if (!((this.state.image === null) && (values.phone.toString().length === 0) && (values.firstName.length === 0) && (values.lastName.length === 0))) {
            this.setState({empty: false});
            console.log(values);
            //Getting values for posting
            const submissionValues = this.getPostValues(values);

            //Passing values to parent component
            this.props.onProfileChange(submissionValues);
            formikBag.setSubmitting(false);
        }
        else {
            console.log('Need to enter at least one value for submission');
            this.setState({empty: true});
        }
    }

    render() {
        const profile = this.props.data;
        if (this.props.file !== undefined)
            this.setState({imageName: this.props.file[0].name});
        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile"
                    style={{textAlign: 'center', color: 'black'}}>Personal Details</h4>
                <br/>
                <Formik
                    initialValues={{firstName: "", lastName: "", phone: "", image: null}}
                    validate={(values) => {
                        if (this.state.image !== null)
                            values.image = this.state.image;
                        let errors = {};
                        console.log(values.firstName);
                        // VALIDATION
                        if (!this.validatePhone(values.phone)) {
                            errors.phone = "Phone numbers can only be 10 digits long!"
                        }
                        if(!this.validateName(values.firstName)){
                            errors.firstName = "Please enter a valid name!"
                        }
                        if(!this.validateName(values.lastName)){
                            errors.lastName = "Please enter a valid name!"
                        }
                        return errors;
                    }}
                    onSubmit={this.handleSubmit}
                    render={({
                                 touched,
                                 errors,
                                 values,
                                 handleChange,
                                 handleBlur,
                                 handleSubmit,
                                 setFieldValue
                             }) => (
                        <form className="form-horizontal form-material" onSubmit={handleSubmit}>
                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">FIRST NAME</label>
                                <div className="col-md-12">
                                    <Field type="text" name="firstName"
                                           placeholder={profile.profileFirstName}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                    {touched.firstName && errors.firstName &&
                                    <span className="text-danger">{errors.firstName}</span>}
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">LAST NAME</label>
                                <div className="col-md-12">
                                    <Field type="text" name="lastName"
                                           placeholder={profile.profileLastName}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                    {touched.lastName && errors.lastName &&
                                    <span className="text-danger">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">PHONE NUMBER</label>
                                <div className="col-md-12">
                                    <Field type="text" name="phone"
                                           placeholder={profile.profilePhoneNumber}
                                           className="form-control form-control-line" onChange={handleChange}
                                           onBlur={handleBlur}/>
                                    {touched.phone && errors.phone &&
                                    <span className="text-danger">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group form-group-personal">
                                <label className="col-md-12 text-muted label-padding-left">IMAGE</label>
                                <div className="col-md-12">
                                    <input className="imageInput"
                                           style={{alignContent: 'center', justifyContent: 'center'}} id="image"
                                           name="image" type="file" ref={(ref) => this.fileUpload = ref} title=" "
                                           accept="image/*"
                                           onChange={(event) => {
                                               event.preventDefault();
                                               let file = event.currentTarget.files[0];
                                               setFieldValue('image', file);
                                               if (file !== undefined) {
                                                   this.setState({imageName: file.name});
                                                   this.onSelect([file]);
                                               }
                                           }}/>
                                    <br/>
                                    <Dropzone accept="image/*" id='image' name='image' label='Image Upload'
                                              style={{textAlignVertical: 'center', alignItems: 'center',}}
                                              className="dropzone col-md-12" onDrop={this.onDrop}>
                                        <p className="textDrop">
                                            {this.state.image === null ?
                                                <b>Upload new Profile Image</b> : <b>{this.state.imageName}</b>}
                                        </p>
                                    </Dropzone>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-success-muted">UPDATE DETAILS</button>
                                    <button type="button" onClick={() => {
                                        this.setState({image: null, imageName: ''});
                                        console.log('IMAGE NAME ' + this.state.image);
                                        this.fileUpload.files = null;
                                        this.fileUpload.value = '';
                                        setFieldValue('image', null);
                                    }} className="btn btn-fail-muted">REMOVE IMAGE
                                    </button>
                                </div>
                                {this.state.empty &&
                                <span className="text-danger">At least one field is required for submission</span>}
                                {Object.keys(errors).length === 0 &&
                                <span className="text-success">{this.state.success}</span>}
                            </div>

                        </form>
                    )}
                />
            </div>

        );
    }
}


export default (ProfilePersonal);
