import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import AdminHeader from "./components/admin/pages/adminHeader";
import SideBar from "./components/admin/pages/sidebar";
import AdminMain from "./components/admin/adminMain"

import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/accountAction"
import { API_BASE_URL, ACCESS_TOKEN } from './';
import {getVisibleItems} from "./selectors/itemsSelector";
import accounts from "./reducers/accountReducer";


import {BrowserRouter} from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import axios from "axios";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : false,

            currentUser: null,
            isAuthenticated: false,
            isLoading: false,

            isSignedIn : false,
            user: null

        }
        // this.handleLogout = this.handleLogout.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    // loadCurrentUser = () => {
    //     this.setState({
    //         isLoading: true
    //     });
    //     getCurrentUser()
    //         .then(response => {
    //             this.setState({
    //                 currentUser: response,
    //                 isAuthenticated: true,
    //                 isLoading: false
    //             });
    //         }).catch(error => {
    //         this.setState({
    //             isLoading: false
    //         });
    //     });
    // }

    // componentWillMount() {
    //     this.loadCurrentUser();
    // }

    componentDidMount()
    {
        this.props.getCurrentUser();
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.token !== this.props.token)
        {
            if(nextProps.loggedInUser !== this.props.loggedInUser)
            {
                this.setState({currentUser: nextProps.loggedInUser});
                console.log(nextProps.loggedInUser);
            }

        }

    }

    // handleLogin = () => {
    //     this.loadCurrentUser();
    //     this.props.history.push("/");
    // }
    //
    // handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    //     localStorage.removeItem(ACCESS_TOKEN);
    //
    //     this.setState({
    //         currentUser: null,
    //         isAuthenticated: false
    //     });
    //
    //     this.props.history.push(redirectTo);
    //
    // }




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
                            <AdminMain />
                        </div> :
                        <div>
                            {console.log(this.props.loggedInUser)}
                            <Header data={this.props.loggedInUser} />
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


const mapStateToProps = state => ({
    tokenObject: state.accounts.token,
    loggedInUser: state.accounts.summaryAccount,
});

const mapDispatchToProps = {
    getCurrentUser,
}

export default connect (mapStateToProps, mapDispatchToProps)(App);

