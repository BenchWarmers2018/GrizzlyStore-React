import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {
    Container, Col, Row
} from 'reactstrap';
import axios from 'axios';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Background from "../../images/images_essence/bg-img/breadcumb.jpg";
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import Product from "../../images/profile-pic.png";
import {fetchProfile} from "../../actions/profileActions";

class Profile extends Component {
    constructor(props) {
        super(props); // ABCD
        this.state = {
            firstName: 'Grizzly',
            lastName: 'Store',
            mobile: '045555555',
            image: 'http://bw.ausgrads.academy/images/polarwave.jpg' ,
            email: null,
            called: false,
            address: '95 Bear Avenue, Victoria, Australia 3000',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.fetchProfile();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        });
    }

    changeProfile = (event) => {
        event.preventDefault();
        var profileData = {};
        profileData.city = this.city.value;
        profileData.postcode = this.postcode.value;
        profileData.country = this.country.value;
        profileData.address1 = this.addressLine1.value;
        profileData.address2 = this.addressLine2.value;
        profileData.address3 = this.addressLine3.value;
        profileData.phone = this.phone.value;
        profileData.state = this.state.value;
        profileData.pw = this.PW.value;
        profileData.accountID = this.props.profile[0].userAccount.idAccount;
        profileData.confirmPW = this.confirmPW.value;
        console.log(JSON.stringify(profileData) + " profile Data PB");
        var response = this.checkValidity(profileData);
        console.log('PHONE VALIDITY: ' + this.validatePhone('005808007'));
        if (response[0]) {
            axios.post("http://localhost:8080/user/update-profile", (profileData))
                .then((response) => {
                    console.log("Updating profile successful " + response);
                })
                .catch((err) => {
                    console.log("Update file unsuccessful. Error: " + err);
                })
        }
        else {
            console.log("ERRORS IN FORM", response[1]);
        }
    };

    validatePhone = (phone) => {
        var re = /^\d{10}$/;
        return re.test(String(phone).toLowerCase());
    };

    checkValidity = (profileDetails) => {
        var valid = true;
        var err = [];
        console.log(JSON.stringify(profileDetails) + '\nchecking validity');
        if (profileDetails.pw != "" && profileDetails.confirmPW != "") {
            (profileDetails.pw == profileDetails.confirmPW) ? (true) : (valid = false, err.push("Passwords don't match"));
        }
        if ((profileDetails.pw == "" && profileDetails.confirmPW != "") ||
            (profileDetails.pw != "" && profileDetails.confirmPW == "")) {
            valid = false;
            err.push("Please fill both the password fields");
        }
        if (profileDetails.phone != "") {
            this.validatePhone(profileDetails.phone) == true ? true : (valid = false, err.push("Phone Number Invalid"));
        }
        return [valid, err];
    };

    render() {
        function extractImagePath(url) {
            if (url != null) {
                var array = url.split('/');
                var image_name = array[array.length - 1];
                var location = url.substring(0, url.lastIndexOf('/'));
                return [location, image_name];
            }
            return null;
        }

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => {
                images[item.replace('./', '')] = r(item);
            });
            return images;
        }

        if (this.props.profile[0] != null) {
            var imageName = this.props.profile[0].profileImage;
            console.log('Cognizant ' + this.props.profile[0]);

            var arr = extractImagePath(imageName);
            const images = importAll(require.context('../../images/profile_images', false, /\.(png|jpe?g|svg)$/));

            if (imageName != null) {
                arr = imageName.split('/');
                imageName = arr[arr.length - 1];
            }
            return (
                <div className="page-wrapper">
                    <div className="breadcumb_area bg-img" style={{backgroundImage: "url(" + Background + ")"}}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="page-title text-center">
                                        <h2>User Profile</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-xlg-3 col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <center class="m-t-30">
                                            <img
                                                src={this.props.profile[0].profileImage}
                                                width={150}
                                                height={180}
                                            />
                                            <h4 className="card-title m-t-10">{this.props.profile[0].profileFirstName} {this.props.profile[0].profileLastName}</h4>
                                        </center>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div className="card-body">
                                        <small className="text-muted">Email address</small>
                                        <h6>{this.props.profile[0].userAccount.accountEmailAddress}</h6>
                                        <small className="text-muted p-t-30 db">Phone</small>
                                        <h6>{this.props.profile[0].profilePhoneNumber}</h6>
                                        <small className="text-muted p-t-30 db">Address</small>
                                        <h6>{this.props.profile[1].addressLine1}<br/>{this.props.profile[1].addressCity}<br/>{this.props.profile[1].addressCountry}
                                        </h6>
                                        <small className="text-muted p-t-30 db">Social Profile</small>
                                        <br/>
                                        <button className="btn btn-circle btn-secondary">
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button className="btn btn-circle btn-secondary">
                                            <i className="fab fa-twitter"/>
                                        </button>
                                        <button className="btn btn-circle btn-secondary">
                                            <i className="fab fa-youtube"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xlg-9 col-md-7">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-subtitle" style={{textAlign: 'center', color: 'black'}}>Edit
                                            Details</h4>
                                        <br/>
                                        <form className="form-horizontal form-material" onSubmit={this.changeProfile}>
                                            <div className="form-group">
                                                <label className="col-md-12"><b><i>Password</i></b></label>
                                                <div className="col-md-12">
                                                    <input type="password" placeholder="New Password"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.PW = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b><i>Repeat Password</i></b></label>
                                                <div className="col-md-12">
                                                    <input type="password" placeholder="Confirm Password"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.confirmPW = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Phone No</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="123 456 7890"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.phone = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select Country</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line" ref={(c) => {
                                                        this.country = c;
                                                    }}>
                                                        <option>Australia</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select State</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line" ref={(c) => {
                                                        this.state = c;
                                                    }}>
                                                        <option>Victoria</option>
                                                        <option>NSW</option>
                                                        <option>Western Australia</option>
                                                        <option>Queensland</option>
                                                        <option>Northern Territory</option>
                                                        <option>South Australia</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select City</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line" ref={(c) => {
                                                        this.city = c;
                                                    }}>
                                                        <option>Melbourne</option>
                                                        <option>Sydney</option>
                                                        <option>Darwin</option>
                                                        <option>Perth</option>
                                                        <option>Brisbane</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 1</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: Unit 95"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.addressLine1 = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 2</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: George Street"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.addressLine2 = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 3</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: Richmond"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.addressLine3 = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Postcode</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: 1234"
                                                           className="form-control form-control-line" ref={(c) => {
                                                        this.postcode = c;
                                                    }}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            );
        }
        return null;
        // return (
        //     <div className="doNotRemoveDiv">
        //         <h3 className="headingAlignment">User Profile</h3>
        //         <Container>
        //             <Row>
        //                 <Col xs={3} md={3}>
        //                     <div className="button-center">
        //                         <Image
        //                             src={images[imageName]}
        //                             width={150}
        //                             height={180}
        //                         />
        //                         <br/>
        //                         <button type="button" class="btn btn-primary">Edit Profile</button>
        //                         <br/><br/>
        //                         <button type="button" class="btn btn-success">View Orders</button>
        //                         <br/><br/>
        //                     </div>
        //                 </Col>
        //                 <Col xs={3} md={6}>
        //                     <br/>
        //                     <b>First Name:</b> {this.props.profile[0].profileFirstName}
        //                     <br/><br/>
        //                     <b>Last Name:</b> {this.props.profile[0].profileLastName}
        //                     <br/><br/>
        //                     <b>Phone:</b> {this.props.profile[0].profilePhoneNumber}
        //                     <br/><br/>
        //                     <b>Address:</b> {this.props.profile[1].addressLine1 + ', '
        //                 + this.props.profile[1].addressCity + ', ' + this.props.profile[1].addressCountry}
        //                     <br/><br/>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // );
    }

}

Profile.propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profiles.profile,
    fetched: state.profiles.fetched,
    fetching: state.profiles.fetching,
    error: state.profiles.error
});

export default connect(mapStateToProps, {fetchProfile})(Profile);

