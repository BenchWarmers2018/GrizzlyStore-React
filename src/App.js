import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import AdminHeader from "./components/admin/pages/adminHeader";
import SideBar from "./components/admin/pages/sidebar";
import AdminMain from "./components/admin/adminMain"
import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : true,
            isSignedIn : false,
            user: null
        }
    }



    render()
    {
        return (
            <BrowserRouter>
                <div className="super_container">

                    {/*{*/}
                        {/*this.state.isSignedIn ? (*/}

                        {/*<span><div>Signed In!</div>*/}
                        {/*<button onClick={() => firebase.auth().signOut()}>Sign Out!</button>*/}
                        {/*</span>*/}
                        {/*)*/}
                        {/*: (*/}
                            {/*<StyledFirebaseAuth*/}
                                {/*uiConfig={this.uiConfig}*/}
                                {/*firebaseAuth={firebase.auth()}*/}
                            {/*/>*/}
                        {/*)*/}
                    {/*}*/}

                    {/*<div>*/}
                        {/*<Header/>*/}
                        {/*<Main/>*/}
                        {/*<Newsletter/>*/}
                    {/*</div>*/}

                    {this.state.isAdmin ?
                        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                            <AdminHeader/>
                            <SideBar/>
                            <AdminMain/>
                        </div> :
                        <div>
                            <Header/>
                            <Main/>
                            <Newsletter/>
                        </div>
                    }
                    <Footer/>
                </div>
            </BrowserRouter>

            );
        }
    }

    export default App;
