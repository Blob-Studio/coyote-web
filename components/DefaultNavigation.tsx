import { useRouter } from 'next/router';
import { Flex, Box } from 'rebass';
import getLocales from "../utils/getLocales";

type DefaultNavigationProps = any;

const DefaultNavigation = (props : DefaultNavigationProps) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");
  
  return (
    <Flex alignItems="center" justifyContent="center" className="breakdown">
      <Box
        as={"p"}
        sx={{ textAlign: "center", p: "1rem", fontSize: '2rem'}}
        className="breakdown-text"
      >
        {locale.sidebar.headerText}
      </Box>
    </Flex>
  )
};

export default DefaultNavigation;