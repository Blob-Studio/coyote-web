import styled from "styled-components";
import { Box, Flex } from "rebass";
import { useRouter } from "next/router";
import getLocales from "../utils/getLocales";
import ThreeJSPageScene from "./ThreeJSPageScene";
import TimeInfo from "./TimeInfo";

const Sidebar = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");

  return (
    <StyledSidebar className="side-bar" flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" className="breakdown">
        <Box
          as={"p"}
          className="breakdown-text"
        >
          {locale.sidebar.headerText}
        </Box>
      </Flex>
      <Box className="graphic">
        <ThreeJSPageScene />
      </Box>
      <TimeInfo />
    </StyledSidebar>
  );
};

const StyledSidebar = styled(Flex)`
  border-right: ${(props) => props.theme.border.width} solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  max-height: calc(100vh - 10rem);
  .breakdown {
    border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.colors.primary};
    font-size: 1.4rem;
    text-align: center;
    padding: 1.2rem;
    line-height: 130%;
    /* background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font}; */
  }
  .graphic {
    flex-grow: 1;
    height: 100%;
  }
`;

export default Sidebar;
