/* eslint-disable react/prop-types */
// components/Layout.js
import React from "react";

import Footer from "./Footer.js";

import NavBar from "./NavBar";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
};

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
};

const Layout = props => (

    <div className="Layout" style={layoutStyle}>
        <NavBar />

        <div className="Content" style={contentStyle}>
            {props.children}
        </div>
        <Footer />
    </div>
);

export default Layout;