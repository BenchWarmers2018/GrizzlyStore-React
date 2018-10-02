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

class ProfileOverview extends Component {

    componentWillMount() {
        this.props.fetchProfile();
    }

    render() {

        if (this.props.profile[0] != null) {
            var imageName = this.props.profile[0].profileImage;
            console.log('Cognizant ' + this.props.profile[0]);

            let stateString = this.props.profile[1].addressState;
            let cityString = this.props.profile[1].addressCity;

            return (
                <div>
                    <div className="card-body">
                        <h4 className="card-subtitle" style={{textAlign: 'center', color: 'black'}}>Profile Overview</h4>
                        <br/>

                        <small className="text-muted">Email address</small>
                        <h6>{this.props.profile[0].userAccount.accountEmailAddress}</h6>
                        <small className="text-muted p-t-30 db">Phone</small>
                        <h6>{this.props.profile[0].profilePhoneNumber}</h6>
                        <small className="text-muted p-t-30 db">Address</small>
                        <h6>{this.props.profile[1].addressLine1}<br/>{this.props.profile[1].addressCity},
                            {this.props.profile[1].addressState}
                            <br/>{this.props.profile[1].addressCountry}
                        </h6>
                    </div>


                </div>


            );


        }
        return null;

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