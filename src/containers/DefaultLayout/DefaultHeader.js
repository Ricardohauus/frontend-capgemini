import React, { Component } from "react";
import {
  UncontrolledDropdown,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Collapse,
  Navbar
} from "reactstrap";

import PropTypes from "prop-types";
import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/brand/logo.svg";
import logoMin from "../../assets/img/brand/logoMin.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo,
            width: 100,
            height: 40,
            alt: "Banco Capgemini"
          }}
          minimized={{
            src: logoMin,
            width: 50,
            height: 50,
            alt: "Banco Capgemini"
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Navbar light expand="md">
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-md-down-none" navbar>
              <Dropdown
                href="#"
                nav
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              />
            </Nav>
          </Collapse>
        </Navbar>

        <Nav className="ml-auto" navbar></Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
