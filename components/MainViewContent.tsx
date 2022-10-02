import { Flex } from 'rebass';
import styled from 'styled-components';
import { transparentize } from 'polished';

const MainViewContent = ({ className, children }: any) => {
  return <StyledMainViewContent className={className}>{children}</StyledMainViewContent>;
};

const StyledMainViewContent = styled(Flex)`
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 2rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 5px;
  }
`;

export default MainViewContent;
