import Image from 'next/image';
import { Box, Flex, Link } from 'rebass';
import styled from 'styled-components';
import theme from '../utils/theme';
import MainViewContent from './../components/MainViewContent';

const OurServices = ['Web Development', 'Website Design', 'Website + CMS', 'E-Commerce', 'Wordpress', 'SEO Optimization'];

const OurTechStack = [
  {
    name: 'React',
    logo: 'react',
  },
  {
    name: 'Next.js',
    logo: 'next',
    invertLogo: true,
  },
  {
    name: 'Gatsby',
    logo: 'gatsby',
    ext: 'png',
  },
  {
    name: 'Node',
    logo: 'node',
    ext: 'png',
  },
  {
    name: 'Strapi',
    logo: 'strapi',
    ext: 'png',
  },
  {
    name: 'Google Cloud',
    logo: 'google-cloud',
    ext: 'png',
  },
  {
    name: 'AWS',
    logo: 'aws',
    ext: 'png',
  },
  {
    name: 'Github',
    logo: 'github',
    ext: 'png',
    invertLogo: true,
  },
  {
    name: 'ThreeJS',
    logo: 'threejs',
    invertLogo: true,
    ext: 'png',
  },
  // 'Github',
  // 'Three.js'
];

const Services = (props: any) => {
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
        <h1>We ♡ these tools</h1>
        <Box flexDirection={'column'}>
          <ul>
            {OurTechStack.map((tech, index) => (
              <li key={index}>
                <div className={`logo-wrapper ${tech.invertLogo ? 'inverted' : ''}`}>
                  <Image src={`/img/icons/${tech.logo}.${tech.ext || 'svg'}`} alt={tech.name} width={14} height={14} />
                </div>
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Flex className="contact">
        <Box className="top-text">WANT ANYTHING ELSE?</Box>
        <Link href="#">CONTACT US</Link>
      </Flex>
    </StyledServices>
  );
};

const StyledServices = styled(MainViewContent)`
  .content-block {
    text-align: center;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 1rem;
        margin-bottom: 0.8rem;
        border: 0.1rem solid ${(props) => props.theme.colors.primary};
        display: inline-block;
        white-space: nowrap;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
        text-align: center;
        align-items: center;
        display: flex;
        width: calc(30%);
        justify-content: center;
        .logo-wrapper {
          margin-right: 0.6rem;
          mix-blend-mode: lighten;
          &.inverted {
            filter: invert(1);
          }
        }
      }
    }
  }
  .contact {
    flex-direction: column;
    text-align: center;
    .top-text {
      border: 0.1rem solid ${(props) => props.theme.colors.primary};
      padding: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
    }
    a {
      padding: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.font};
      display: block;
    }
  }
`;

export default Services;
