import React from 'react'

import Link from "next/link";

import Layout from "../components/Layout"

const Index = () => (

<Layout>
    <br />
    <Link href="/landing">
        <a>Welcome to Adept</a>
    </Link>
    <br />
</Layout>

);

export default Index
