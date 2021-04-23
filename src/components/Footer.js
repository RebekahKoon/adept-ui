/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// componenets/Footer.js
import React from "react";

import Link from "next/link";

import Image from 'next/image';

import styled from 'styled-components';

const StyledFooter = styled.footer`
    .Footer {

        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;

        height: 200px;
        width: 100%;

        padding: 0 20px;

        font-family: 'PT Sans', sans-serif;
        font-size: 24px;
        color: #FFFFFF;
        text-transform: uppercase;

        background: #191C3C;

        cursor: pointer;

    }
    #Logo {
        padding: 10%;
        flex: 1 10%;
    }
    #Row1, #Row2, #Row3 {
        font-size: 14px;
    }

    #Row1 {
        flex: 2 20%;
    }

    #Row2 {
        flex: 3 20%;
    }

    #Row3 {
        flex: 4 20% ;
    }

    #Links {
        flex: 5 20%;
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
            <div id="Logo">
                <Image src='/TextLogo.png' alt='TextLogo' width='150' height='70' />
            </div>
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
            <div className="FooterData" id="Links">
                <Image src='/GithubIcon1.png' alt='me' width='40' height='40'/>
                <Image src='/GithubIcon2.png' alt='me' width='40' height='40'/>
                <Image src='/GithubIcon3.png' alt='me' width='40' height='40'/>
            </div>
        </div>
    </StyledFooter>

);

export default Footer;