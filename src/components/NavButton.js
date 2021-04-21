/* eslint-disable react/prop-types */
// components/NavButton.js

import React from "react";

import Link from "next/link";

import styled from 'styled-components';

const StyledNavButton = styled.li`
.NavButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  
    height: 100%;
  
    cursor: pointer;
  
    .Icon {
      font-size: 20px;
    }
  
    .Label {
      font-size: 12px;
      text-transform: capitalize;
    }
  }
`;

const NavButton = props => (
    <StyledNavButton>
            <Link href={props.path}>
            <div className="NavButton">
            <div className="Icon">{props.icon}</div>
            <span className="Label">{props.label}</span>
            </div>
        </Link>
    </StyledNavButton>
  
);

export default NavButton;