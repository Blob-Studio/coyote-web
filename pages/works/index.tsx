import styled from "styled-components";
import { Flex, Text } from "rebass";
import { Fragment } from "react";
import { transparentize } from "polished";
import Link from 'next/link';

import WorkList from './../../data/works/worklist';

const Works = (props: any) => {
  return (
    <StyledWorkList className="work-content">
      <Flex as={"ul"} className="work-list">
        {Object.keys(WorkList).map((key: any, index: number) => (
          <Link key={index} href={`works/${WorkList[key].workSafeURL}`}>
            <Flex as={"li"} className="list-item">
              <Text as="strong">
                {WorkList[key].name}
              </Text>
              <Text as="span">
                <span className="divider">/</span>
                {WorkList[key].workType.map((type: any, index: number) => (
                  <Fragment key={index}>
                    <span>{type}</span>
                    {index != WorkList[key].workType.length - 1 && ", "}
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
  ${props => props.theme.textures.polka};
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
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
      background: ${props => props.theme.colors.background};
      align-items: center;
      &:last-of-type {
        border-bottom: 0;
      }
      &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${props => props.theme.colors.font};
        .divider,
        span {
          color: ${props => transparentize(0.4, props.theme.colors.font)};
        }
      }
      .divider,
      span {
        color: white;
      }
      .divider {
        margin: 0 0.5rem;
      }
      span {
        font-size: 1rem;

      }
    }
  }
`;

export default Works;
