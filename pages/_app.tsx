import App from "next/app";
import Head from "next/head";
import "./../styles/globals.css";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import styled from "styled-components";

export const GlobalContext = createContext({});
export const MainNavigationContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  const { global, mainNavigation } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <Head>
          <title>Coyote Web Studio</title>
        </Head>
        <Component {...pageProps} />
      </StyledRoot>
    </ThemeProvider>
  );
};

const StyledRoot = styled.div`
  color: ${(props) => props.theme.color.primary};
  background: ${(props) => props.theme.color.background};
`;
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

export default MyApp;
