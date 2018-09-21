import React, { Component } from 'react';
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Newsletter from "./components/shared/Newsletter";
import Main from "./components/Main";
import Header2 from "./components/shared/Header2";


class App extends Component {
    render() {
        return (
                <div className="super_container">
                        <Header2/>
                        <Main/>
                        <Newsletter/>
                    <Footer/>
                </div>

        );
    }
}

export default App;
