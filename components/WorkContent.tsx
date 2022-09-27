import styled from "styled-components";
import { Flex, Box, Link } from "rebass";
import works from "./../data/works";
import Markdown from "react-markdown";
import { transparentize } from "polished";

const WorkContent = (props: any) => {
  return (
    <StyledWorkContent flexDirection={"column"} className="work-content" width="100%">
      <Flex
        className="content-header"
        height={"3rem"}
        alignItems="center"
        px={"1rem"}
      >
        <Box
          className="back-button"
          onClick={() => {
            props.setPanel("work-list");
          }}
        >
          ← Back
        </Box>
        <Box className="url-bar" mx={"auto"}>
          <Link target="_blank" href={works[props.selectedWork].url}>
            {works[props.selectedWork].url}
          </Link>
        </Box>
      </Flex>
      <Flex className="content-body" flexDirection={"column"} width={"100%"}>
        <Box width={"40rem"} mx={"auto"} pt="2rem">
          {works[props.selectedWork] &&
            works[props.selectedWork].content !== undefined && (
              <Markdown>{works[props.selectedWork].content}</Markdown>
            )}
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
