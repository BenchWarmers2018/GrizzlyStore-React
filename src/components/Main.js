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


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/items/all' component={Items} />
                    <Route path='/category'  component={Items}/>
                    <Route path='/items/:id' component={EachProduct}/>
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

export default Main;
