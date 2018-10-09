import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "./pages/profile"
import NotFound from "../shared/NotFound";
import Dashboard from "./pages/dashboard";
import ViewCategories from "./pages/viewCategories"

class adminMain extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/viewcategories' component={ViewCategories}/>
                        { /* More categories links here */ }
                        <Route path='*' component={NotFound} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default adminMain;
