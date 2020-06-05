import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
            <Nav className="navigation" bsStyle="pills" pullRight activeKey={this.props.selectedNavIndex} onSelect={this.props.changeIndex}>
              <NavItem eventKey={0}>
                <h3>About</h3>
              </NavItem>
              <NavItem eventKey={1}>
                <h3>Projects</h3>
              </NavItem>
              <NavItem eventKey={2}>
                <h3>Contact</h3>
              </NavItem>
            </Nav>
            );
    }
}

export default Navigation;

