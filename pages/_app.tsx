import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import MainView from '../components/MainView';
import MainNav from '../components/MainNav';

import theme from '../utils/theme';
import GlobalStyle from '../styles/globals';

const App = ({ Component, pageProps }: any) => {
  const [appClass, setAppClass] = useState('home');
  const r = useRouter();

  useEffect(() => {
    if (r.route.substring(1) == '') {
      setAppClass('home');
    } else {
      setAppClass(r.route.substring(1));
    }
  }, [r.route]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title key="title">Coyote Web Studio | Web Development Studio from Buenos Aires, Argentina</title>
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:url" key="og:url" content="" />
        <meta property="og:title" key="og:title" content="Coyote Web Studio" />
        <meta property="og:description" key="og:description" content="We are a web design and development studio based in Buenos Aires, Argentina." />
        <meta property="og:image" key="og:image" content="/img/CWS-logo-dark.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Coyote Web Studio" />
        <meta property="twitter:description" content="We are a web design and development studio based in Buenos Aires, Argentina." />
        <meta property="twitter:image" content="/img/CWS-logo-dark.svg" />
      </Head>
      <StyledApp className={appClass}>
        <StyledOverlay />
        <Header />
        <Sidebar />
        <MainView>
          <MainNav />
          <Component {...pageProps} />
        </MainView>
      </StyledApp>
    </ThemeProvider>
  );
};

const StyledOverlay = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;
  background: pink;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
`;

const StyledApp = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: ${(props) => props.theme.sizes.headerHeight} auto;
  grid-template-areas:
    'header header'
    'sidebar main';
  &.home {
    .loading {
      width: 100% !important;
      left: 0 !important;
    }
  }
  .outlined {
    -webkit-text-stroke-width: 0.09rem;
    -webkit-text-stroke-color: ${(p) => p.theme.colors.primary};
    -webkit-text-fill-color: transparent;
  }
  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    height: unset;
    min-height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: ${(props) => props.theme.sizes.mobileHeaderHeight} 1fr;
    grid-template-areas:
      'header'
      'main';
    &:not(.home) {
      .side-bar {
        display: none;
      }
    }
    &.home {
      height: 100vh;
      grid-template-areas:
        'header'
        'sidebar';
      .side-bar {
        display: flex;
        max-height: unset;
        height: calc(100vh - ${(props) => props.theme.sizes.mobileHeaderHeight});
        border-right: none;
      }
      .mobile-navigation {
        display: none;
      }
    }
  }
`;

export default App;
