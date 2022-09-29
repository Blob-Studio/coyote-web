import styled from "styled-components";
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import MainView from "./../components/MainView";
import TimeInfo from "./../components/TimeInfo";

type HomepageWrapperProps = any;

const HomepageWrapper = (props : HomepageWrapperProps) => {
  return (
    <StyledHomepageWrapper className={props.className}>
      <Header
        panel={props.panel}
        setPanel={props.setPanel}
      />
      <Sidebar />
      <MainView
        // Should this be in the MainView component? Or should it be global state?
        panel={props.panel}
        setPanel={props.setPanel}
        selectedWork={props.selectedWork}
        setSelectedWork={props.setSelectedWork}
      />
      <TimeInfo />
    </StyledHomepageWrapper>
  )
};

const StyledHomepageWrapper = styled.section`

`;

export default HomepageWrapper;