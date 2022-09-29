import App from "next/app";
import Head from "next/head";
import "./../styles/globals.css";
// import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import styled from "styled-components";

import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import TimeInfo from "./../components/TimeInfo";
import MainView from "../components/MainView";
import MainNav from '../components/MainNav';

// export const GlobalContext = createContext({});
// export const MainNavigationContext = createContext({});

const MyApp = ({ Component, pageProps }: any) => {
  const { global, mainNavigation } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <StyledHomepage>
        <Head>
          <title>Coyote Web Studio</title>
        </Head>
        <Header />
        <Sidebar />
        <MainView>
          <MainNav />
          <Component {...pageProps} />
        </MainView>
        <TimeInfo />
      </StyledHomepage>
    </ThemeProvider>
  );
};

const StyledHomepage = styled.main`
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.primary};
  display: grid;
  overflow: hidden;
  grid-template-columns: calc((100vw / 12) * 4) calc((100vw / 12) * 8);
  grid-template-rows: calc(11rem + ${(props) => props.theme.border.width} * 2) calc(100vh - 15rem) 4rem;
  height: 100vh;
  grid-template-areas:
    "header header"
    "side-bar main-view"
    "bottom-info main-view";
  @media screen and (max-width: 680px) {
    grid-template-columns: 100%;
    grid-template-rows: calc(calc(9rem + ${(props) => props.theme.border.width} * 2)) calc(100vh - 11rem);
    grid-template-areas:
      "header"
      "main-view"
  }
  .outlined {
    -webkit-text-stroke-width: ${(props) => props.theme.border.width};
    -webkit-text-stroke-color: ${(props) => props.theme.color.primary};
    -webkit-text-fill-color: ${(props) => props.theme.color.background};
  }
`;

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949

export default MyApp;
