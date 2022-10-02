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

const App = ({ Component, pageProps }: any) => {
  const r = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Coyote Web Studio | Web Development Studio from Buenos Aires, Argentina</title>
      </Head>
      <StyledApp>
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

  @media screen and (${(p) => p.theme.breakpoints.mob}) {
  }
`;

export default App;
