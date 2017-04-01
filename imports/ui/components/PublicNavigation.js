import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

const PublicNavigation = () => (
  <Nav pullRight>
    <LinkContainer to="signup">
      <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    </LinkContainer>
    <LinkContainer to="/">
      <NavItem eventKey={ 2 } href="/">Log In</NavItem>
    </LinkContainer>
  </Nav>
);

export default PublicNavigation;
