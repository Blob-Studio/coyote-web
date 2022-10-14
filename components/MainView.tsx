import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { Box, Flex } from 'rebass';
import { useRouter } from 'next/router';

import getLocales from '../utils/getLocales';

const MainView = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');

  useEffect((): any => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });

    return () => {};
  }, [router.events]);

  return (
    <StyledMainView>
      <StyledMainViewContent>
        <Box className={`loading ${isLoading ? 'visible' : ''} `}>
          <Box className="loading-animation">
            <Box className="bar-wrapper">
              <Box className="bar" />
            </Box>
          </Box>
          <p>Loading</p>
        </Box>
        {children}
      </StyledMainViewContent>
    </StyledMainView>
  );
};

const loadingAnimation = keyframes`
  0% { width: 0 }
  100% { width: 100% }
`;

const StyledMainViewContent = styled(Flex)`
  width: 100%;
  height: 100%;
  position: relative;
  .loading {
    position: absolute;
    top: 0;
    left: 4rem;
    height: 100%;
    width: calc(100% - 3rem);
    z-index: 101;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    pointer-events: none;
    opacity: 0;
    &.visible {
      opacity: 1;
    }
    .loading-animation {
      .bar-wrapper {
        border: 0.1rem solid ${(props) => props.theme.colors.primary};
        width: 3rem;
        height: 1rem;
        margin-bottom: 1rem;
        position: relative;
      }
      .bar {
        height: 100%;
        width: 0;
        position: absolute;
        top: 0;
        left: 0;
        background: ${(props) => props.theme.colors.primary};
        animation: ${loadingAnimation} 1s infinite linear;
      }
    }
  }

  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    flex-direction: column;
    .loading {
      width: 100%;
      left: 0;
    }
  }
`;

const StyledMainView = styled(Flex)`
  grid-area: main;
  position: relative;
  display: flex;
  max-height: calc(100vh - ${(p) => p.theme.sizes.headerHeight});
  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    max-height: none;
    height: 100%;
  }
`;

export default MainView;
