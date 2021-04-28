/* eslint-disable no-unused-vars */
import React from 'react'

import Image from 'next/image';

import Layout from "../components/Layout/Layout"

import StyledHero from "../styles/LandingStyle"

import {StyledImg} from "../styles/LandingStyle"



const Index = props => 
    <StyledImg>
        <Layout>
            <StyledHero>
                Start your journey to become an expert
            </StyledHero>
        </Layout>
    </StyledImg>


export default Index
