import React, {Component} from 'react';
import Image from 'react-image-resizer';
import {
    Container, Col, Row
} from 'reactstrap';
import axios from 'axios';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Background from "../../images/images_essence/bg-img/breadcumb.jpg";
import Product from "../../images/profile-pic.png";
import {fetchProfile} from "../../actions/profileActions";

class Profile extends Component {
    constructor(props) {
        super(props); // ABCD
        this.state = {
            firstName: 'Grizzly',
            lastName: 'Store',
            mobile: '045555555',
            email: null,
            called: false,
            address: '95 Bear Avenue, Victoria, Australia 3000',
        };
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

    handleProfileUpdate(event) {
        console.log(event.target.value);
    }

    render() {
        function extractImagePath(url) {
            if (url != null) {
                var array = url.split('/');
                var image_name = array[array.length - 1];
                var location = url.substring(0, url.lastIndexOf('/'));
                return [location, image_name];
            }
            return null;
        }

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => {
                images[item.replace('./', '')] = r(item);
            });
            return images;
        }

        if (this.props.profile[0] != null) {
            var imageName = this.props.profile[0].profileImage;
            console.log('Cognizant ' + this.props.profile[0]);

            var arr = extractImagePath(imageName);
            const images = importAll(require.context('../../images/profile_images', false, /\.(png|jpe?g|svg)$/));

            if (imageName != null) {
                arr = imageName.split('/');
                imageName = arr[arr.length - 1];
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-xlg-3 col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <center class="m-t-30">
                                            <Image
                                                src={images[imageName]}
                                                width={150}
                                                height={180}
                                            />
                                            <h4 className="card-title m-t-10">{this.props.profile[0].profileFirstName} {this.props.profile[0].profileLastName}</h4>
                                        </center>
                                    </div>
                                    <div>
                                        <hr/>
                                    </div>
                                    <div className="card-body">
                                        <small className="text-muted">Email address</small>
                                        <h6>{this.props.profile[0].userAccount.accountEmailAddress}</h6>
                                        <small className="text-muted p-t-30 db">Phone</small>
                                        <h6>{this.props.profile[0].profilePhoneNumber}</h6>
                                        <small className="text-muted p-t-30 db">Address</small>
                                        <h6>{this.props.profile[1].addressLine1}<br/>{this.props.profile[1].addressCity}<br/>{this.props.profile[1].addressCountry}</h6>
                                        <small className="text-muted p-t-30 db">Social Profile</small>
                                        <br/>
                                        <button className="btn btn-circle btn-secondary"><i
                                            className="fab fa-facebook-f"></i></button>
                                        <button className="btn btn-circle btn-secondary"><i
                                            className="fab fa-twitter"></i>
                                        </button>
                                        <button className="btn btn-circle btn-secondary"><i
                                            className="fab fa-youtube"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xlg-9 col-md-7">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-subtitle">Edit Details</h4>
                                        <br/>
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <label className="col-md-12"><b><i>Password</i></b></label>
                                                <div className="col-md-12">
                                                    <input type="password" placeholder="New Password"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b><i>Repeat Password</i></b></label>
                                                <div className="col-md-12">
                                                    <input type="password" placeholder="Confirm Password"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Phone No</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="123 456 7890"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select Country</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select State</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>Melbourne</option>
                                                        <option>Sydney</option>
                                                        <option>Darwin</option>
                                                        <option>Perth</option>
                                                        <option>Brisbane</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12"><b>Select City</b></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 1</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: Unit 95"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 2</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: George Street"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Address Line 3</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: Richmond"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12"><b>Postcode</b></label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="ex: 1234"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            );
        }
        return null;
        // return (
        //     <div className="doNotRemoveDiv">
        //         <h3 className="headingAlignment">User Profile</h3>
        //         <Container>
        //             <Row>
        //                 <Col xs={3} md={3}>
        //                     <div className="button-center">
        //                         <Image
        //                             src={images[imageName]}
        //                             width={150}
        //                             height={180}
        //                         />
        //                         <br/>
        //                         <button type="button" class="btn btn-primary">Edit Profile</button>
        //                         <br/><br/>
        //                         <button type="button" class="btn btn-success">View Orders</button>
        //                         <br/><br/>
        //                     </div>
        //                 </Col>
        //                 <Col xs={3} md={6}>
        //                     <br/>
        //                     <b>First Name:</b> {this.props.profile[0].profileFirstName}
        //                     <br/><br/>
        //                     <b>Last Name:</b> {this.props.profile[0].profileLastName}
        //                     <br/><br/>
        //                     <b>Phone:</b> {this.props.profile[0].profilePhoneNumber}
        //                     <br/><br/>
        //                     <b>Address:</b> {this.props.profile[1].addressLine1 + ', '
        //                 + this.props.profile[1].addressCity + ', ' + this.props.profile[1].addressCountry}
        //                     <br/><br/>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // );
    }

}

Profile.propTypes = {
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

export default connect(mapStateToProps, {fetchProfile})(Profile);

