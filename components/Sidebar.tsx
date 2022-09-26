import styled from "styled-components";
import { Box, Flex } from "rebass";
import { useRouter } from "next/router";
import getLocales from "../utils/getLocales";
import ThreeJSPageScene from "./ThreeJSPageScene";

const Sidebar = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");

  return (
    <StyledSidebar className="side-bar" flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" className="breakdown">
        <Box
          as={"p"}
          sx={{ textAlign: "center", p: "1rem", fontSize: '2rem'}}
          className="breakdown-text"
        >
          {locale.sidebar.headerText}
        </Box>
      </Flex>
      <Box className="graphic">
        <ThreeJSPageScene />
      </Box>
    </StyledSidebar>
  );
};

const StyledSidebar = styled(Flex)`
  grid-area: side-bar;
  border-right: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
  border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
  .breakdown {
    border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
    .breakdown-text {
      line-height: 2.3rem;
      font-weight: 200;
    }
  }
  .graphic {
    flex-grow: 1;
    height: 100%;
  }
`;

export default Sidebar;
