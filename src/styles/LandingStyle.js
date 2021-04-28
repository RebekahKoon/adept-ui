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
    padding-bottom: 7%;
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

export default StyledHero;