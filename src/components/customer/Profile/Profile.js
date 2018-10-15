import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import BackgroundProfile from "../../../images/profile_images/background.png";
import Background from "../../../images/images_essence/bg-img/breadcumb.jpg";
import {Button} from 'react-bootstrap';
import {fetchProfile} from "../../../actions/profileActions";
import ProfileOverview from "./ProfileOverview.js"
import NotFound from "../../shared/NotFound";
import ProfileAddress from "./ProfileAddress";
import ProfilePersonal from "./ProfilePersonal";
import ProfilePassword from "./ProfilePassword";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "active",
            menuOptions: ["Overview", "Personal Details", "Shipping Address", "Change Password"],
            selected: "Overview",
        };
    }


    refreshProfile = () => {
        //this.props.fetchProfile();
        //console.log('UPDATED PROFILE ' + JSON.stringify(this.props.profile));
        this.forceUpdate();
    }


    handleClick = (e) => {
        console.log(e.target.value);
        this.setState({selected: e.target.value})

    }

    render() {
        const userType = this.props.userType;
        const account = this.props.account;
        let profile = null;
        let selectedOption;
        if (userType.length > 0 && account !== null) {
            profile = account.profile;
            if (this.state.selected === "Overview")
                selectedOption = <ProfileOverview data={account}/>
            else if(this.state.selected === "Personal Details")
                selectedOption = <ProfilePersonal data={account}/>
            else if(this.state.selected === "Shipping Address")
                selectedOption = <ProfileAddress data={profile.address}/>
            else if(this.state.selected === "Change Password")
                selectedOption = <ProfilePassword data={account}/>

        }

        console.log(profile);

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

                {(profile !== null) ?

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-xlg-3 col-md-5">
                                <div className="card">

                                    <div className=" profile-img-name">
                                        <Image src={profile.profileImage} width={150} height={180}/>
                                        <h4 className="card-title m-t-10">{profile.profileFirstName}</h4>
                                    </div>

                                    <div>
                                        <hr/>
                                    </div>

                                    <div className="profile-usermenu">
                                        <ul className="nav profile-nav">
                                            {this.state.menuOptions.map(option =>
                                                <li>
                                                    <Button value={option} bsSize="large" onClick={this.handleClick}
                                                            block>{option}</Button>
                                                </li>
                                            )}
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
    profile: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    account: state.accounts.loggedInUser,
    userType: state.accounts.userType,
    fetched: state.profiles.fetched,
    fetching: state.profiles.fetching,
    error: state.profiles.error
});

export default connect(mapStateToProps, {fetchProfile})(Profile);
