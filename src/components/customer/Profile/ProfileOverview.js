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
        let email = this.props.profile[0].profileEmailAddress;

        //Piecing together the address
        let combinedAddressString = "";

        //If Unit Number doesn't exist
        if(unitNo != null && streetNo != null){
            combinedAddressString =
                <h6>
                    {unitNo}/{streetNo} {street} {streetType}<br/>
                    {city}, {postcode}<br/>
                    {state}, {country}
                </h6>;
        }
        //Checks if Address exists or not, because if StreetNo exists, address also has to exist
        else if (streetNo != null){
            combinedAddressString =
                <h6>
                    {streetNo} {street} {streetType}<br/>
                    {city}, {postcode}<br/>
                    {state}, {country}
                </h6>;
        }
        //Prints "N/A" if address doesn't exist
        else{
            combinedAddressString =
                <h6>N/A</h6>;
        }

        return (
            <div>
                <div className="card-body">
                    <h4 className="card-subtitle" style={{textAlign: 'center', color: 'black'}}>Profile Overview</h4>
                    <br/>

                    <small className="text-muted">Email address</small>
                    <h6>{email}</h6>

                    <small className="text-muted p-t-30 db">Phone</small>
                    <h6>{phone}</h6>

                    <small className="text-muted p-t-30 db">Primary Address</small>
                    {combinedAddressString}

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