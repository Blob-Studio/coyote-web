import styled from "styled-components";
import { Flex, Text } from "rebass";
import { Fragment } from "react";
import { transparentize } from "polished";
import Link from 'next/link';

import WorkList from './worklist';
import IWork from "../../utils/workSchema";
console.log(WorkList);

const Works = (props: any) => {
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
        {WorkList.map((work: IWork, index: number) => (
          <Link key={index} href={`works/${work.workSafeURL}`}>
            <Flex
              as={"li"}
              sx={{ height: ["4rem"], px: ["1rem"], fontSize: '1.4rem' }}
              alignItems={"center"}
            >
              <Text as="strong">
                {work.name}
              </Text>
              <Text as="span" sx={{
                color: 'white', 
                fontSize: '1rem',
                opacity: '1'
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
          </Link>
        ))}
      </Flex>
    </StyledWorkList>
  );
};

const StyledWorkList = styled(Flex)`
  li {
    border-bottom: calc((1rem / 16)) solid
      ${(props) => props.theme.colors.primary};
    font-weight: 200;
    cursor: pointer;
    &:hover {
      background: ${(props) =>
        transparentize(0.7, props.theme.colors.primary)};
    }
    .divider {
      margin: 0 0.5rem;
    }
  }
`;

export default Works;
