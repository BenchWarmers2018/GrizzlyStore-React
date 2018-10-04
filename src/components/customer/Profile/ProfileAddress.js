import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {fetchProfile} from "../../../actions/profileActions";

class ProfileAddress extends Component{
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

        profileData.unitNo = this.unitNo.value;
        profileData.streetNo = this.streetNo.value;
        profileData.street = this.street.value;
        profileData.streetType = this.streetType.value;
        profileData.city = this.city.value;
        profileData.postcode = this.postcode.value;
        profileData.state = this.state.value;
        profileData.country = this.country.value;

        axios.post("http://localhost:8080/user/update-profile", (profileData))
            .then((response) => {
                console.log("Updating profile successful " + response);
            })
            .catch((err) => {
                console.log("Update file unsuccessful. Error: " + err);
            })

    };

    render(){

        //Assigning variable names so props can become String
        let stateString = this.props.profile[1].addressState;
        let streetTypeString = this.props.profile[1].addressStreetType;

        return (
            <div>
                <h4 className="card-subtitle card-subtitle-profile" style={{textAlign: 'center', color: 'black'}}>Edit
                    Address</h4>
                <br/>
                <form className="form-horizontal form-material" onSubmit={this.changeProfile}>
                    <div className=" form-group form-group-address label-address-unitno">
                        <label className="col-md-12 text-muted label-padding-left">UNIT NUMBER<small> (optional)</small></label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[1].addressUnitNo}
                                   className="form-control form-control-line" ref={(c) => {
                                this.unitNo = c;
                            }}/>
                        </div>
                    </div>
                    <div className=" form-group  form-group-address label-address-streetno">
                        <label className="col-md-12 text-muted label-padding-left">STREET NUMBER</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[1].addressStreetNo}
                                   className="form-control form-control-line" ref={(c) => {
                                this.streetNo = c;
                            }}/>
                        </div>
                    </div>
                    <div className="form-group form-group-address">
                        <label className="col-md-12 text-muted label-padding-left">STREET NAME</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[1].addressStreet}
                                   className="form-control form-control-line" ref={(c) => {
                                this.street = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group form-group-address">
                        <label className="col-sm-12 text-muted label-padding-left">STREET TYPE</label>
                        <div className="col-sm-12">
                            <select className="form-control form-control-line"
                                    value={streetTypeString}
                                    ref={(c) => {
                                        this.streetType = c;
                                    }}>
                                <option value="Ally">Ally</option>
                                <option value="Arc">Arc</option>
                                <option value="Bvd">Bvd</option>
                                <option value="Bypa">Bypa</option>
                                <option value="Cct">Cct</option>
                                <option value="Cl">Cl</option>
                                <option value="Crn">Crn</option>
                                <option value="Ct">Ct</option>
                                <option value="Cres">Cres</option>
                                <option value="Cds">Cds</option>
                                <option value="Dr">Dr</option>
                                <option value="Esp">Esp</option>
                                <option value="Grn">Grn</option>
                                <option value="Gr">Gr</option>
                                <option value="Hwy">Hwy</option>
                                <option value="Jnc">Jnc</option>
                                <option value="Lane">Lane</option>
                                <option value="Link">Link</option>
                                <option value="Mews">Mews</option>
                                <option value="Nook">Nook</option>
                                <option value="Pde">Pde</option>
                                <option value="Pl">Pl</option>
                                <option value="Rdge">Rdge</option>
                                <option value="Rd">Rd</option>
                                <option value="Sq">Sq</option>
                                <option value="St">St</option>
                                <option value="Tce">Tce</option>
                            </select>
                        </div>
                    </div>


                    <div className="form-group form-group-address">
                        <label className="col-sm-12 text-muted label-padding-left">CITY</label>
                        <div className="col-sm-12">
                            <input type="text" placeholder={this.props.profile[1].addressCity}
                                   className="form-control form-control-line" ref={(c) => {
                                this.city = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group form-group-address">
                        <label className="col-md-12 text-muted label-padding-left">POSTCODE</label>
                        <div className="col-md-12">
                            <input type="text" placeholder={this.props.profile[1].addressPostcode}
                                   className="form-control form-control-line" ref={(c) => {
                                this.postcode = c;
                            }}/>
                        </div>
                    </div>

                    <div className="form-group form-group-address">
                        <label className="col-sm-12 text-muted label-padding-left">STATE</label>
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

                    <div className="form-group form-group-address">
                        <label className="col-sm-12 text-muted label-padding-left">COUNTRY</label>
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
                            <button className="btn btn-success-muted">UPDATE</button>
                        </div>
                    </div>
                </form>

            </div>

        );
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