import styled from "styled-components";
import { Flex } from "rebass";
import VerticalNavbar from "./VerticalNavbar";
import WorkList from "./WorkList";
import Services from './Services';
import DefaultNavigation from './DefaultNavigation';
import WorkContent from "./WorkContent";
import { transparentize } from "polished";

const MainView = (props: any) => {

  return (
    <StyledMainView className={`main-view ${props.panel}`}>
      <VerticalNavbar />
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
        {props.panel == "services" && (
          <Services />
        )}
        {props.panel == 'unselected' && (
          <DefaultNavigation />
          // <Starfield />
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
      margin: 0  calc(50% - 20rem);
      padding: 2rem 0;
      top: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      .main-navigation-button {
        width: 60%;
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
    .breakdown {
      display: none;
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
        .main-navigation-button {
          width: 80%;
          height: 4rem;
          span {
            font-size: 2rem;
          }
        }
      }
      .main-view-content {
        flex-grow: unset;
        height: fit-content;
      }
      .breakdown {
        border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
        display: block;
        height: fit-content;
        .breakdown-text {
          line-height: 2.3rem;
          font-weight: 200;
          color: ${(props) => props.theme.color.primary};
          font-size: 1.4rem;
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
    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 1rem;
    }
    .content-card {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid ${(props) => props.theme.color.primary};
      /* width: 70%; */
      list-style: none;
      transition: 0.1s ease-in-out all;
      &,
      a {
        display: flex;
      }
      &:hover {
        background: ${(props) =>
          transparentize(0.7, props.theme.color.primary)};
      }
      h3, p {
        /* display: inline-block; */
        margin: 0 !important;
        margin-right: 1rem !important;
      }
      p {
        font-size: 0.8rem;
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
