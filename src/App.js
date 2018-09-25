import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import AdminHeader from "./components/admin/pages/adminHeader";
import SideBar from "./components/admin/pages/sidebar";
import AdminMain from "./components/admin/adminMain"
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from "axios";


firebase.initializeApp({
    apiKey: "AIzaSyAj2rJNz3nFOC8hJS8b0mCzAkyqumwlMYY",
    authDomain: "grizzly-store-bw.firebaseapp.com",
    databaseURL: "https://grizzly-store-bw.firebaseio.com",
    projectId: "grizzly-store-bw",
    storageBucket: "grizzly-store-bw.appspot.com",
    messagingSenderId: "925784889995"
})


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : false,
            isSignedIn : false,
            user: null
        }
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],

        callbacks:{
            signInSuccess: () => false
        }

    }

    componentDidMount() {
        console.log("COMPONENT IS MOUNTING NOW")

        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignedIn : !!user
            })

            console.log("HAS SET STATE OF USER");
            axios.post("http://localhost:8083/googlelogin/googleauthenticate",user)
                .then((res) => {
                    console.log(user.uid);
                    console.log(user.displayName);
                    console.log(user.email);
                })
            ;

            console.log("WASSSUP BITACH")
        })}

        render()
        {
            return (
                <div className="super_container">

                    {this.state.isSignedIn ? (

                            <span><div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                        </span>

                        )
                        :
                        (
                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={firebase.auth()}
                            />

                        )

                    }

                    <div>
                        <Header/>
                        <Main/>
                        <Newsletter/>
                    </div>

                    {/*{this.state.isAdmin ?*/}
                    {/*<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">*/}
                    {/*<AdminHeader/>*/}
                    {/*<SideBar/>*/}
                    {/*<AdminMain/>*/}
                    {/*</div> :*/}
                    {/*<div>*/}
                    {/*<Header/>*/}
                    {/*<Main/>*/}
                    {/*<Newsletter/>*/}
                    {/*</div>*/}
                    {/*}*/}
                    <Footer/>
                </div>

            );
        }
    }

    export default App;
