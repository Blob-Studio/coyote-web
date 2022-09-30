import styled from "styled-components";
import { Flex, Box, Link } from "rebass";
import { transparentize } from "polished";
import IWork from "../utils/workSchema";
import NextLink from 'next/link';
import MainViewContent from "./MainViewContent";

const WorkContent = ({ url, children}: {url: string, children: any}) => {
  return (
    <StyledWorkContent className="work-content">
      <Flex className="content-header">
        <NextLink href="/works">
          <Box className="back-button">
            ← Back
          </Box>
        </NextLink>
        <Box className="url-bar" mx={"auto"}>
          <Link target="_blank" href={url}>
            {url}
          </Link>
        </Box>
      </Flex>
      <MainViewContent>
        {children}
      </MainViewContent>
    </StyledWorkContent>
  );
};

const StyledWorkContent = styled(Flex)`
  flex-direction: column;
  width: 100%;
  .content-header {
    padding: 0 1rem;
    height: 3rem;
    align-items: center;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.primary};
    .url-bar {
      background: ${(props) => transparentize(0.8, props.theme.colors.primary)};
      width: 80%;
      text-align: center;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default WorkContent;
