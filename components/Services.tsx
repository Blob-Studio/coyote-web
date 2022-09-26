import { Box, Flex, Link } from 'rebass';
import theme from './../utils/theme';

const ServicesList = ({ children }: any) => (
  <Flex as="ul" mx={"-0.5rem"}>
    {children}
  </Flex>
);
const Service = ({ children }: any) => (
  <Box as={"li"} mx={"0.5rem"} className={"content-card"}>
    {children}
  </Box>
);

const Services = (props : any) => {
  return (
    <Box flexDirection={"column"} alignItems={"center"} width={"100%"}>
      <Box
        width="40rem"
        py={"2rem"}
        mx={"auto"}
        sx={{ textAlign: "center" }}
      >
        <Box className="content-block">
          <h1>We provide the following services</h1>
          <Flex flexDirection={"column"}>
            <ServicesList>
              <Service>Web Development</Service>
              <Service>Website Design</Service>
              <Service>Website + CMS</Service>
            </ServicesList>
            <ServicesList>
              <Service>E-commerce</Service>
              <Service>Wordpress</Service>
              <Service>SEO Optimization</Service>
            </ServicesList>
          </Flex>
        </Box>
        <Box className="content-block">
          <h1>We love modern tools</h1>
          <Flex flexDirection={"column"}>
            <ServicesList>
              <Service>React</Service>
              <Service>Next.js</Service>
              <Service>Strapi</Service>
            </ServicesList>
            <ServicesList>
              <Service>node</Service>
              <Service>Gatsby</Service>
              <Service>Express</Service>
            </ServicesList>
            <ServicesList>
              <Service>mongodb</Service>
              <Service>Google Cloud</Service>
              <Service>AWS</Service>
            </ServicesList>
          </Flex>
        </Box>
        <Box sx={{
          border: `1px solid ${theme.color.primary}`,
          p: '1.2rem',
          fontSize: '1.6rem',
          fontWeight: 600
        }}>
          WANT ANYTHING ELSE?
        </Box>
        <Link href="#" sx={{
          p: '1.2rem',
          fontSize: '1.6rem',
          fontWeight: 600,
          background: theme.color.primary,
          color: theme.color.font,
          display: 'block'
        }}>
          CONTACT US
        </Link>
      </Box>
    </Box>
  )
};

export default Services;