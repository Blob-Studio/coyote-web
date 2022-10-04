import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { Box, Flex, Text } from 'rebass';
import Marquee from 'react-fast-marquee';
import theme from '../utils/theme';
import { useState } from 'react';
import { useRouter } from 'next/router';
import HamburgerToggle from './HamburgerToggle';
import NavButton from './NavButton';
import getLocales from '../utils/getLocales';
import { transparentize } from 'polished';

const Header = (props: any) => {
  const r = useRouter();
  const locale = getLocales(r.locale as 'en' | 'es');

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <StyledHeader flexDirection={'column'} className="header">
      <Flex className="top-bar">
        <Marquee gradient={false} speed={25} direction={'right'}>
          - WE CREATE COMPELLING WEB EXPERIENCES - サイバースペースを通じて共鳴する - WE CRAFT SEAMLESS INTERACTIVE STORIES FOR END USERS -
          サイバースペースを通じて共鳴する
        </Marquee>
      </Flex>
      <Flex className="title-bar">
        <Link href="/">
          <Box>
            <Marquee gradient={false} speed={25} direction={'left'}>
              <MarqueeContent />
              <MarqueeContent />
              <MarqueeContent />
            </Marquee>
          </Box>
        </Link>
        {r.asPath != '/' && (
          <Box
            className="mobile-menu-toggle"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
          >
            <HamburgerToggle isActive={mobileMenuOpen} />
          </Box>
        )}
        <div className={`mobile-navigation ${mobileMenuOpen ? 'active' : ''}`}>
          <NavButton
            currentPath={r.pathname}
            url="/about"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            {locale.mainNavigation.about}
          </NavButton>
          <NavButton
            currentPath={r.pathname}
            url="/works"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            {locale.mainNavigation.work}
          </NavButton>
          <NavButton
            currentPath={r.pathname}
            url="/services"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          >
            {locale.mainNavigation.services}
          </NavButton>
        </div>
      </Flex>
    </StyledHeader>
  );
};

const MarqueeContent = () => {
  return (
    <div className="title-bar-content">
      <Text as="h1" className="title">
        COYOTE <span className="outlined">WEB STUDIO</span>
      </Text>
      <Text as={'p'} className="divider">
        /
      </Text>
      <Flex className="jp-text" flexDirection="column">
        <Box>ウェブデザイン</Box>
        <Box className="outlined">ウェブ開発</Box>
      </Flex>
    </div>
  );
};

const backgroundAnimation = keyframes`
  0% {background-position: 0}
  100% {background-position: 4rem}
`;

const StyledHeader = styled(Flex)`
  grid-area: header;
  border-bottom: 0.1rem solid ${(p) => p.theme.colors.primary};
  .top-bar {
    font-size: 1.5rem;
    padding: 0;
    font-weight: 600;
    align-items: center;
    color: ${(p) => p.theme.colors.font};
    background-color: ${(p) => p.theme.colors.primary};
  }
  .title-bar {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    background: ${(props) => transparentize(0.9, props.theme.colors.primary)};
    .mobile-menu-toggle {
      display: none;
    }
  }
  .title-bar-content {
    margin: 0 1rem;
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 6rem;
  }
  .jp-text {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 2rem;
  }
  .divider {
    font-size: 5rem;
    margin-left: 2rem;
    position: relative;
    top: -0.5rem;
    font-weight: 600;
  }
  .mobile-navigation {
    pointer-events: none;
    opacity: 0;
    z-index: 100;
    width: 100%;
    height: calc(100vh - ${(props) => props.theme.sizes.mobileHeaderHeight});
    background: ${(props) => props.theme.colors.background};
    position: absolute;
    top: calc(${(props) => props.theme.sizes.mobileHeaderHeight} + 3rem);
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease-in-out all;
    animation: ${backgroundAnimation} 3s infinite linear;
    ${(props) => props.theme.textures.striped};
    .main-navigation-button {
      width: 80%;
      height: fit-content;
      padding: 1rem 0;
      .main-navigation-button-text {
        font-size: 2rem;
      }
    }
    &.active {
      top: ${(props) => props.theme.sizes.mobileHeaderHeight};
      opacity: 1;
      pointer-events: auto;
    }
  }
  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    .top-bar {
      font-size: 1rem;
    }
    .title-bar {
      padding: 0;
      .mobile-menu-toggle {
        display: inline-block;
        min-width: 5rem;
        border-left: 0.1rem solid ${(props) => props.theme.colors.primary};
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .title {
      font-size: 3rem;
    }
    .jp-text {
      display: none;
    }
    .divider {
      font-size: 2rem;
    }
  }
`;

export default Header;
