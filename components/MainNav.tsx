import styled, { keyframes } from "styled-components";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Box, Flex } from "rebass";
import { transparentize } from "polished";

import getLocales from "../utils/getLocales";

const NavButton = ({ children, url, currentPath, ...props }: {children: any, url: string, currentPath: string}) => {
  return (
    <Link href={url}>
      <Box
        {...props}
        className={`main-navigation-button ${currentPath === url && 'selected'}`}
      >
        <span className="main-navigation-button-text">
          {children}
        </span>
      </Box>
    </Link>
  );
};

const MainNav = () => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");
  const [orientation, setOrientation] = useState<"vert" | "side">("vert");

  useEffect(() => {
    const defineOrientation = () => router.pathname === '/' ? 
      "vert" : 
      "side";

    setOrientation(defineOrientation());

  }, [router]);

  return (
    <StyledMainNav className={`${orientation}`}>
      <Flex className="main-view-navigation">
        <NavButton currentPath={router.pathname} url="/about">{locale.mainNavigation.about}</NavButton>
        <NavButton currentPath={router.pathname} url="/works">{locale.mainNavigation.work}</NavButton>
        <NavButton currentPath={router.pathname} url="/services">{locale.mainNavigation.services}</NavButton>
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
    background-image: repeating-linear-gradient(
      45deg, 
      ${(props) => (transparentize(
        0.4, 
        props.theme.colors.primary)
      )} 0, 
      ${(props) => (transparentize(
        0.4, 
        props.theme.colors.primary)
      )} 1px, 
      transparent 0, 
      transparent 50%
    ); 
    animation: ${backgroundAnimation} 2s infinite linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
  .main-navigation-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 8rem;
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.background};
    margin-bottom: 2rem;
    font-weight: 600;
    transition: 
      0.15s ease-in-out background,
      0.15s ease-in-out color;
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.font};
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  .main-navigation-button-text {
    font-size: 4rem;
    transform: rotate(0deg);
  }
  .main-view-content {
    display: none;
    flex-basis: content;
  }
  .breakdown {
    display: none;
  }

  &.side {
    /* position: absolute; */
    width: unset;
    .main-view-navigation {
      position: relative;
      padding: 0;
      width: 4rem;
      background: none;
    }
    .main-navigation-button {
      width: 100%;
      height: calc(100% / 3);
      margin: 0;
      border: 0;
      border-right: ${(props) => props.theme.border.width} solid
        ${(props) => props.theme.colors.primary};
      border-bottom: ${(props) => props.theme.border.width} solid
        ${(props) => props.theme.colors.primary};
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      cursor: pointer;
      &:last-of-type {
        border-bottom: 0;
      }
      &.selected {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.font};
      }
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

  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
    border-bottom: 0;
    .main-view-navigation {
      padding: 0;
      justify-content: center;
      margin: 0;
      align-items: center;
      position: relative;
      height: auto;
      flex-grow: 1;
    }
    .main-navigation-button {
      width: 80%;
      height: 4rem;
    }
    .main-navigation-button-text {
      font-size: 2rem;
    }
    .main-view-content {
      flex-grow: unset;
      height: fit-content;
    }
    .breakdown {
      border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.colors.primary};
      display: block;
      height: fit-content;
    }
    .breakdown-text {
      line-height: 2.3rem;
      font-weight: 200;
      color: ${(props) => props.theme.colors.primary};
      font-size: 1.4rem;
    }
  }
`;

export default MainNav;