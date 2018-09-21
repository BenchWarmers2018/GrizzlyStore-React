import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import '../../../node_modules/mdbreact/dist/css/mdb.css';

class Header2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/items">Items</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#">Sale</NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Categories</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/art">Art</DropdownItem>
                                    <DropdownItem href="Fashion">Fashion</DropdownItem>
                                    <DropdownItem href="/electronics">Electronics</DropdownItem>
                                    <DropdownItem href="/home">Home & Living</DropdownItem>
                                    <DropdownItem href="/jewellery">Jewellery</DropdownItem>
                                    <DropdownItem href="/toys">Toys</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <form className="form-inline md-form mt-0">
                                <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header2;

