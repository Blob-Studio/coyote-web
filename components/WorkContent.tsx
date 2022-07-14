import styled from "styled-components";
import { Flex, Box, Link } from "rebass";
import works from "./../data/works";
import ReactMarkdown from 'react-markdown'

const WorkContent = (props: any) => {
  return (
    <Flex flexDirection={"column"} className="work-content" width="100%">
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
          <Link href={works[props.selectedWork].url}>{works[props.selectedWork].url}</Link>
        </Box>
      </Flex>
      <Flex className="content-body" flexDirection={"column"} width={"100%"}>
        <Box width={"40rem"} mx={"auto"} pt="2rem">
          {works[props.selectedWork].content != undefined && (
            <ReactMarkdown>{works[props.selectedWork].content}</ReactMarkdown>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

const StyledWorkContent = styled(Flex)``;

export default WorkContent;
