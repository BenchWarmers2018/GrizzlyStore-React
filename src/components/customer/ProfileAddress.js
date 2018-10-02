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


class ProfileAddress extends Component{
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
        if (profileDetails.phone != "") {
            this.validatePhone(profileDetails.phone) == true ? true : (valid = false, err.push("Phone Number Invalid"));
        }
        return [valid, err];
    };






    render(){
        if (this.props.profile[0] != null) {
            let stateString = this.props.profile[1].addressState;
            let cityString = this.props.profile[1].addressCity;

            return (
                <div>
                    <h4 className="card-subtitle" style={{textAlign: 'center', color: 'black'}}>Edit
                        Address</h4>
                    <br/>
                    <form className="form-horizontal form-material" onSubmit={this.changeProfile}>
                        <div className="form-group">
                            <label className="col-md-12"><b>Phone No.</b></label>
                            <div className="col-md-12">
                                <input type="text" placeholder={this.props.profile[0].profilePhoneNumber}
                                       className="form-control form-control-line" ref={(c) => {
                                    this.phone = c;
                                }}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-12"><b>Address Line 1</b></label>
                            <div className="col-md-12">
                                <input type="text" placeholder={this.props.profile[1].addressLine1}
                                       className="form-control form-control-line" ref={(c) => {
                                    this.addressLine1 = c;
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12"><b>Address Line 2</b></label>
                            <div className="col-md-12">
                                <input type="text" placeholder={this.props.profile[1].addressLine2}
                                       className="form-control form-control-line" ref={(c) => {
                                    this.addressLine2 = c;
                                }}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12"><b>Address Line 3</b></label>
                            <div className="col-md-12">
                                <input type="text" placeholder={this.props.profile[1].addressLine3}
                                       className="form-control form-control-line" ref={(c) => {
                                    this.addressLine3 = c;
                                }}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-12"><b>Postcode</b></label>
                            <div className="col-md-12">
                                <input type="text" placeholder={this.props.profile[1].addressPostcode}
                                       className="form-control form-control-line" ref={(c) => {
                                    this.postcode = c;
                                }}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-12"><b>Select City</b></label>
                            <div className="col-sm-12">
                                <select className="form-control form-control-line"
                                        value={cityString}
                                        ref={(c) => {
                                            this.city = c;
                                        }}>
                                    <option value="Adelaide">Adelaide</option>
                                    <option value="Brisbane">Brisbane</option>
                                    <option value="Canberra">Canberra</option>
                                    <option value="Darwin">Darwin</option>
                                    <option value="Hobart">Hobart</option>
                                    <option value="Melbourne">Melbourne</option>
                                    <option value="Perth">Perth</option>
                                    <option value="Sydney">Sydney</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-12"><b>Select State</b></label>
                            <div className="col-sm-12">
                                <select className="form-control form-control-line" value={stateString} ref={(c) => {
                                    this.state = c;
                                }}>
                                    <option value="ACT">ACT</option>
                                    <option value="NSW">NSW</option>
                                    <option value="NT">NT</option>
                                    <option value="QLD">QLD</option>
                                    <option value="SA">SA</option>
                                    <option value="TAS">TAS</option>
                                    <option value="VIC">VIC</option>
                                    <option value="WA">WA</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-12"><b>Select Country</b></label>
                            <div className="col-sm-12">
                                <select className="form-control form-control-line" ref={(c) => {
                                    this.country = c;
                                }}>
                                    <option>Australia</option>
                                </select>
                            </div>
                        </div>



                        <div className="form-group">
                            <div className="col-sm-12">
                                <button className="btn btn-success">Update Address</button>
                            </div>
                        </div>
                    </form>

                </div>

            );
        }
        return null;

    }



}

ProfileAddress.propTypes = {
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

export default connect(mapStateToProps, {fetchProfile})(ProfileAddress);