import React, { Component } from 'react';
import Image from 'react-image-resizer';
import {
  Container, Col, Row
} from 'reactstrap';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Product from "../../images/profile-pic.png";
import {fetchProfile} from "../../actions/profileActions";

class Profile extends Component {
    constructor(props) {
        super(props); // ABCD
        this.state = {
            firstName: 'Grizzly',
            lastName: 'Store',
            mobile: '045555555',
            address: '95 Bear Avenue, Victoria, Australia 3000',
        };
    }

    componentWillMount() {
        this.props.fetchProfile();
    }

    render() {
        const status = this.props.profile.profileImage;

        function extractImagePath(url) {
            if (url != null) {
                var array = url.split('/');
                var image_name = array[array.length-1];
                var location = url.substring(0, url.lastIndexOf('/'));
                return [location, image_name];
            }
            return null;
        }

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
            return images;
        }

        var arr = extractImagePath(status);
        const images = importAll(require.context('../../images/profile_images', false, /\.(png|jpe?g|svg)$/));

        var imageName = this.props.profile.profileImage;
        if (imageName != null) {
            arr = imageName.split('/');
            imageName = arr[arr.length-1];
        }

        return (
            <div className="doNotRemoveDiv">
                <h3 className="headingAlignment">User Profile</h3>
                <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <div className="button-center">
                        <Image
                          src={images[imageName]}
                          width={150}
                          height={180}
                        />
                        <br/>
                        <button type="button" class="btn btn-primary">Edit Profile</button>
                        <br/><br/>
                        <button type="button" class="btn btn-success">View Orders</button>
                        <br/><br/>
                      </div>
                    </Col>
                    <Col xs={3} md={6}>
                      <br/>
                      <b>First Name:</b> {this.props.profile.profileFirstName}
                      <br/><br/>
                      <b>Last Name:</b> {this.props.profile.profileLastName}
                      <br/><br/>
                      <b>Phone:</b> {this.props.profile.profilePhoneNumber}
                      <br/><br/>
                      <b>Address:</b> {this.state.address}
                      <br/><br/>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

Profile.propTypes= {
    fetchProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profiles.profile,
    fetched: state.profiles.fetched,
    fetching :state.profiles.fetching,
    error: state.profiles.error
});

export default connect(mapStateToProps, {fetchProfile})(Profile);

