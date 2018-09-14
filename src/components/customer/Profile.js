import React, { Component } from 'react';
import Image from 'react-image-resizer';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';
import {Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from "../../images/profile-pic.png";

class Profile extends Component {
    render() {
        return (
            <div className="doNotRemoveDiv">
                <h3>Profile viewing page here</h3>
                <br/><br/><br/>
                <Container>
                  <Row>
                    <Col xs={3} md={3}>
                      <div className="button-center">
                        <Image
                          src= {Product}
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
                      <b>First Name:</b> Grizzly
                      <br/><br/>
                      <b>Last Name:</b> Store
                      <br/><br/>
                      <b>Phone:</b> 045555555
                      <br/><br/>
                      <b>Address:</b> 95 Bear Avenue, Victoria, Australia 3000
                      <br/><br/>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;
