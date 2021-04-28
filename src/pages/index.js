/* eslint-disable no-unused-vars */
import React from 'react'

import Image from 'next/image';

import Layout from "../components/Layout/Layout"

import StyledHero from "../styles/LandingStyle"

import {StyledImg, StyledDivider} from "../styles/LandingStyle"



const Index = props => 
    <StyledImg>
        <Layout>
            <StyledHero>
                <p><span id= 'span1'>Start your journey to</span>
                <span id='span2'>become an expert</span></p>
            </StyledHero>
            <StyledDivider>
                    <hr></hr>
            </StyledDivider>
        </Layout>
    </StyledImg>


export default Index
