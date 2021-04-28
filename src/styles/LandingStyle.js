import styled from 'styled-components';

const StyledHero = styled.div`
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    font-size: 96px;
    color: #FFFFFF;

    padding-left: 10%;
    padding-top: 7%;
    padding-right: 10%;
    padding-bottom: 7%;

    margin-left: 150px;
    margin-bottom: 0px;


    p span {
        display: block;
    }

    #span2 {
        float: right;
    }
`;

export const StyledDivider = styled.div`
    padding-bottom: 5%;
    hr {
        width: 50%;
        margin: auto;
    }
`;

export const StyledImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url('/adept-hero.png') no-repeat;
`;

export const StyledGetStarted = styled.div`
    height: 50px;
    width: 200px;
    text-align: center;
    margin: auto;

    font-size: 32px;
    color: #FFFFFF;
    font-family: 'PT Sans', sans-serif;
    border-style: solid;
    border-radius: 12px;
    line-height: 50px;

    a{
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }
    a:active {
        text-decoration: underline;
        color: hotpink;
    }
`;

export default StyledHero;