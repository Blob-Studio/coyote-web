import styled from "styled-components";
import { Box, Flex } from "rebass";
import About from "./../components/About";
import WorkList from "./WorkList";
import OurVision from "./OurVision";
import Services from './Services';
import WorkContent from "./WorkContent";
import { useRouter } from "next/router";
import getLocales from "../utils/getLocales";
import { transparentize } from "polished";
import Starfield from "./Starfield";

const InitialNavButton = ({ children, thisPanel, ...props }: any) => {
  return (
    <Box
      className={`main-navigation-button ${
        props.panel == thisPanel ? "selected" : null
      }`}
      onClick={() => {
        props.setPanel(thisPanel);
      }}
    >
      <span>{children}</span>
    </Box>
  );
};

const MainView = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");

  return (
    <StyledMainView className={`main-view ${props.panel}`}>
      <Flex className="main-view-navigation" flexDirection={"column"}>
        <InitialNavButton {...props} thisPanel="about">
          {locale.mainNavigation.about}
        </InitialNavButton>
        <InitialNavButton {...props} thisPanel="work-list">
          {locale.mainNavigation.work}
        </InitialNavButton>
        <InitialNavButton {...props} thisPanel="services">
          {locale.mainNavigation.services}
        </InitialNavButton>
      </Flex>
      <Flex width="100%" className="main-view-content" height={"100%"}>
        {props.panel == "work-list" && (
          <WorkList
            setPanel={props.setPanel}
            setSelectedWork={props.setSelectedWork}
          />
        )}
        {props.panel == "work-content" && (
          <WorkContent
            setPanel={props.setPanel}
            selectedWork={props.selectedWork}
          />
        )}
        {props.panel == "about" && <About />}
        {props.panel == "our-vision" && <OurVision />}
        {props.panel == "services" && (
          <Services />
        )}
        {props.panel == 'unselected' && (
          <Starfield />
        )}
      </Flex>
    </StyledMainView>
  );
};

const StyledMainView = styled(Flex)`
  grid-area: main-view;
  border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
  &.unselected {
    position: relative;
    .main-view-navigation {
      position: absolute;
      width: 40rem;
      margin: 0 calc(50% - 20rem);
      padding: 2rem 0;
      top: 0;
      height: 0;
      height: 100%;
      z-index: 10;
      .main-navigation-button {
        height: 8rem;
        border: 0;
        border: 1px solid ${(props) => props.theme.color.primary} !important;
        background: ${(props) => props.theme.color.background};
        margin-bottom: 2rem;
        span {
          font-size: 4rem;
          transform: rotate(0deg);
          width: 100%;
        }
      }
    }
  }
  .main-view-side {
    writing-mode: vertical-rl;
    width: 2rem;
    background: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.font};
    display: flex;
    flex-direction: center;
    justify-content: center;
    line-height: 1.5rem;
  }
  .main-view-navigation {
    width: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .main-navigation-button {
      height: calc(100% / 3);
      border-right: ${(props) => props.theme.border.width} solid
        ${(props) => props.theme.color.primary};
      border-bottom: ${(props) => props.theme.border.width} solid
        ${(props) => props.theme.color.primary};
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: ${(props) =>
          transparentize(0.7, props.theme.color.primary)};
      }
      &.selected {
        background: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.font};
      }
      span {
        display: inline-block;
        width: 10rem;
        position: absolute;
        transform: rotate(-90deg);
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .main-view-content {
    flex-grow: 1;
    .post-list {
      .post-list-item {
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.color.primary};
        padding: 1rem;
        p {
          margin: 0;
        }
        h2 {
          margin-bottom: 0.5rem;
        }
        .author {
          font-size: 0.75rem;
          margin-top: 0.5rem;
          opacity: 0.7;
        }
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1rem;
    }
    .content-card {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid ${(props) => props.theme.color.primary};
      width: 75%;
      list-style: none;
      &:hover {
        background: ${(props) =>
          transparentize(0.4, props.theme.color.primary)};
      }
      h3,
      p {
        margin: 0 !important;
      }
    }
    img {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid ${(props) => props.theme.color.primary};
    }
    p {
      color: white;
      margin-bottom: 1rem;
      line-height: 1.75rem;
    }
    .content-block {
      margin-bottom: 3rem;
    }
    .work-list {
      li {
        border-bottom: calc((1rem / 16)) solid
          ${(props) => props.theme.color.primary};
        font-weight: 200;
        cursor: pointer;
        &:hover {
          background: ${(props) =>
            transparentize(0.7, props.theme.color.primary)};
        }
        .divider {
          margin: 0 0.5rem;
        }
      }
    }
    .work-content {
      overflow-y: hidden;
      .content-header {
        border-bottom: calc((1rem / 16)) solid
          ${(props) => props.theme.color.primary};
        .back-button {
          cursor: pointer;
        }
      }
      .content-body {
        overflow-y: auto;
      }
    }
  }
`;

export default MainView;
