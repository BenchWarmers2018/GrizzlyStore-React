import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "./adminProfile/Profile"
import NotFound from "../shared/NotFound";
import ViewCategories from "./pages/viewCategories"
import ViewItems from "./pages/viewItems"
import ViewAccounts from "./pages/viewAccounts"

class adminMain extends Component {
    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path='/profile' component={Profile}/>
                        <Route path='/viewcategories' component={ViewCategories}/>
                        <Route path='/viewitems' component={ViewItems}/>
                        <Route path='/viewaccounts' component={ViewAccounts}/>
                        { /* More categories links here */ }
                        <Route path='*' component={NotFound} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default adminMain;
