import styled from "styled-components";
import { Flex, Box } from "rebass";
import works from "./../data/works";
import { Fragment } from "react";

const WorkList = (props: any) => {
  return (
    <StyledWorkList
      flexDirection={"column"}
      className="work-content"
      width="100%"
    >
      <Flex
        as={"ul"}
        className="work-list"
        flexDirection={"column"}
        width={"100%"}
      >
        {works.map((work: any, index: number) => (
          <Flex
            as={"li"}
            key={index}
            sx={{ height: ["2rem"], px: ["1rem"] }}
            alignItems={"center"}
            onClick={() => {
              props.setSelectedWork(index);
              props.setPanel("work-content");
            }}
          >
            <strong>{work.name}</strong>
            <span className="divider"> - </span>
            <span>
              {work.workType.map((type: any, index: number) => (
                <Fragment key={index}>
                  <span>{type}</span>
                  {index != work.workType.length - 1 && ", "}
                </Fragment>
              ))}
            </span>
          </Flex>
        ))}
      </Flex>
    </StyledWorkList>
  );
};

const StyledWorkList = styled(Flex)``;

export default WorkList;
