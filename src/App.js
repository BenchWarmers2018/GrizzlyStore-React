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
import {BrowserRouter} from "react-router-dom";
import Spinner from "./components/microComponents/Spinner";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : true,

            currentUser: null,
            isAuthenticated: false,
            isLoading: false,

            isSignedIn : false,
            user: null

        }
    }

    componentDidMount()
    {
        this.props.getCurrentUser();
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.continueLogin !== this.props.continueLogin)
        {
            this.props.getCurrentUser();
        }

    }

    render()
    {
        return (
            <BrowserRouter>
                <div className="super_container">

                    {this.state.isAdmin ?
                        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                            <AdminHeader/>
                            <SideBar/>
                            {(this.props.fetching) ?
                                <Spinner/>
                                :
                                <AdminMain />
                            }
                        </div> :
                        <div>
                            <Header data={this.props.loggedInUser} type={this.props.userType} />
                            {(this.props.fetching) ?
                            <Spinner/>
                                :
                                <Main/>
                            }
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
    loggedInUser: state.accounts.loggedInUser,
    continueLogin: state.accounts.continueLogin,
    userType : state.accounts.userType,
    fetching : state.accounts.fetching,
});

const mapDispatchToProps = {
    getCurrentUser,
};

export default connect (mapStateToProps, mapDispatchToProps)(App);
