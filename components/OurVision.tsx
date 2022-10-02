import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const OurVision = (props: any) => {
  return (
    <StyledOurVision flexDirection={'column'} width="100%">
      <Box width="40rem" py={'2rem'} mx={'auto'}>
        <Box className="content-block">
          <h1>Make the Web Great Again</h1>
          <p>
            With the explosion of internet media, it has become increasingly difficult to make websites stand out. If you want to make an
            impact on the users experience, you have to provide a memorable experience.
          </p>
        </Box>
        <Box className="content-block">
          <h2>Websites should bring joy</h2>
          <p>
            Marketing websites should be fun, exciting. Remember when the internet was young and you looked. If using your website
            doesn&lsquo;t bring joy to the people who use it, then everything else falls apart. Surfing the web should be a delight, and our
            job is making it delightful for our users.
          </p>
        </Box>
        <Box className="content-block">
          <h2>Websites should be transparent</h2>
          <p>We believe that transparency means accountability</p>
        </Box>
        <Box className="content-block">
          <h2>Websites should be fast</h2>
          <p>
            As it&lsquo;s often said: performance is a feature. We take this very seriously and we expect from every site we build to be
            optimized and performant.
          </p>
        </Box>
        <Box className="content-block">
          <h2>Websites should be beautiful</h2>
          <p>Sometimes beautiful means simple, but sometimes it doesn&lsquo;t. We are here to bring the best designs to life.</p>
        </Box>
        <Box className="content-block">
          <h2>Websites should serve a purpouse</h2>
          <p>
            This might be the most important point. Every site that we build should serve a purpouse and meet the expectations of the
            client. We don&lsquo;t want to add more unnecesary noise to our global network.
          </p>
        </Box>
      </Box>
    </StyledOurVision>
  );
};

const StyledOurVision = styled(Flex)`
  overflow-y: auto;
`;

export default OurVision;
