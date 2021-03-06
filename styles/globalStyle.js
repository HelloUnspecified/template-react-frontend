import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
  }

  ::-moz-selection { background: ${({ theme }) => theme.colors.primary}; }
  ::selection { background: ${({ theme }) => theme.colors.primary}; }
`;

export default GlobalStyle;
