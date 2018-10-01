import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import AdminHeader from "./components/admin/pages/adminHeader";
import SideBar from "./components/admin/pages/sidebar";
import AdminMain from "./components/admin/adminMain"
import { getCurrentUser } from "./actions/accountAction"


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : false,
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
        // this.handleLogout = this.handleLogout.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    loadCurrentUser = () => {
        this.setState({
            isLoading: true
        });
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                });
            }).catch(error => {
            this.setState({
                isLoading: false
            });
        });
    }

    componentWillMount() {
        this.loadCurrentUser();
    }




    render()
    {
        return (
                <div className="super_container">
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

        );
    }
}

export default App;
