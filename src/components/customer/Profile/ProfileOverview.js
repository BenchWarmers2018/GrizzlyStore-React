import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile} from "../../../actions/profileActions";

class ProfileOverview extends Component {

    render() {

        const account = this.props.data;
        const address = this.props.data.profile.address;

        return (
            <div className="profile-overview-mainDiv">
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Profile Overview</h4>
                <br/>
                <div className="profile-overview-mainDiv">
                    <div className="profile-overview-field-div">
                        <label className="text-muted">EMAIL ADDRESS</label>
                        <h5 className="profile-overview-field">{account.accountEmailAddress}</h5>
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">CONTACT PHONE</label>
                        {
                            account.profile.profilePhoneNumber ? (
                                <h5 className="profile-overview-field">{account.profile.profilePhoneNumber}</h5>) :(
                                <h5 className="profile-overview-field">N/A<p className="text-muted">Add in Profile Settings</p></h5>
                            )

                        }
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">PRIMARY ADDRESS</label>
                        {(address !== null) ? (

                            <h5 className="profile-overview-field">
                                {(address.addressUnitNo !== null) ? address.addressUnitNo+"/" : ""}
                                {address.addressStreetNo} {address.addressStreet} {address.addressStreetType}<br/>
                                {address.addressCity}, {address.addressState}<br/>
                                {address.addressCountry} {address.addressPostcode}
                            </h5>
                        ):(
                            <h5 className="profile-overview-field">N/A<p className="text-muted">Add in Profile Settings</p></h5>
                        )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default ProfileOverview;
