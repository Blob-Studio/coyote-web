import styled from 'styled-components'

import { useState } from 'react';

import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import MainView from './../components/MainView';
import TimeInfo from './../components/TimeInfo';

export default function Home() {
  type IPanel = 'work-list' | 'work-content' | 'about' | 'our-vision' | 'services' | 'unselected';

  // Should this be in the MainView component? Or should it be global state?
  const [panel, setPanel] = useState<IPanel>('unselected');
  const [selectedWork, setSelectedWork] = useState(0);

  return (
    <StyledHomepage>
      <Header panel={panel} setPanel={setPanel} selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>
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
  )
}

const StyledHomepage = styled.main`
  display: grid;
  grid-template-columns: calc((100vw / 12) * 4) calc((100vw / 12) * 8);
  grid-template-rows: 9rem calc(100vh - 11rem) 2rem;
  height: 100vh; 
  grid-template-areas: 
    "header header"
    "side-bar main-view"
    "bottom-info main-view";
  .outlined {
    -webkit-text-stroke-width: calc(1rem / 16);
    -webkit-text-stroke-color: ${props => props.theme.color.primary};
    -webkit-text-fill-color: ${props => props.theme.color.background};
  }
`


