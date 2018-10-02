import React, {Component} from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from 'axios';
import {fetchGoogleAccounts} from "../../actions/googleaccountAction";
import connect from "react-redux/es/connect/connect";

const firebaseAuthKey = "firebaseAuthInProgress";

class GoogleLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            googleEmailAddress: "",
            isSignedIn: false,
            user: null,
            googleUser: null,
            googleUID: ""
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

    }

    // handleGoogleLogin() {
    //     loginWithGoogle()
    //         .catch(function (error) {
    //             alert(error); // or show toast
    //             localStorage.removeItem(firebaseAuthKey);
    //         });
    //     localStorage.setItem(firebaseAuthKey, "1");
    // }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                //Logging user to frontend console
                console.log("User signed in: ", JSON.stringify(user));
                // so apparently "qa" user.qa is accessToken
                console.log(user.qa);
                //Creating user to pass through to backend
                const googleUser = {idGoogleAccount: user.uid, googleAccountEmailAddress: user.email};
                const appTokenKey = "token";
                localStorage.setItem(appTokenKey, user.qa);
                //Dispatching googleUser to Action file
                this.props.dispatch(fetchGoogleAccounts(googleUser));
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.isSignedIn ? (
                            <span className="signed-in-google">
                                <div>Signed In!</div>
                                <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                            </span>
                        )
                        : (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                        )
                }
            </div>
        )
    }

}

function mapStateToProps(state, ownProps) {
    googleaccount: state.googleaccounts
};

export default connect(mapStateToProps)(GoogleLogin);