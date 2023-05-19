import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

body {
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    background: ${({theme})=> theme.color.background};
}
`;