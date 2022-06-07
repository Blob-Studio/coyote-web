import styled from "styled-components";
import { Flex, Box } from "rebass";
import works from './../data/works';

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
        {works.map((work, index) => (
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
              {work.workType.map((type, index) => (
                <>
                  <span>{type}</span>
                  {index != work.workType.length - 1 && ", "}
                </>
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
