import { Box, Flex, Link } from 'rebass';
import styled from 'styled-components';
import theme from '../utils/theme';
import MainViewContent from './../components/MainViewContent';

import getLocales from '../utils/getLocales';
import { useRouter } from 'next/router';

const AboutUs = (props: any) => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');
  return <StyledAboutUs>{locale.about.content}</StyledAboutUs>;
};

const StyledAboutUs = styled(MainViewContent)`
  h1,
  h2 {
    margin-bottom: 1rem;
  }
  p {
    color: white;
    line-height: 180%;
    font-size: 1.2rem;
    font-weight: 200;
  }
  .breakdown {
    p {
      margin-bottom: 1rem;
    }
  }
`;

export default AboutUs;
