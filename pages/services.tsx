import { Box, Flex, Link } from 'rebass';
import styled from 'styled-components';
import theme from '../utils/theme';
import StyledMainViewContent from './../components/MainViewContent';

const OurServices = [
  'Web Development',
  'Website Design',
  'Website + CMS',
  'E-Commerce',
  'Wordpress',
  'SEO Optimization',
];

const OurTechStack = [
  'React',
  'Next.js',
  'Strapi',
  'Node',
  'Gatsby',
  'Google Cloud',
  'AWS',
  'Github',
  'Three.js'
];

const Services = (props : any) => {
  return (
    <StyledServices>
      <Box className="content-block">
        <h1>We provide the following services</h1>
        <Box>
          <ul>
            {OurServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box className="content-block">
        <h1>We LOVE these tools</h1>
        <Box flexDirection={"column"}>
          <ul>
            {OurTechStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box sx={{
        border: `0.1rem solid ${theme.colors.primary}`,
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
        background: theme.colors.primary,
        color: theme.colors.font,
        display: 'block'
      }}>
        CONTACT US
      </Link>
    </StyledServices>
  )
};

const StyledServices = styled(StyledMainViewContent)`
  .content-block {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 1rem;
        margin-bottom: 0.8rem;
        border: 0.1rem solid ${(props) => (props.theme.colors.primary)};
        display: inline-block;
        white-space: nowrap;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`;

export default Services;