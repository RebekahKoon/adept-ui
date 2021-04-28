import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html,
body,
#__next {
    height: 100%;
    width: 100%;
    min-height: 100%
}

body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
}
`;

export const StyledContentContainer = styled.div`
`;

export const StyledContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 701px;
    min-height: 100%;
    padding-bottom: 200 px;

    color: #000000;
    font-family: 'PT Sans', sans-serif;

    a {
        color: inherit;
    }
`;

export const StyledLayout = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

`;

export default GlobalStyle;