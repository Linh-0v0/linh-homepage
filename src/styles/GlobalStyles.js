import { createGlobalStyle } from "styled-components";
import "./fonts.css";
import "@fontsource/benne";
import "@fontsource/nunito";
import "../fonts/Berlin-Sans-FB-Regular.ttf";
import "../fonts/Lucida-Sans-Regular.ttf";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Berlin Sans FB Regular';
    overflow: hidden;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    font-weight: normal;
}

a {
    color: inherit;
    text-decoration: none;
}

// ::-webkit-scrollbar {
// 	width: 12px;
// }

// ::-webkit-scrollbar-track {
// 	border-radius: 10px;
// 	background-color: transparent;
// }

// ::-webkit-scrollbar-thumb {
// 	border-radius: 10px;
// 	background-color: #949494;
// }

`;

export default GlobalStyles;
