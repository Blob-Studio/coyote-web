import styled from "styled-components";
import { Box, Flex } from "rebass";
import { useRouter } from "next/router";
import { transparentize } from "polished";

import getLocales from "../utils/getLocales";

const MainView = ({ children }: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");

  return (
    <StyledMainView className={'main-view'}>
      <Flex width="100%" className="main-view-content" height={"100%"}>
        {children}
      </Flex>
    </StyledMainView>
  );
};

const StyledMainView = styled(Flex)`
  grid-area: main-view;
  border-bottom: ${(props) => props.theme.border.width} solid ${(props) => props.theme.color.primary};
  position: relative;
  .main-view-content {
    flex-grow: 1;
    .post-list-item {
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.color.primary};
      padding: 1rem;
      p {
        margin: 0;
      }
      h2 {
        margin-bottom: 0.5rem;
      }
      .author {
        font-size: 0.75rem;
        margin-top: 0.5rem;
        opacity: 0.7;
      }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1rem;
    }
    .content-card {
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid ${(props) => props.theme.color.primary};
      width: 75%;
      list-style: none;
      &:hover {
        background: ${(props) =>
          transparentize(0.4, props.theme.color.primary)};
      }
      h3,
      p {
        margin: 0 !important;
      }
    }
    img {
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid ${(props) => props.theme.color.primary};
    }
    p {
      color: white;
      margin-bottom: 1rem;
      line-height: 1.75rem;
    }
    .content-block {
      margin-bottom: 3rem;
    }
    .work-content {
      overflow-y: hidden;
      .content-header {
        border-bottom: calc((1rem / 16)) solid
          ${(props) => props.theme.color.primary};
        .back-button {
          cursor: pointer;
        }
      }
      .content-body {
        overflow-y: auto;
      }
    }
  }
`;

export default MainView;
