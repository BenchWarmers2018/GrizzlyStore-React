import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Autocomplete from 'react-google-autocomplete';
import {errorNotification, successNotification} from "../../microComponents/Notifications";



class ProfileAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAddress: null,
        }
    }

    handleUpdate = () => {
        console.log(this.state.newAddress);
        if(this.state.newAddress !== null && typeof this.state.newAddress !== "undefined")
        {
            if(typeof this.state.newAddress.address_components !== "undefined")
            {
                const addressList = this.state.newAddress.address_components;
                const fullAddress = {
                    addressStreetNo: addressList[0].long_name,
                    addressStreet: addressList[1].long_name,
                    addressCity: addressList[2].long_name,
                    addressState: addressList[4].short_name,
                    addressCountry: addressList[5].long_name,
                    addressPostcode: addressList[6].long_name,
                }
                //Passing new address to parent component.
                this.props.onAddressChange(fullAddress);

                successNotification("Address Updated Successfully.");
            }
            else {
                errorNotification("Address Update Failed", "Please choose a valid address from the Suggestions.");
            }
        }
        else {
            errorNotification("Address Update Failed", "Please choose a valid address from the Suggestions.");
        }
        this.setState({newAddress : null});
    }

    render() {
        const address = this.props.data;

        return (
            <div style={{minHeight: "500px"}}>
                <h3 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Edit
                    Address</h3>
                <br/>
                <div className="profile-overview-field-div profile-overview-field-div-address">
                    <div className="profile-address-content-div">

                        <label className="text-muted p-t-30 db">PRIMARY ADDRESS</label>
                        {(address !== null) ?

                            <h5 className="profile-overview-field">
                                {(address.addressUnitNo !== null) ? address.addressUnitNo+"/" : ""}
                                {address.addressStreetNo} {address.addressStreet} {address.addressStreetType}<br/>
                                {address.addressCity}, {address.addressState}<br/>
                                {address.addressCountry} {address.addressPostcode}
                            </h5>
                            :
                            <h5>N/A <p className="text-muted">Address not saved. Please add below.</p></h5>

                        }
                    </div>
                </div>

                <div className="profile-address-autocomplete">
                    <Autocomplete
                        className = "address-input"
                        onPlaceSelected={(place) => {
                            this.setState({newAddress : place});
                        }}
                        types={[]}
                        componentRestrictions={{country: "au"}}
                    />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12" style={{bottom : "10%", position: "absolute"}}>
                    <button onClick={this.handleUpdate} className="btn btn-success-muted btn-block">UPDATE ADDRESS</button>
                </div>
            </div>

        );
    }
}


export default (ProfileAddress)
