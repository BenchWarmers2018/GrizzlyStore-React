import {Component} from "react";
import React from "react";
import { Switch , Route } from "react-router-dom";
import Home from "./customer/Home";
import Items from "./customer/Items";
import EachProduct from "./customer/EachItem";
import Cart from "./customer/Cart";
import Checkout from "./customer/Checkout";
import OrderConfirmation from "./customer/OrderConfirmation";
import NotFound from "./shared/NotFound.js";
import Profile from "./customer/Profile/Profile";
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path='/items/all' component={Items} />
                    <Route path='/category/:categoryName'  component={Items}/>
                    <Route path='/items/:id' component={EachProduct}/>
                    <Route path='/search/:searchText' component={Items} />
                    <Route path='/search/' component={Items} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/confirmation' component={OrderConfirmation}/>
                    <Route path='/profile' component={Profile} />
                    { /* More categories links here */ }
                    <Route path='*' component={NotFound} />
                </Switch>
            </main>
        );
    }
}

// const mapStateToProps = state => ({
//     loggedInUser: state.accounts.loggedInUser,
//     userType : state.accounts.userType,
// });

export default (Main);
