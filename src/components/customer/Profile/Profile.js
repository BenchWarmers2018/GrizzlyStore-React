import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import BackgroundProfile from "../../../images/profile_images/background.png";
import Background from "../../../images/images_essence/bg-img/breadcumb.jpg";
import {Button} from 'react-bootstrap';
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
        this.onClick = this.onClick.bind(this);
        this.refreshProfile = this.refreshProfile.bind(this);
        this.state = {
            selection: [true, false, false, false],
            image: '',
            firstName: '',
            lastName: '',
        };
    }

    componentDidMount() {
        this.props.fetchProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profile !== this.props.profile) {
            this.setState({
                image: this.props.profile[0].profileImage,
                firstName: this.props.profile[0].profileFirstName,
                lastName: this.props.profile[0].profileLastName
            });
        }
    }

    refreshProfile() {
        this.props.fetchProfile();
        console.log('UPDATED PROFILE ' + JSON.stringify(this.props.profile));
        this.forceUpdate();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            email: event.target.value
        });
    }

    onClick(id) {
        console.log('ID HERE: ' + id.toString());
        let output = this.state.selection;
        var i;
        for (i = 0; i < output.length; i++) {
            if (i !== id)
                output[i] = false;
            else
                output[i] = true;
        }
        this.setState({selection: output})
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
            var imageName = this.state.image;
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
                                            <h4 className="card-title m-t-10">{this.state.firstName} {this.state.lastName}</h4>
                                        </div>

                                        <div>
                                            <hr/>
                                        </div>

                                        <div className="profile-usermenu">
                                            <ul className="nav profile-nav">
                                                <li>
                                                    <Button bsSize="large" onClick={() => this.onClick(0)}
                                                             block>Overview</Button>
                                                </li>
                                                <li>
                                                    <Button className="profile-usermenu profile-option-button" bsSize="large" onClick={() => this.onClick(1)} block>Edit
                                                        Personal Details</Button>
                                                </li>
                                                <li>
                                                    <Button bsSize="large" onClick={() => this.onClick(2)} block>Change
                                                        Shipping Address</Button>
                                                </li>
                                                <li>
                                                    <Button bsSize="large" onClick={() => this.onClick(3)} block>Change
                                                        Password</Button>
                                                </li>
                                                <li>
                                                    <h7 className="text-center profile-usermenu-option ">Log
                                                        Out
                                                    </h7>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xlg-9 col-md-7">
                                    <div className="card">
                                        <div className="card-body card-body-profile">
                                            {this.state.selection[0] &&
                                            <ProfileOverview refreshProfile={this.refreshProfile}/>}
                                            {this.state.selection[1] &&
                                            <ProfilePersonal refreshProfile={this.refreshProfile}/>}
                                            {this.state.selection[2] &&
                                            <ProfileAddress refreshProfile={this.refreshProfile}/>}
                                            {this.state.selection[3] &&
                                            <ProfilePassword refreshProfile={this.refreshProfile}/>}
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