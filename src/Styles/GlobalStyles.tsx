import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media only screen and (max-width: 480px) {
        background-size: cover;
        background-position: center;
    }
}
`;

export default GlobalStyles;
