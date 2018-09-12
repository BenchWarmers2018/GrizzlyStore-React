import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";


class App extends Component {
    render() {
        return (
                <div className="super_container">
                    <div id="content-wrap">
                        <Header/>
                        <Main/>
                        <Newsletter/>
                    </div>
                    <Footer/>
                </div>

        );
    }
}

export default App;
