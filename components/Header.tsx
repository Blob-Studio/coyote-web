import Link from 'next/link';
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import Marquee from "react-fast-marquee";
import theme from "../utils/theme";

const br = theme.breakpoints;

const Header = (props: any) => {
  return (
    <StyledHeader flexDirection={"column"} className="header">
      <Flex className="top-bar">
        <Marquee gradient={false} speed={25} direction={'right'}>
          - WE CREATE COMPELLING WEB EXPERIENCES -
          サイバースペースを通じて共鳴する - WE CRAFT SEAMLESS INTERACTIVE
          STORIES FOR END USERS - サイバースペースを通じて共鳴する 
        </Marquee>
      </Flex>
      <Link href="/">
        <Flex className="title-bar">
          <Marquee gradient={false} speed={25} direction={'left'}>
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </Marquee>
        </Flex>
      </Link>
    </StyledHeader>
  );
};

const MarqueeContent = () => {
  return (
    <div className="title-bar-content">
      <Text as="h1" className="title">
        COYOTE <span className="outlined">WEB STUDIO</span>
      </Text>
      <Text as={"p"} className="divider">
        /
      </Text>
      <Flex className="jp-text" flexDirection="column">
        <Box>ウェブデザイン</Box>
        <Box className="outlined">ウェブ開発</Box>
      </Flex>
    </div>
  )
}

const StyledHeader = styled(Flex)`
  grid-area: header;
  .top-bar {
    height: 3rem;
    font-size: 1.5rem;
    padding: 0;
    font-weight: 600;
    align-items: center;
    color: ${(props) => (props.theme.colors.font)};
    background-color: ${(props) => (props.theme.colors.primary)};
  }
  .title-bar {
    height: 8rem;
    border-bottom: 0.1rem solid ${(props) => (props.theme.colors.primary)};
    cursor: pointer;
    .title-bar-content {
      margin: 0 1rem;
      display: flex;
      align-items: center;
      .title {
        font-size: 6rem;
      }
      .jp-text {
        font-size: 2rem;
        font-weight: 600;
        margin-left: 2rem;
      }
      .divider {
        font-size: 5rem;
        margin-left: 2rem;
        position: relative;
        top: -0.5rem;
        font-weight: 600;
      }
    }
  }
  @media screen and (${br.dskt}) {
    .title-bar {
      padding: 0;
      height: 6rem;
      .title {
        font-size: 4rem;
      }
    }
  }
`;

export default Header;
