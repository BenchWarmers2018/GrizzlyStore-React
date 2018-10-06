import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile} from "../../../actions/profileActions";

class ProfilePersonal extends Component{
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

    changeProfile = (event) => {
        event.preventDefault();

        let profileData = {};

        profileData.firstName = this.firstName.value;
        profileData.lastName = this.lastName.value;
        profileData.phone = this.phone.value;

        let response = this.checkValidity(profileData);
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
        let re = /^\d{10}$/;
        return re.test(String(phone).toLowerCase());
    };

    checkValidity = (profileDetails) => {
        let valid = true;
        let err = [];
        console.log(JSON.stringify(profileDetails) + '\nchecking validity');
        if (profileDetails.phone != "") {
            this.validatePhone(profileDetails.phone) == true ? true : (valid = false, err.push("Phone Number Invalid"));
        }
        return [valid, err];
    };

    render(){
        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Personal Details</h4>

                <br/>

                <form className="form-horizontal form-material" onSubmit={this.changeProfile}>

                    <div className="form-group form-group-personal">
                        <label className="col-md-12 text-muted label-padding-left">FIRST NAME</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[0].profileFirstName}
                                   className="form-control form-control-line" ref={(c) => {
                                this.firstName = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group form-group-personal">
                        <label className="col-md-12 text-muted label-padding-left">LAST NAME</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[0].profileLastName}
                                   className="form-control form-control-line" ref={(c) => {
                                this.lastName = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group form-group-personal">
                        <label className="col-md-12 text-muted label-padding-left">PHONE NUMBER</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[0].profilePhoneNumber}
                                   className="form-control form-control-line" ref={(c) => {
                                this.phone = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <button className="btn btn-success-muted ">UPDATE</button>
                        </div>
                    </div>

                </form>
            </div>

        );
    }

}

ProfilePersonal.propTypes = {
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

export default connect(mapStateToProps, {fetchProfile})(ProfilePersonal);