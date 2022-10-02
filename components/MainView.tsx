import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useRouter } from 'next/router';
import { transparentize } from 'polished';

import getLocales from '../utils/getLocales';

const MainView = ({ children }: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');

  return (
    <StyledMainView>
      <StyledMainViewContent>{children}</StyledMainViewContent>
    </StyledMainView>
  );
};

const StyledMainViewContent = styled(Flex)`
  width: 100%;
  height: 100%;

  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    flex-direction: column;
    /* height: fit-content; */
  }
`;

const StyledMainView = styled(Flex)`
  grid-area: main;
  position: relative;
  display: flex;
  max-height: calc(100vh - ${(p) => p.theme.sizes.headerHeight});
  @media screen and (${props => props.theme.breakpoints.mob}) {
    max-height: none;
    height: 100%;
  }
`;

export default MainView;
