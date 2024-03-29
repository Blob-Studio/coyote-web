import { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import theme from './../utils/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    min-width: 100vw;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  body {
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${transparentize(0.7, theme.colors.primary)};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 0;
  }

  .content-block {
    margin-bottom: 3rem;
  }

  .content-card {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 0.1rem solid ${theme.colors.primary};
    list-style: none;
    display: flex;
    transition: 0.1s ease-in-out all;
    align-items: baseline;
    line-height: 1.8rem;
    flex-direction: column;
    h3 {
      margin-right: 0.5rem;
    }
    a {
      display: inherit;
      align-items: inherit;
      flex-direction: row;
    }
    .card-body {
      margin-top: 1.2rem;
      display: block;
      font-size: 1rem;
    }
    &:hover {
      background: ${(props) => transparentize(0.7, theme.colors.primary)};
    }
    p {
      font-size: 0.8rem;
    }
    @media screen and (${theme.breakpoints.mob}) {
      a {
        flex-direction: column;
      }
    }
  }
  @media screen and (${theme.breakpoints.mob}) {
    body {
      overflow-y: auto;
    }
  }

  .MuiTooltip-tooltip {
    padding: 0.8rem;
    font-size: 0.8rem;
    background-color: ${theme.colors.background};
    border: ${theme.border.width} solid ${theme.colors.primary};
  }
  .MuiTooltip-arrow {
    color: ${theme.colors.background};
    &:before {
      border: ${theme.border.width} solid ${theme.colors.primary}
    }
  }
`;

export default GlobalStyle;
