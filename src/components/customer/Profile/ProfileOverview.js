import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile} from "../../../actions/profileActions";

class ProfileOverview extends Component {

    render() {

<<<<<<< Updated upstream
        const account = this.props.data;
        const address = this.props.data.profile.address;
=======
        //Assigning variable names to props
        let unitNo = this.props.profile[0].profile.address.addressUnitNo;
        let streetNo = this.props.profile[0].profile.address.addressStreetNo;
        let street = this.props.profile[0].profile.address.addressStreet;
        let streetType = this.props.profile[0].profile.address.addressStreetType;
        let city = this.props.profile[0].profile.address.addressCity;
        let postcode = this.props.profile[0].profile.address.addressPostcode;
        let state = this.props.profile[0].profile.address.addressState;
        let country = this.props.profile[0].profile.address.addressCountry;
        let phone = this.props.profile[0].profile.profilePhoneNumber;
        let email = this.props.profile[0].accountEmailAddress;

        //Piecing together the address
        let combinedAddressString = "";

        //If Unit Number doesn't exist
        if(unitNo != null && streetNo != null){
            combinedAddressString =
                <h5 className="profile-overview-field">
                    {unitNo}/{streetNo} {street} {streetType}<br/>
                    {city}, {postcode}<br/>
                    {state}, {country}
                </h5>;
        }
        //Checks if Address exists or not, because if StreetNo exists, address also has to exist
        else if (streetNo != null){
            combinedAddressString =
                <h5 className="profile-overview-field">
                    {streetNo} {street} {streetType}<br/>
                    {city}, {postcode}<br/>
                    {state}, {country}
                </h5>;
        }
        //Prints "N/A" if address doesn't exist
        else{
            combinedAddressString =
                <h5 className="profile-overview-field">N/A</h5>;
        }
>>>>>>> Stashed changes

        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Profile Overview</h4>
                <br/>
                <div className="profile-overview-mainDiv">
                    <div className="profile-overview-field-div">
                        <label className="text-muted">EMAIL ADDRESS</label>
                        <h5 className="profile-overview-field">{account.username}</h5>
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">CONTACT PHONE</label>
                        <h5 className="profile-overview-field">{account.profile.profilePhoneNumber}</h5>
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">PRIMARY ADDRESS</label>
                        {(address !== null) ?

                        <h5 className="profile-overview-field">
                            {(address.addressUnitNo !== null) ? address.addressUnitNo+"/" : ""}
                            {address.addressStreetNo} {address.addressStreet} {address.addressStreetType}<br/>
                            {address.addressCity}, {address.addressState}<br/>
                            {address.addressCountry} {address.addressPostcode}
                        </h5>
                            :
                            <h5>Please add your address from the link on the left</h5>

                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default ProfileOverview;