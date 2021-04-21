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
        <div className="FooterData" id="Row1">
            <p>FOR JOB SEEKERS</p>
            <ul id="UL1">
                <li>Browse Jobs</li>
                <li>Browse Contacts</li>
                <li>Skills</li>
                <li>Visualize Data</li>
            </ul>
        </div>
        <div className="FooterData" id="Row2">
            <p>FOR EMPLOYERS</p>
            <ul id="UL2">
                <li>Post a Job</li>
                <li>View Posted Jobs</li>
                <li>View Applicants</li>
            </ul>
        </div>
        <div className="FooterData" id="Row3">
            <p>RESOURCES</p>
            <ul id="UL3">
                <li>About Adept</li>
                <li>Contact</li>
                <li>View Repository</li>
            </ul>
        </div>
    </StyledFooter>

);

export default Footer;