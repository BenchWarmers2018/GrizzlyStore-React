import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import Header2 from "./components/shared/Header2";
import AdminHeader from "./components/admin/pages/adminHeader";
import SideBar from "./components/admin/pages/sidebar";
import AdminMain from "./components/admin/adminMain"


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdmin : true,
        }
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
                            <Header2/>
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
