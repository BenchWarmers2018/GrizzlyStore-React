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
import Product from "../../images/profile-pic.png";
import {fetchProfile} from "../../actions/profileActions";
import ProfileOverview from "../customer/ProfileOverview.js"
import ProfileAddress from "../customer/ProfileAddress.js"
import ProfilePassword from "../customer/ProfilePassword.js"


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Grizzly',
            lastName: 'Store',
            mobile: '045555555',
            email: null,
            called: false,
            address: '95 Bear Avenue, Victoria, Australia 3000',
            state: "",
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

            let stateString = this.props.profile[1].addressState;
            let cityString = this.props.profile[1].addressCity;

            return (
                <div className="page-wrapper">



                    {/*Paarth's Code:*/}
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
                                            <Image
                                                src={images[imageName]}
                                                width={150}
                                                height={180}
                                            />
                                            <h4 className="card-title m-t-10">{this.props.profile[0].profileFirstName} {this.props.profile[0].profileLastName}</h4>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div className="card-body">


                                        <div className="profile-usermenu">
                                            <ul className="nav">
                                                <li className="active">
                                                    <a href="#"> Overview </a>
                                                </li>
                                                <li>
                                                    <a href="#"> Edit Address </a>
                                                </li>
                                                <li>
                                                    <a href="#"> Change Password </a>
                                                </li>
                                                <li>
                                                    <a href="#"> Log Out </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xlg-9 col-md-7">
                                <div className="card">
                                    <div className="card-body">
                                        <ProfileOverview/>
                                        <ProfileAddress/>
                                        <ProfilePassword/>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>






                </div>


            );
        }
        return null;
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

