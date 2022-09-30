import styled from "styled-components";
import { Box, Flex } from "rebass";
import { useRouter } from "next/router";
import { transparentize } from "polished";

import getLocales from "../utils/getLocales";

const MainView = ({ children }: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");

  return (
    <StyledMainView className={'main-view'}>
      <Flex width="100%" className="main-view-content" height={"100%"}>
        {children}
      </Flex>
    </StyledMainView>
  );
};

const StyledMainView = styled(Flex)`
  grid-area: main;
  position: relative;
  display: flex;
  max-height: calc(100vh - 10rem);
`;

export default MainView;
