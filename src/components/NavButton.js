/* eslint-disable react/prop-types */
// components/NavButton.js

import React from "react";

import Link from "next/link";

import { withRouter } from "next/router";

import styled from 'styled-components';

const StyledNavButton = styled.li`
.NavButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  
    height: 100%;
  
    cursor: pointer;
  
    .Label {
      font-size: 12px;
      text-transform: capitalize;
    }
  }
li {
  list-style-type: none;
}
`;

const NavButton = props => (
    <StyledNavButton>
      <Link href={props.path}>
        <div className={`NavButton ${ 
          props.router.pathname === props.path ? "active" : ""
        }`}>
          <span className="Label">{props.label}</span>
        </div>
      </Link>
    </StyledNavButton>
);

export default withRouter(NavButton);