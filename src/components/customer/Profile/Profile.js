import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Background from "../../../images/images_essence/bg-img/breadcumb.jpg";
import {Button} from 'react-bootstrap';
import { fetchProfile, updateAddress, submitPassword, resetErrorsAndStatus, submitPersonalDetails } from "../../../actions/profileActions";
import ProfileOverview from "./ProfileOverview.js"
import NotFound from "../../shared/NotFound";
import ProfileAddress from "./ProfileAddress";
import ProfilePersonal from "./ProfilePersonal";
import ProfilePassword from "./ProfilePassword";
import {errorNotification, successNotification} from "../../microComponents/Notifications";
import NoProfilePic from "../../../images/profile_images/no-user-picture-icon.png";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "active",
            menuOptions: ["Overview", "Personal Details", "Shipping Address", "Change Password"],
            selected: "Overview",
        };
    }

    componentDidMount(){
        if(this.props.userType.length >0 && this.props.loggedInUser !== null && typeof this.props.loggedInUser !== "undefined")
        {
            this.props.fetchProfile(this.props.loggedInUser.id);
        }
    }

    componentDidUpdate(prevProps){
        console.log("Logged in account is ", this.props.loggedInAccount);
        if(prevProps.continueLogin !== this.props.continueLogin){
            console.log("Tried this");
            if(this.props.userType.length >0 && this.props.loggedInUser !== null && typeof this.props.loggedInUser !== "undefined")
            {
                this.props.fetchProfile(this.props.loggedInUser.id);
            }
        }

        if(this.props.status.length > 0)
        {
            if(this.props.status === "OK")
            {
                successNotification("Password Updated Successfully");
            }
            else
            {
                errorNotification("Password update unsuccessfull.", this.props.errors[0])
            }
            this.props.resetErrorsAndStatus();
        }

    }


    handleClick = (e) => {
        console.log(e.target.value);
        this.setState({selected: e.target.value})

    }

    handleProfileChange= (profileChanges) => {
        profileChanges["accountID"] = this.props.loggedInAccount[0].idAccount;
        this.props.submitPersonalDetails(profileChanges);
    }

    handleAddressChange= (address) => {
        const account = {
            "idAccount": this.props.loggedInAccount[0].idAccount,
            "profile" : {
                "address": address
            }
        }
        this.props.updateAddress(account);
        console.log(account);
    }

    handlePasswordChange = (password) => {
        this.props.submitPassword(password, this.props.loggedInAccount[0].idAccount)
    }

    render() {

        const accountArray = this.props.loggedInAccount;
        let profile = null;
        let account = null;
        let selectedOption= <div>"No details of account found"</div>;
        if(accountArray !== null && accountArray.length > 0)
        {
            console.log(accountArray);
            account = accountArray[0];

            if (this.props.userType.length > 0 && account !== null) {
                profile = account.profile;
                if (this.state.selected === "Overview")
                    selectedOption = <ProfileOverview data={account}/>
                else if(this.state.selected === "Personal Details")
                    selectedOption = <ProfilePersonal onProfileChange={this.handleProfileChange} data={profile}/>
                else if(this.state.selected === "Shipping Address")
                    selectedOption = <ProfileAddress onAddressChange={this.handleAddressChange} data={profile.address}/>
                else if(this.state.selected === "Change Password")
                    selectedOption = <ProfilePassword onPasswordChange={this.handlePasswordChange}/>
                console.log(profile);
            }
        }
        else
        {
            return(<div><h2>No Account found.</h2></div>)

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

                {(profile !== null && typeof profile !== "undefined") ?

                    <div className="container-fluid ">
                        <div className="row profile-whole-div">
                            <div className="profile-nav-div col-lg-4 col-xlg-3 col-md-5">
                                <div className="card">

                                    <div className=" profile-img-name">

                                        {
                                            profile.profileImage != null ? (
                                                <Image src={(profile.profileImage)} width={150} height={180}/>
                                            ): (
                                                <Image className="no-profile-pic" src={(NoProfilePic)} width={150} height={180}/>)
                                        }

                                        {
                                            profile.profileFirstName != null ? (
                                                <h4 className="profile-name-nav card-title m-t-10">{profile.profileFirstName}</h4>
                                            ): (
                                                <h4 className="profile-name-nav card-title m-t-10">{account.accountEmailAddress}</h4>)
                                        }

                                    </div>

                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="profile-usermenu">
                                        <ul className="nav profile-nav">
                                            {this.state.menuOptions.map(option =>

                                                <li key={option}>
                                                    <Button id="profile-list-option"  aria-pressed="true" value={option} bsSize="large" onClick={this.handleClick}
                                                            block>{option}</Button>
                                                </li>
                                            )}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-content-div col-lg-8 col-xlg-9 col-md-7">
                                <div className="card">
                                    <div className="card-body card-body-profile">
                                        {selectedOption}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <NotFound/>
                }
            </div>
        );
    }
}

Profile.propTypes = {
    fetchProfile: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    loggedInUser: state.accounts.loggedInUser,
    userType: state.accounts.userType,
    loggedInAccount: state.profiles.loggedInAccount,
    continueLogin: state.accounts.continueLogin,
    fetched: state.profiles.fetched,
    fetching: state.profiles.fetching,
    errors: state.profiles.errors,
    status: state.profiles.status,
});

const mapDispatchToProps = {
    fetchProfile,
    updateAddress,
    submitPassword,
    resetErrorsAndStatus,
    submitPersonalDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
