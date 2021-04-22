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

        height: 300px;
        width: 100%;

        padding: 0 20px;

        font-family: 'PT Sans', sans-serif;
        font-size: 24px;
        color: #FFFFFF;
        text-transform: uppercase;

        background: #191C3C;

        cursonr: pointer;

    }
    #Logo {
        padding: 10px 0;
    }
    #Row1, #Row2, #Row3 {
        font-size: 12px;
    }
    .UL1, .UL2, .UL3 {
        list-style-type: none;
        margin-bottom: 10px;
    }

    #LI {
        margin: 0 10px 10px 0;
        text-transform: none;
    }

    #LIHeader {
        margin: 0 10px 10px 0;
        color: #919496;
    }
`;

const Footer = props => (
    <StyledFooter>
        <div className="Footer">
            <h5 id="Logo">{props.appTitle}</h5>
            <div className="FooterData" id="Row1">
                <ul className="UL1">
                    <li id="LIHeader">FOR JOB SEEKERS</li>
                    <li id= "LI">Browse Jobs</li>
                    <li id= "LI">Browse Contacts</li>
                    <li id= "LI">Skills</li>
                    <li id= "LI">Visualize Data</li>
                </ul>
            </div>
            <div className="FooterData" id="Row2">
                <ul className="UL2">
                    <li id="LIHeader">FOR EMPLOYERS</li>
                    <li id= "LI">Post a Job</li>
                    <li id= "LI">View Posted Jobs</li>
                    <li id= "LI">View Applicants</li>
                </ul>
            </div>
            <div className="FooterData" id="Row3">
                <ul className="UL3">
                    <li id="LIHeader">RESOURCES</li>
                    <li id= "LI">About Adept</li>
                    <li id= "LI">Contact</li>
                    <li id= "LI">View Repository</li>
                </ul>
            </div>
        </div>
    </StyledFooter>

);

export default Footer;