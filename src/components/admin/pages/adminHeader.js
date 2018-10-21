import React, {Component} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse, NavbarNav, NavItem, NavLink
} from 'mdbreact';
import '../../../../node_modules/mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import {ACCESS_TOKEN} from "../../../index";
import {resetUserStore} from "../../../actions/accountAction";
import { connect } from 'react-redux';
import LogoLarge from "../../../images/images_sublime/GrizzlyStoreLogoWhite.png";

class adminHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    logUserOut = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.dispatch(resetUserStore());
    }

    render() {
        return (
            <div>
                <Navbar color="black" light expand="md" scrolling>
                    <NavbarBrand href="/profile">
                        <div className="logo">
                            <Link to='/profile'>
                                <img className="header_logo" src={LogoLarge} alt=""/>
                                <img className="header_logo_small" src={LogoLarge} alt=""/>
                            </Link>
                        </div>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                                <Dropdown>
                                    <DropdownToggle className="uppercase" nav caret>ADMIN</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><Link to="/profile">Profile</Link></DropdownItem>
                                        <hr/>
                                        <DropdownItem onClick={this.logUserOut}><Link to="/">Log out</Link></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

            </div>

        );
    }
}

export default connect() (adminHeader);