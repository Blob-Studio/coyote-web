import { Box, Flex, Link } from 'rebass';
import styled from 'styled-components';
import theme from '../utils/theme';
import StyledMainViewContent from './../components/MainViewContent';

import getLocales from '../utils/getLocales';
import { useRouter } from 'next/router';

const AboutUs = (props : any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as "en" | "es");
  return (
    <StyledAboutUs>
      {locale.about.content}
    </StyledAboutUs>
  )
};

const StyledAboutUs = styled(StyledMainViewContent)`
  p {
    color: white;
    line-height: 170%;
  }
`;

export default AboutUs;