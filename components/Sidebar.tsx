import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { useRouter } from 'next/router';
import getLocales from '../utils/getLocales';
import ThreeJSPageScene from './ThreeJSPageScene';
import TimeInfo from './TimeInfo';
import NavButton from './NavButton';

const Sidebar = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');

  return (
    <StyledSidebar className={`${props.className} side-bar`} flexDirection={'column'}>
      <Flex alignItems="center" justifyContent="center" className="breakdown">
        <Box as={'p'} className="breakdown-text">
          {locale.sidebar.headerText}
        </Box>
      </Flex>
      <Box className="graphic">
        <div className="navigation">
          <NavButton currentPath={router.pathname} url="/about">
            {locale.mainNavigation.about}
          </NavButton>
          <NavButton currentPath={router.pathname} url="/works">
            {locale.mainNavigation.work}
          </NavButton>
          <NavButton currentPath={router.pathname} url="/services">
            {locale.mainNavigation.services}
          </NavButton>
        </div>
        <ThreeJSPageScene />
      </Box>
      <TimeInfo />
    </StyledSidebar>
  );
};

const StyledSidebar = styled(Flex)`
  border-right: ${(p) => p.theme.border.width} solid ${(p) => p.theme.colors.primary};
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  max-height: calc(100vh - ${(p) => p.theme.sizes.headerHeight});
  .breakdown {
    border-bottom: ${(p) => p.theme.border.width} solid ${(p) => p.theme.colors.primary};
    font-size: 1.4rem;
    text-align: center;
    padding: 1.2rem;
    line-height: 130%;
  }
  .graphic {
    flex-grow: 1;
    overflow: hidden;
    user-select: none;
  }
  .navigation {
    display: none;
  }
  @media screen and (${props => props.theme.breakpoints.mobile}) {
    max-height: none;
    .graphic {
      position: relative;
      ${(props) => props.theme.textures.striped};
      .navigation {
        z-index: 10;
        display: flex;
        position: absolute;
        flex-direction: column;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        justify-content: center;
        .main-navigation-button {
          width: 80%;
          height: fit-content;
          padding: 1rem 0;
          margin-left: 10%;
          mix-blend-mode: multiply;
          margin-bottom: 1rem;
          background: hsla(0, 0%, 0%, 0.7);
          &:last-of-type {
            margin-bottom: 0;
          }
          .main-navigation-button-text {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export default Sidebar;
