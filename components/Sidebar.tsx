import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useRouter } from 'next/router';
import { transparentize } from 'polished';
import dynamic from 'next/dynamic';

import TimeInfo from './TimeInfo';
import NavButton from './NavButton';
import ContactButton from './ContactButton';
import getLocales from '../utils/getLocales';
import { Suspense } from 'react';
import LanguageSwitch from './LanguageSwitch';
const ThreeJSPageScene = dynamic(() => import('./ThreeJSPageScene'));



const Sidebar = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');

  return (
    <StyledSidebar className={`${props.className} side-bar`} flexDirection={'column'}>
      <LanguageSwitch />
      <Flex alignItems="center" justifyContent="center" className="breakdown">
        <Box as={'p'} className="breakdown-text">
          {locale.sidebar.headerText}
        </Box>
      </Flex>
      <Box className="graphic">
        <div className="navigation">
          <NavButton currentPath={router.pathname} url="/about">
            {locale.mainNavigation.about}
          </NavButton>
          <NavButton currentPath={router.pathname} url="/works">
            {locale.mainNavigation.work}
          </NavButton>
          <NavButton currentPath={router.pathname} url="/services">
            {locale.mainNavigation.services}
          </NavButton>
        </div>
        <Suspense fallback={StyledLoadingFallback}>
          <ThreeJSPageScene />
        </Suspense>
      </Box>
      <StyledContactButton />
      <TimeInfo />
    </StyledSidebar>
  );
};

const StyledLoadingFallback = styled.span`
  /* background-color: ${props => props.theme.colors.background}; */
  background-color: red;
`;

const StyledContactButton = styled(ContactButton)`
  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    display: none;
  }
`;

const StyledSidebar = styled(Flex)`
  border-right: ${(p) => p.theme.border.width} solid ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  position: relative;
  max-height: calc(100vh - ${(p) => p.theme.sizes.headerHeight});
  background: ${(props) => transparentize(0.95, props.theme.colors.primary)};
  .breakdown {
    font-size: 1.6rem;
    text-align: center;
    padding: 1rem;
    line-height: 130%;
  }
  .graphic {
    flex-grow: 1;
    overflow: hidden;
    user-select: none;
  }
  .navigation {
    display: none;
  }
  @media screen and (${(props) => props.theme.breakpoints.mob}) {
    max-height: none;
    .graphic {
      position: relative;
    }
    .navigation {
      z-index: 10;
      display: flex;
      position: absolute;
      flex-direction: column;
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      justify-content: center;
    }
    .main-navigation-button {
      width: 80%;
      height: fit-content;
      padding: 1rem 0;
      margin-left: 10%;
      mix-blend-mode: multiply;
      margin-bottom: 1rem;
      background: hsla(0, 0%, 0%, 0.7);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    .main-navigation-button-text {
      font-size: 2rem;
    }
  }
`;

export default Sidebar;
