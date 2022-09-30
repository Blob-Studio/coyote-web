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
    <StyledWorkList className="work-content">
      <Flex as={"ul"} className="work-list">
        {WorkList.map((work: IWork, index: number) => (
          <Link key={index} href={`works/${work.workSafeURL}`}>
            <Flex as={"li"} className="list-item">
              <Text as="strong">
                {work.name}
              </Text>
              <Text as="span">
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
  width: 100%;
  flex-direction: column;
  .work-list {
    flex-direction: column;
    width: 100%;
    .list-item {
      border-bottom: calc((1rem / 16)) solid
        ${(props) => props.theme.colors.primary};
      font-weight: 200;
      height: 4rem;
      padding: 0 1rem;
      font-size: 1.4rem;
      cursor: pointer;
      align-items: center;
      &:hover {
        background: ${(props) =>
          transparentize(0.7, props.theme.colors.primary)};
      }
      .divider {
        margin: 0 0.5rem;
      }
      span {
        color: white;
        font-size: 1rem;

      }
    }
  }
`;

export default Works;
