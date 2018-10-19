import React, {Component} from 'react';
import Logo from '../../../images/admin_images/logo-icon.png';
import LogoLight from '../../../images/admin_images/logo-light-icon.png';
import LogoT from '../../../images/admin_images/logo-text.png';
import LogoTLight from '../../../images/admin_images/logo-light-text.png';
import User from '../../../images/admin_images/users/1.jpg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../../node_modules/mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiClose, mdiMenu, mdiTableSearch } from '@mdi/js';
import firebase from "firebase";
import {ACCESS_TOKEN} from "../../../index";
import {resetUserStore} from "../../../actions/accountAction";
import { connect } from 'react-redux';

class adminHeader extends Component {

    constructor(props) {
        super(props);

    }

    logUserOut = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.dispatch(resetUserStore());
    }

    render() {
        return (
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">
                        <Link to={"/"}><a className="navbar-brand">

                            <b className="logo-icon">
                                <img src={Logo} alt="/" className="dark-logo"/>
                                <img src={LogoLight} alt="/"
                                     className="light-logo"/>
                            </b>
                            <span className="logo-text">
                                <img src={LogoT} alt="/" className="dark-logo"/>
                                <img src={LogoTLight} className="light-logo"
                                     alt="/"/>
                        </span>
                        </a>
                        </Link>
                        <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                            <Icon path={mdiMenu} size={1}/>
                        </a>
                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        <ul className="navbar-nav float-left mr-auto">
                            <li className="nav-item search-box"><a className="nav-link waves-effect waves-dark"
                                                                   href="javascript:void(0)">
                                <Icon path={mdiTableSearch} size={1} color="white"/>
                            </a>
                                <form className="app-search position-absolute">
                                    <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                        className="srh-btn"><Icon path={mdiClose} size={1}/></a>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav float-right" >

                            <Dropdown >
                                <DropdownToggle ><img
                                    src={User} alt="user" className="rounded-circle"
                                    width="31"/></DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><Link to="/profile">My Profile</Link></DropdownItem>
                                    <DropdownItem onClick={this.logUserOut}><Link to="/">Log Out</Link> </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default connect() (adminHeader);