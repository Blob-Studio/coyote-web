import styled from "styled-components";

import { useState } from "react";

import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import MainView from "./../components/MainView";
import TimeInfo from "./../components/TimeInfo";

export default function Home() {
  type IPanel =
    | "work-list"
    | "work-content"
    | "about"
    | "our-vision"
    | "services"
    | "unselected";

  // Should this be in the MainView component? Or should it be global state?
  const [panel, setPanel] = useState<IPanel>("unselected");
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <StyledHomepage className={`global-${panel}`}>
      {/* <div className="rainbow-gradient" /> */}
      <Header
        panel={panel}
        setPanel={setPanel}
        selectedWork={selectedWork}
        setSelectedWork={setSelectedWork}
      />
      <Sidebar />
      <MainView
        // Should this be in the MainView component? Or should it be global state?
        panel={panel}
        setPanel={setPanel}
        selectedWork={selectedWork}
        setSelectedWork={setSelectedWork}
      />
      <TimeInfo />
    </StyledHomepage>
  );
}

const StyledHomepage = styled.main`
  display: grid;
  overflow: hidden;
  grid-template-columns: calc((100vw / 12) * 4) calc((100vw / 12) * 8);
  grid-template-rows: calc(10rem + ${(props) => props.theme.border.width} * 2) calc(100vh - 14rem) 4rem;
  height: 100vh;
  position: relative;
  grid-template-areas:
    "header header"
    "side-bar main-view"
    "bottom-info main-view";
  &:not(.global-unselected) {
    grid-template-columns: calc((100vw / 12) * 3) calc((100vw / 12) * 9);
    grid-template-rows: calc(6rem + ${(props) => props.theme.border.width} * 2) calc(100vh - 10rem) 4rem;
    .side-bar {
      .breakdown {
        .breakdown-text {
          font-size: 1.2rem;
          line-height: 120%;
        }
      }
    }
    .header {
      .title-bar {
        height: 4rem;
        .title-content {
          h1 {
            font-size: 3rem;
          }
          p, .jp-text {
            font-size: 1rem;
          }
          .divider {
            font-size: 2rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 680px) {
    grid-template-columns: 100%;
    grid-template-rows: calc(calc(9rem + ${(props) => props.theme.border.width} * 2)) calc(100vh - 11rem);
    grid-template-areas:
      "header"
      "main-view"
  }
  .outlined {
    -webkit-text-stroke-width: ${(props) => props.theme.border.width};
    -webkit-text-stroke-color: ${(props) => props.theme.color.primary};
    -webkit-text-fill-color: ${(props) => props.theme.color.background};
  }
  .rainbow-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    mix-blend-mode: multiply;
    pointer-events: none;
    background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
}
`;
