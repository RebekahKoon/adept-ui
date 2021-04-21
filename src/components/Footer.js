// componenets/Footer.js
import React from "react";

import styled from 'styled-components';

const StyledFooter = styled.footer`
    .Footer {

        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 50px;
        width: 100%;

        padding: 0 20px;

        font-family: Arial, sans-serif;
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-transform: uppercase;

        background: crimson;

        cursonr: pointer;

    }
`;

const Footer = () => (
    <StyledFooter>
        <div className="Footer">
            FOOTER
            <style jsx>{`
                background-color: blue;
                color: white;
                width: 100%;
                height: 50px;
            `}</style>
        </div>
    </StyledFooter>
);

export default Footer;