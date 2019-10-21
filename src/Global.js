import { createGlobalStyle } from 'styled-components';
import { white, grey, lightGrey, blue } from './utilities/colors';
import { h1 } from './utilities/typography';
import { normalize } from 'polished';
import { skyRegular, skyBold } from './utilities/fonts';
export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body {
        color: ${grey};
        background-color: ${lightGrey};
        font-size: 1rem;
    }
    h1,h2,h3 {
        font-family: ${skyBold};
        font-weight: normal;
        margin: 0 0 10px;
    }
    h1 {
        font-size: ${h1};
    }
    a {
        color: ${blue};
        text-decoration: none;
    }
    p {
        margin: 0 0 10px;
    }
    input {
        height: 2.2rem;
        line-height: 2.2rem;
        font-size: 18px;
        background-color: ${white};
        border: none;
        border-radius: 4px;
        font-weight: normal;
        color: ${grey};
        padding: 0;
        outline: none;
        padding: 0 10px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    body,
    html {
      width: 100%;
      height: 100%;
      text-align: center;
      font-family: ${skyRegular};
    }
`;