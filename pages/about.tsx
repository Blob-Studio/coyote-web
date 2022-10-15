import styled from 'styled-components';
import { useRouter } from 'next/router';
import { transparentize } from 'polished';

import MainViewContent from './../components/MainViewContent';

import getLocales from '../utils/getLocales';

const AboutUs = () => {
  const router = useRouter();
  const locale = getLocales(router.locale as 'en' | 'es');
  return (
    <StyledAboutUs>
      <div className="page-wrapper">{locale.about.content}</div>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled(MainViewContent)`
  .page-wrapper {
    width: 70%;
    margin: 0 auto;
  }
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
  .content-card {
    background: ${(props) => transparentize(0.9, props.theme.colors.primary)};
  }
  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    .page-wrapper {
      width: 100%;
    }
  }
`;

export default AboutUs;
