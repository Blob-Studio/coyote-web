import styled from "styled-components";
import { Flex, Box, Link } from "rebass";
import { default as NextLink } from 'next/link';
import { transparentize } from "polished";
import IWork from "../utils/workSchema";

const WorkContent = ({ url, children}: {url: string, children: any}) => {
  return (
    <StyledWorkContent flexDirection={"column"} className="work-content" width="100%">
      <Flex
        className="content-header"
        height={"3rem"}
        alignItems="center"
        px={"1rem"}
      >
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
      <Flex className="content-body" flexDirection={"column"} width={"100%"}>
        <Box width={"40rem"} mx={"auto"} pt="2rem">
          {children}
        </Box>
      </Flex>
    </StyledWorkContent>
  );
};

const StyledWorkContent = styled(Flex)`
  .url-bar {
    background: ${(props) => transparentize(0.8, props.theme.color.primary)};
    width: 80%;
    text-align: center;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default WorkContent;
