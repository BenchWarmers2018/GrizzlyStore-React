import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {
    Container, Col, Row
} from 'reactstrap';
import axios from 'axios';
import {connect} from "react-redux";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Background from "../../../images/images_essence/bg-img/breadcumb.jpg";
import Product from "../../../images/profile-pic.png";
import {fetchProfile} from "../../../actions/profileActions";


class ProfilePassword extends Component {
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

        profileData.pw = this.PW.value;
        profileData.confirmPW = this.confirmPW.value;

        console.log(JSON.stringify(profileData) + " profile Data PB");

        var response = this.checkValidity(profileData);
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

    checkValidity = (profileDetails) => {
        var valid = true;
        var err = [];
        console.log(JSON.stringify(profileDetails) + '\nchecking validity');
        if (profileDetails.pw != "" && profileDetails.confirmPW != "") {
            (profileDetails.pw == profileDetails.confirmPW) ? (true) : (valid = false, err.push("Passwords don't match"));
        }
        return [valid, err];
    };

    render(){

        return(
            <div>
                <h4 className="card-subtitle" style={{textAlign: 'center', color: 'black'}}>Change Password</h4>
                <br/>
                <form className="form-horizontal form-material" onSubmit={this.changeProfile}>
                    <div className="form-group">
                        <label className="col-md-12"><b><i>Enter New Password</i></b></label>
                        <div className="col-md-12">
                            <input type="password" placeholder="New Password"
                                   className="form-control form-control-line" ref={(c) => {
                                this.PW = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-12"><b><i>Confirm New Password</i></b></label>
                        <div className="col-md-12">
                            <input type="password" placeholder="Confirm Password"
                                   className="form-control form-control-line" ref={(c) => {
                                this.confirmPW = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <button className="btn btn-success">Update Password</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }


}
ProfilePassword.propTypes = {
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

export default connect(mapStateToProps, {fetchProfile})(ProfilePassword);