import styled from 'styled-components';

const StyledHero = styled.div`
    display: flex;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    font-size: 96px;
    color: #FFFFFF;

    padding: 10%;
    width: 100%;

    margin-left: 150px;
    margin-right: 150px;
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