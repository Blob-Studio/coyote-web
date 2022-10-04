import Image from 'next/image';
import { Box, Flex, Link } from 'rebass';
import styled from 'styled-components';
import theme from '../utils/theme';
import MainViewContent from './../components/MainViewContent';

const OurServices = [
  {
    name:  'Web Development',
    content: 'Coding is not easy, we all know that. To bring your project to life you not only want people who can code, but also people that care about quality, good practices, SEO, great design, and all stuff that make websites stand out.',
  },
  {
    name:  'Website + CMS',
    content: 'You probably will need to update the content of your site to make it more dynamic and score higher on search engines. We provide a customized experience for doing this using the Strapi Headless CMS platform.'
  },
  {
    name:  'E-Commerce',
    content: 'Now imagine that you want to sell your products but you dont want to spend time setting up your e-commerce platform. And lets say that you also want that site to look AMAZING. Well... I think we can help you with that...'
  },
  {
    name:  'Website Design',
    content: 'Here at Coyote we have a saying: \'Design is king\'`. Well, to be honest, I just made that up. But that doesn\'t make it less true! We put design at the center of the process because we believe that good design and planning makes a big difference.'
  },
  {
    name:  'Wordpress',
    content: 'Theres no denying: Wordpress is a widely used tool for making sites that are easy to use and mantain. So yeah... we do Wordpress, but it\'s not really our cup of tea. We prefer using different tools, but hey, if that\'s what you want, you got it buddy.'
  },
  {
    name:  'SEO Optimization',
    content: 'If you want to create a website, we assume that you want it to be reachable to your target audiences. SEO Optimization makes that a reality. We can integrate your favorite tools to track your site metric and make sure you are reaching for those good ol\' KPIs'
  },
];

const OurTechStack = [
  {
    name: 'React',
    logo: 'react',
    invertLogo: true,
  },
  {
    name: 'Next.js',
    logo: 'next',
    invertLogo: true,
  },
  {
    name: 'Gatsby',
    logo: 'gatsby',
    invertLogo: true,
  },
  {
    name: 'Node',
    logo: 'node',
    invertLogo: true,
  },
  {
    name: 'Strapi',
    logo: 'strapi',
    invertLogo: true
  },
  {
    name: 'Google Cloud',
    logo: 'google-cloud',
  },
  {
    name: 'AWS',
    logo: 'aws',
    invertLogo: true,
  },
  {
    name: 'Github',
    logo: 'github',
    invertLogo: true,
  },
  {
    name: 'ThreeJS',
    logo: 'three',
    ext: 'png',
    invertLogo: true
  },
  // 'Github',
  // 'Three.js'
];

const Services = (props: any) => {
  return (
    <StyledServices>
      <Box className="content-block">
        <h1>We got your back</h1>
        <Box>
          <ul className="services-list">
            {OurServices.map((service, index) => (
              <li className="service-card" key={index}>
                <h2>{service.name}</h2>
                <p>
                 {service.content}
                </p>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
      <Box className="content-block">
        <h1>We ♡ these tools</h1>
        <Box flexDirection={'column'}>
          <ul className="logo-list">
            {OurTechStack.map((tech, index) => (
              <li key={index} className="logo-item">
                <div className={`logo-wrapper ${tech.invertLogo ? 'inverted' : ''}`}>
                  <Image src={`/img/icons/svg/${tech.logo}.${tech.ext || 'svg'}`} alt={tech.name} layout={"fill"} />
                </div>
                {/* <span>{tech.name}</span> */}
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
    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }
    .services-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .service-card {
        width: 32%;
        margin: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border: 0.1rem solid ${props => props.theme.colors.primary};
        margin-bottom: 2rem;
        padding: 1.2rem 1.2rem;
        h2 {
          margin-bottom: 1rem;
        }
        p {
          color: white;
          margin-bottom: auto;
          line-height: 150%;
        }
      }
    }
    .logo-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        /* margin-right: 1rem; */
        margin-bottom: 0.8rem;
        display: inline-block;
        align-items: center;
        display: flex;
        justify-content: center;
        width: calc(100% / 10);
        margin: 0 2.5rem;
        .logo-wrapper {
          margin-right: 0.6rem;
          mix-blend-mode: lighten;
          height: 8rem;
          width: 100%;
          position: relative;
          filter: grayscale(1);
          &.inverted {
            filter: invert(1) grayscale(1);
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
  @media screen and (${(p) => p.theme.breakpoints.mob}) {
    .content-block {
      .services-list {
        width: 100%;
        .service-card {
          width: 100%;
        }
      }
      ul {
        flex-direction: column;
        li {
          width: 100%;
        }
      }
    }
  }
`;

export default Services;
