import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import Marquee from "react-fast-marquee";

import Theme from "../utils/theme";

const br = Theme.breakpoints;

const Header = (props: any) => {
  return (
    <StyledHeader flexDirection={"column"}>
      <Flex className="top-bar" alignItems="center">
        <Marquee gradient={false} speed={25} direction={'right'}>
          - WE CREATE COMPELLING WEB EXPERIENCES -
          サイバースペースを通じて共鳴する - WE CRAFT SEAMLESS INTERACTIVE
          STORIES FOR END USERS - サイバースペースを通じて共鳴する 
        </Marquee>
      </Flex>
      <Flex px="1rem" className="title-bar" alignItems={"center"}>
        <Marquee gradient={false} speed={25} direction={'left'}>
          <Text as="h1" className="title">
            COYOTE <span className="outlined">WEB STUDIO</span>
          </Text>
          <Text
            as={"p"}
            sx={{
              fontSize: "5rem",
              marginLeft: "2rem",
              position: "relative",
              top: "-0.5rem",
            }}
          >
            /
          </Text>
          <Flex className="jp-text" flexDirection="column">
            <Box>ウェブデザイン</Box>
            <Box className="outlined">ウェブ開発</Box>
          </Flex>
          <Text as="h1" className="title">
            COYOTE <span className="outlined">WEB STUDIO</span>
          </Text>
          <Text
            as={"p"}
            sx={{
              fontSize: "5rem",
              marginLeft: "2rem",
              position: "relative",
              top: "-0.5rem",
            }}
          >
            /
          </Text>
          <Flex className="jp-text" flexDirection="column">
            <Box>ウェブデザイン</Box>
            <Box className="outlined">ウェブ開発</Box>
          </Flex>
        </Marquee>
      </Flex>
    </StyledHeader>
  );
};

const StyledHeader = styled(Flex)`
  grid-area: header;

  .top-bar,
  .title-bar {
    width: 100%;
    border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
    font-weight: 600;
  }
  .top-bar {
    grid-area: top-bar;
    height: 3rem;
    font-size: 1.5rem;
    padding: 0;
  }
  .title-bar {
    height: 8rem;
  }
  .title {
    font-size: 6rem;
  }
  .jp-text {
    font-size: 2rem;
    font-weight: 600;
    margin-left: 2rem;
  }
  @media screen and (${br.dskt}) {
    .title {
      font-size: 4rem;
    }
  }
`;

export default Header;
