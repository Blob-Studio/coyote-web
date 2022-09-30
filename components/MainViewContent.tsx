import { Flex } from "rebass";
import styled from "styled-components";

const MainViewContent = ({className, children} : any) => {
  return (
    <StyledMainViewContent className={className}>
      {children}
    </StyledMainViewContent>
  )
}

const StyledMainViewContent = styled(Flex)`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  overflow-y: auto;
  padding-top: 2rem;
`;

export default MainViewContent;