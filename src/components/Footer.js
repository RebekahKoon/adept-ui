/* eslint-disable react/prop-types */
// componenets/Footer.js
import React from "react";

import Link from "next/link";

import styled from 'styled-components';

const StyledFooter = styled.footer`
    .Footer {

        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 50px;
        width: 100%;

        padding: 0 20px;

        font-family: 'PT Sans', sans-serif;
        font-size: 24px;
        color: #FFFFFF;
        text-transform: uppercase;

        background: #191C3C;

        cursonr: pointer;

    }
`;

const Footer = props => (
    <StyledFooter>
        <div className="Footer">
            <h5>{props.appTitle}</h5>
        </div>
    </StyledFooter>

);

export default Footer;