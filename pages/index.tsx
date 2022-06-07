import styled from 'styled-components'

import { useState } from 'react';

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import MainView from './../components/MainView';
import DecorationMarquee from './../components/DecorationMarquee';
import TimeInfo from './../components/TimeInfo';

export default function Home() {
  type IPanel = 'work-list' | 'work-content' | 'posts' | 'about' | 'our-vision' | 'services' | 'unselected';

  const [panel, setPanel] = useState<IPanel>('unselected');
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <StyledHomepage>
      <Header panel={panel} setPanel={setPanel} selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
      <Sidebar />
      <MainView panel={panel} setPanel={setPanel} selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
      <TimeInfo />
      <DecorationMarquee />
    </StyledHomepage>
  )
}

const StyledHomepage = styled.div`
  display: grid;
  grid-template-columns: calc((100vw / 12) * 4) calc((100vw / 12) * 8);
  grid-template-rows: 11rem calc(100vh - 17rem) 6rem;
  height: 100vh; 
  grid-template-areas: 
    "header header"
    "side-bar main-view"
    "bottom-info decoration-marquee";
  .outlined {
    -webkit-text-stroke-width: calc(1rem / 16);
    -webkit-text-stroke-color: ${props => props.theme.color.primary};
    -webkit-text-fill-color: ${props => props.theme.color.background};
  }
`


