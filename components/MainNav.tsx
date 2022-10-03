import styled, { keyframes } from 'styled-components';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Flex } from 'rebass';
import { transparentize } from 'polished';

import getLocales from '../utils/getLocales';
import Sidebar from './Sidebar';
import NavButton from './NavButton';

const MainNav = () => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');
  const [orientation, setOrientation] = useState<'vert' | 'side'>('vert');

  useEffect(() => {
    const defineOrientation = () => (router.pathname === '/' ? 'vert' : 'side');

    setOrientation(defineOrientation());
  }, [router]);

  return (
    <StyledMainNav className={`${orientation}`}>
      <Flex className="main-view-navigation">
        <NavButton currentPath={router.pathname} url="/about">
          {locale.mainNavigation.about}
        </NavButton>
        <NavButton currentPath={router.pathname} url="/works">
          {locale.mainNavigation.work}
        </NavButton>
        <NavButton currentPath={router.pathname} url="/services">
          {locale.mainNavigation.services}
        </NavButton>
      </Flex>
    </StyledMainNav>
  );
};

const backgroundAnimation = keyframes`
  0% {background-position: 0}
  100% {background-position: 4rem}
`;

const StyledMainNav = styled.nav`
  width: 100%;
  .main-view-navigation {
    background-size: 4rem 4rem;
    flex-direction: column;
    ${(props) => props.theme.textures.striped};
    animation: ${backgroundAnimation} 3s infinite linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
  .breakdown {
    display: none;
  }

  &.side {
    width: unset;
    .main-view-navigation {
      position: relative;
      padding: 0;
      width: 4rem;
      background: none;
      .main-navigation-button {
        width: 100%;
        height: calc(100% / 3);
        margin: 0;
        border: 0;
        border-right: ${(props) => props.theme.border.width} solid ${(props) => props.theme.colors.primary};
        border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.colors.primary};
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        cursor: pointer;
        &:last-of-type {
          border-bottom: 0;
        }
        &:hover {
          background: ${(props) => transparentize(0.7, props.theme.colors.primary)};
          color: ${(props) => props.theme.colors.primary};
        }
        &.selected {
          background: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.font};
        }
        .main-navigation-button-text {
          display: inline-block;
          width: 10rem;
          position: absolute;
          transform: rotate(-90deg);
          font-size: 1.5rem;
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    flex-direction: column-reverse;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    display: none;
    height: calc(100vh - ${props => props.theme.sizes.mobileHeaderHeight});
    .main-view-navigation {
      padding: 0;
      justify-content: center;
      margin: 0;
      align-items: center;
      position: relative;
      height: auto;
      flex-grow: 1;
      height: 100%;
      background: none;
      .main-navigation-button {
        display: none;
        width: 80%;
        height: 4rem;
        .main-navigation-button-text {
          font-size: 2rem;
        }
      }
    }
    &.side {
      height: unset;
      .main-view-navigation {
        width: 100%;
        .main-navigation-button {
          width: 100%;
          border: 0;
          height: 2rem;
          border-bottom: 0.1rem solid ${props => props.theme.colors.primary};
          .main-navigation-button-text {
            transform: rotate(0);
            font-size: 1.2rem;
          }
        }
      }
    }
    .breakdown {
      border-bottom: ${(p) => p.theme.border.width} solid ${(p) => p.theme.colors.primary};
      display: block;
      height: fit-content;
    }
    .breakdown-text {
      line-height: 2.3rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.primary};
      font-size: 1.4rem;
    }
  }
`;

export default MainNav;
