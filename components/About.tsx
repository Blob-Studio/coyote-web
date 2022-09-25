import styled from "styled-components";
import { Flex, Box } from "rebass";
import { useRouter } from "next/router";
import getLocales from "../utils/getLocales";
import { lighten, transparentize } from "polished";

const About = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");
  return (
    <StyledAbout flexDirection={"column"} width="100%">
      <Box width="40rem" py={"2rem"} mx={"auto"}>
        {locale.about.content}
      </Box>
    </StyledAbout>
  );
};

const StyledAbout = styled(Flex)`
  overflow-y: auto;
`;

export default About;
