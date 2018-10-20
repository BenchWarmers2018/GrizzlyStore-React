import {Component} from "react";
import React from "react";
import { Switch , Route } from "react-router-dom";
import Home from "./customer/Home";
import Items from "./customer/shop/Items";
import EachProduct from "./customer/shop/EachItem";
import Cart from "./customer/cart/Cart";
import Checkout from "./customer/checkout/Checkout";
import OrderConfirmation from "./customer/checkout/OrderConfirmation";
import NotFound from "./shared/NotFound.js";
import Profile from "./customer/Profile/Profile";
import ComingSoon from "./shared/ComingSoon.js";

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
                    <Route path='/sales' component={ComingSoon} />
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


export default (Main);
