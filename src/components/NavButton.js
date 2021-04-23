/* eslint-disable react/prop-types */
// components/NavButton.js

import React from "react";

import Link from "next/link";

import { withRouter } from "next/router";

import styled from 'styled-components';


const StyledNavButton = styled.li`
.NavButton {
    display: flex;
    flex-direction: row;
    align-items: center;
  
    height: 100%;  
    width: 100px;
    cursor: pointer;

  
    .Label {
      font-size: 16px;
      font-weight: bold;
      text-transform: capitalize;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const NavButton = props => (
    <StyledNavButton>
      <Link href={props.path}>
        <div className={`NavButton ${ 
          props.router.pathname === props.path ? "active" : ""
        }`}>
          <div className="Icon">{props.icon}</div>
          <span className="Label">{props.label}</span>
        </div>
      </Link>
    </StyledNavButton>
);

export default withRouter(NavButton);