import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile} from "../../../actions/profileActions";

class ProfileOverview extends Component {

    componentWillMount() {
        this.props.fetchProfile();
    }

    render() {

        //Assigning variable names to props
        let unitNo = this.props.profile[1].addressUnitNo;
        let streetNo = this.props.profile[1].addressStreetNo;
        let street = this.props.profile[1].addressStreet;
        let streetType = this.props.profile[1].addressStreetType;
        let city = this.props.profile[1].addressCity;
        let postcode = this.props.profile[1].addressPostcode;
        let state = this.props.profile[1].addressState;
        let country = this.props.profile[1].addressCountry;
        let phone = this.props.profile[0].profilePhoneNumber;
        let email = this.props.profile[0].userAccount.accountEmailAddress;

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

        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Profile Overview</h4>
                <br/>
                <div className="profile-overview-mainDiv">
                    <div className="profile-overview-field-div">
                        <label className="text-muted">EMAIL ADDRESS</label>
                        <h5 className="profile-overview-field">{email}</h5>
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">CONTACT PHONE</label>
                        <h5 className="profile-overview-field">{phone}</h5>
                    </div>

                    <div className="profile-overview-field-div">
                        <label className="text-muted p-t-30 db">PRIMARY ADDRESS</label>
                        {combinedAddressString}
                    </div>
                </div>
            </div>
        );
    }
}
ProfileOverview.propTypes = {
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

export default connect(mapStateToProps, {fetchProfile})(ProfileOverview);