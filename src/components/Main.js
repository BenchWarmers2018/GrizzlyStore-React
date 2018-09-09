import {Component} from "react";
import React from "react";
import { Switch , Route } from "react-router-dom";
import Home from "./customer/Home";
import AllItems from "./customer/AllItems";
import Category from "./customer/Category";
import EachProduct from "./customer/EachProduct";
import Cart from "./customer/Cart";
import Checkout from "./customer/Checkout";
import OrderConfirmation from "./customer/OrderConfirmation";
import Contact from "./customer/Contact";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/items' component={AllItems} />
                    <Route path='/category' component={Category}/>
                    <Route path='/product' component={EachProduct}/>
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/confirmation' component={OrderConfirmation}/>
                    <Route path='/contact' component={Contact}/>
                    { /* More categories links here */ }


                </Switch>
            </main>
        );
    }
}

export default Main;