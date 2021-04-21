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

        font-family: 'Arial, sans-serif';
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;

        background: #FA4141;

        cursonr: pointer;

    }
`;

const Footer = props => (
    <StyledFooter>
        <Link href="/">        
            <div className="Footer">
                {props.appTitle}
            </div>
        </Link>
    </StyledFooter>

);

export default Footer;