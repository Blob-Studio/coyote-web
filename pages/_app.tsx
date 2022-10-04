import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import styled from 'styled-components';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import MainView from '../components/MainView';
import MainNav from '../components/MainNav';
import GlobalStyle from '../styles/globals';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: any) => {
  const [appClass, setAppClass] = useState('home');
  const r = useRouter();

  useEffect(() => {
    if (r.route.substring(1) == "") {
      setAppClass('home');
    } else {
      setAppClass(r.route.substring(1));
    }
  }, [r.route]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>
          Coyote Web Studio | Web Development Studio from Buenos Aires, Argentina
        </title>
      </Head>
      <StyledApp className={appClass}>
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

const StyledApp = styled.main`
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.primary};
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: ${(p) => p.theme.sizes.headerHeight} auto;
  grid-template-areas:
    'header header'
    'sidebar main';
  .outlined {
    -webkit-text-stroke-width: 0.05rem;
    -webkit-text-stroke-color: ${(p) => p.theme.colors.primary};
    -webkit-text-fill-color: ${(p) => p.theme.colors.background};
  }
  @media screen and (${props => props.theme.breakpoints.mob}) {
    height: unset;
    min-height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: ${props => props.theme.sizes.mobileHeaderHeight} 1fr;
    grid-template-areas:
      'header'
      'main';
    &.home {
      height: 100vh;
      grid-template-areas:
        'header'
        'sidebar';
      .side-bar {
        display: flex;
        max-height: unset;
        height: calc(100vh - ${props => props.theme.sizes.mobileHeaderHeight});
        border-right: none;
      }
      .mobile-navigation {
        display: none;
      }
    }
  }
`;

export default App;
