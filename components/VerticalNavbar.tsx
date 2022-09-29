import { Flex, Box } from 'rebass';
import { useRouter } from "next/router";
import getLocales from "../utils/getLocales";

type VerticalNavbarProps = any;

const VerticalNavbar = (props : VerticalNavbarProps) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");
  return (
    <Flex className="main-view-navigation" flexDirection={"column"}>
        <InitialNavButton {...props} thisPanel="about">
          {locale.mainNavigation.about}
        </InitialNavButton>
        <InitialNavButton {...props} thisPanel="work-list">
          {locale.mainNavigation.work}
        </InitialNavButton>
        <InitialNavButton {...props} thisPanel="services">
          {locale.mainNavigation.services}
        </InitialNavButton>
      </Flex>
  )
};

const InitialNavButton = ({ children, thisPanel, ...props }: any) => {
  return (
    <Box
      className={`main-navigation-button ${
        props.panel == thisPanel ? "selected" : null
      }`}
      onClick={() => {
        props.setPanel(thisPanel);
      }}
    >
      <span>{children}</span>
    </Box>
  );
};

export default VerticalNavbar;