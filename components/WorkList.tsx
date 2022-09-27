import styled from "styled-components";
import { Flex, Text } from "rebass";
import works from "./../data/works";
import { Fragment } from "react";
import { transparentize } from "polished";

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
            sx={{ height: ["4rem"], px: ["1rem"], fontSize: '1.4rem' }}
            alignItems={"center"}
            onClick={() => {
              props.setSelectedWork(index);
              props.setPanel("work-content");
            }}
          >
            <Text as="strong">
              {work.name}
            </Text>
            <Text as="span" sx={{
              color: 'white', 
              fontSize: '1rem',
              opacity: '1',
              // ml: '0.5rem'
            }}>
              <span className="divider">/</span>
              {work.workType.map((type: any, index: number) => (
                <Fragment key={index}>
                  <span>{type}</span>
                  {index != work.workType.length - 1 && ", "}
                </Fragment>
              ))}
            </Text>
          </Flex>
        ))}
      </Flex>
    </StyledWorkList>
  );
};

const StyledWorkList = styled(Flex)`
  li {
    border-bottom: calc((1rem / 16)) solid
      ${(props) => props.theme.color.primary};
    font-weight: 200;
    cursor: pointer;
    &:hover {
      background: ${(props) =>
        transparentize(0.7, props.theme.color.primary)};
    }
    .divider {
      margin: 0 0.5rem;
    }
  }
`;

export default WorkList;
