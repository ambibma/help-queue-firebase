import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'

function Header() {
  return (
    <React.Fragment>
      <Navbar>
        <Link to="/" style={titleStyle}>Help Queue</Link>
        <Link to="/sign-in" style={linkStyle}> Sign In</Link>
      </Navbar>
    </React.Fragment>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1.5rem",
  padding: "0.5em",
  paddingLeft: "1.5em",
  paddingRight: "0em",
  color: "black"
}

const titleStyle = {
  ...linkStyle,
  fontSize: "2.5em",
  fontWeight: "700"
}

const Navbar = styled.section`
  display: flex;
  align-items: center;
  background-color: #7FD1B9;
  margin-bottom: 1.5em;
  min-width: 600px;
`;

export default Header;