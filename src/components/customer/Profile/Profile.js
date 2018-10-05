import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import BackgroundProfile from "../../../images/profile_images/background.png";
import Background from "../../../images/images_essence/bg-img/breadcumb.jpg";

import {fetchProfile} from "../../../actions/profileActions";
import ProfileOverview from "./ProfileOverview.js"
import ProfileAddress from "./ProfileAddress.js"
import ProfilePassword from "./ProfilePassword.js"
import ProfilePersonal from "./ProfilePersonal.js"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";


class Profile extends Component {
    constructor(props) {
        super(props);
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

    render() {

        //Functions for image extraction. IS THIS STILL NEEDED?
        function extractImagePath(url) {
            if (url != null) {
                let array = url.split('/');
                let image_name = array[array.length - 1];
                let location = url.substring(0, url.lastIndexOf('/'));
                return [location, image_name];
            }
            return null;
        }

        //Functions for image extraction. IS THIS STILL NEEDED?
        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => {
                images[item.replace('./', '')] = r(item);
            });
            return images;
        }

        //Checking if user exists
        if (this.props.profile[0] != null) {

            //Functions for image extraction. IS THIS STILL NEEDED?
            var imageName = this.props.profile[0].profileImage;
            var arr = extractImagePath(imageName);
            const images = importAll(require.context('../../../images/profile_images', false, /\.(png|jpe?g|svg)$/));

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

                    <Router>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-4 col-xlg-3 col-md-5">
                                    <div className="card">

                                        <div className=" profile-img-name">
                                            <Image src={images[imageName]} width={150} height={180}/>
                                            <h4 className="card-title m-t-10">{this.props.profile[0].profileFirstName} {this.props.profile[0].profileLastName}</h4>
                                        </div>

                                        <div>
                                            <hr/>
                                        </div>

                                        <div className="profile-usermenu">
                                            <ul className="nav profile-nav">
                                                <li>
                                                    <NavLink className="profile-usermenu-option" activeClassName="active" to="/profile/overview">Overview</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="profile-usermenu-option" activeClassName="active" to="/profile/personal">Edit Personal Details</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="profile-usermenu-option" activeClassName="active" to="/profile/address">Change Shipping Address</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink className="profile-usermenu-option" activeClassName="active" to="/profile/password">Change Password</NavLink>
                                                </li>
                                                <li>
                                                    <h7 className="profile-usermenu-option" >Log Out</h7>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xlg-9 col-md-7">
                                    <div className="card">
                                        <div className="card-body card-body-profile">
                                            <Route exactly active path="/profile/overview" component={ProfileOverview} />
                                            <Route exactly path="/profile/address" component={ProfileAddress} />
                                            <Route exactly path="/profile/password" component={ProfilePassword} />
                                            <Route exactly path="/profile/personal" component={ProfilePersonal} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Router>
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