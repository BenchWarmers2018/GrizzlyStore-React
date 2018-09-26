import React, {Component} from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from 'axios';
import {fetchGoogleAccounts} from "../../actions/googleaccountAction"
import connect from "react-redux/es/connect/connect";

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

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn: !!user
            })

            //Creating user to pass through to backend
            const googleUser = {idGoogleAccount: user.uid, googleAccountEmailAddress: user.email};

            //Logging user to frontend console
            console.log(user)

            //Dispatching googleUser to Action file
            this.props.dispatch(fetchGoogleAccounts(googleUser));
        })
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