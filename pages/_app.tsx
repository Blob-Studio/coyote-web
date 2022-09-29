import App from "next/app";
import Head from "next/head";
import "./../styles/globals.css";
import { useState, createContext } from 'react';
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import styled from "styled-components";

const MyApp = ({ Component, pageProps }: any) => {

  type IPanel =
  | "work-list"
  | "work-content"
  | "about"
  | "services"
  | "unselected";

  const [panel, setPanel] = useState("unselected");
  const [selectedWork, setSelectedWork] = useState(0);
  const panelContextDefault = { panel, setPanel }

  const PanelContext = createContext({
    panel: 'unselected',
    setPanel: () => {}
  });

  return (
    <ThemeProvider theme={theme}>
      <PanelContext.Provider value={panelContextDefault as any}>
        <StyledRoot>
          <Head>
            <title>Coyote Web Studio</title>
          </Head>
          <Component {...pageProps} />
        </StyledRoot>
      </PanelContext.Provider>
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
