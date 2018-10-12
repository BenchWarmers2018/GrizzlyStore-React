import React, {Component} from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from 'axios';
import {fetchGoogleAccounts} from "../../actions/googleaccountAction";
import connect from "react-redux/es/connect/connect";

export class GoogleLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            googleEmailAddress: "",
            isSignedIn: false,
            user: null,
            googleUser: null,
            googleUID: "",
        };
    }

    //Configuration for Firebase
    uiConfig = {
        signInFlow: "popup",
        // Types of signin, for now, only google
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],

        callbacks: {
            signInSuccessWithAuthResult: () => false
        }

    };

    render() {

        return (
            <div>
                {
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />

                }
            </div>
        )
    }

}



export default (GoogleLogin);