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
];

const Services = (props: any) => {
  return (
    <StyledServices>
      <div className="page-wrapper">
        <Box className="content-block">
          <h1>We got your back</h1>
          <Box>
            <ul className="services-list">
              {OurServices.map((service, index) => (
                <li className="service-card" key={index}>
                  <div className="service-image">
                    <WebIcon />
                  </div>
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
                    <Image src={`/img/icons/svg/${tech.logo}.svg`} alt={tech.name} layout={"fill"} />
                  </div>
                  {/* <span>{tech.name}</span> */}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </div>
    </StyledServices>
  );
};

const WebIcon = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1001 5.5C33.3001 5.5 41.6001 13.8 41.6001 24C41.6001 34.2 33.3001 42.5 23.1001 42.5C12.9001 42.5 4.6001 34.2 4.6001 24C4.6001 13.8 12.9001 5.5 23.1001 5.5Z" stroke="black" strokeMiterlimit="90" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.4002 9.1C43.5002 3.2 46.4002 4.9 40.9002 12.9C35.4002 20.9 23.5002 32.4 14.4002 38.3C5.30022 44.2 2.40022 42.5 7.90022 34.5" stroke="black" strokeMiterlimit="90" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.80029 26.5L7.80029 22.2001L12.0003 21.3L15.1003 23.2001L17.1003 26.2001L18.0003 29.1L22.0003 30.2001M35.6003 22.3H37.0003L38.9003 20.6L40.4003 17.3M28.4003 24.9C26.9003 25 25.5003 23.9 25.4003 22.3C25.3003 20.8 26.4003 19.4 28.0003 19.3C29.5003 19.2 30.9003 20.3 31.0003 21.9V22.3M34.3003 38.7001L33.0003 35.4001L31.2003 35.1L31.4003 32.8L36.2003 29.6L41.0003 29.1M19.8003 5.80005V11.3L22.0003 14.3L25.8003 16.1L28.7003 14.7L31.6003 15.8L32.7003 18.1L33.0003 19.8M25.3003 32.7001L25.9003 35.1L24.2003 37.7001L20.2003 39.5L14.5003 40.4001M12.1003 14.2C13.5003 14.2 14.6003 15.3 14.6003 16.7C14.6003 18.1 13.5003 19.2 12.1003 19.2C10.7003 19.2 9.60029 18.1 9.60029 16.7C9.60029 15.3 10.7003 14.2 12.1003 14.2Z" stroke="black" strokeMiterlimit="90" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const StyledServices = styled(MainViewContent)`
  .page-wrapper {
    width: 70%;
    margin: 0 auto;
  }
  .content-block {
    text-align: center;
    h1 {
      margin-bottom: 2rem;
      font-size: 3rem;
    }
    .services-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .service-card {
        width: 48%;
        margin: 0;
        display: flex;
        /* justify-content: space-between; */
        flex-direction: column;
        border: 0.1rem solid ${props => props.theme.colors.primary};
        margin-bottom: 2rem;
        align-items: center;
        padding: 1.2rem 1.2rem;
        .service-image {
          width: 4.8rem;
          height: 4rem;
          margin-bottom: 0;
          svg {
            path {
              stroke: ${props => props.theme.colors.primary};
            }
          }
        }
        h2 {
          margin-bottom: 1rem;
        }
        p {
          color: white;
          margin-bottom: auto;
          line-height: 150%;
          font-size: 1rem;
        }
      }
    }
    .logo-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
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
    }
    .logo-list {
    }
    .logo-item {
      margin: 0 1rem;
      width: calc((100% - 6rem) / 3);
    }
    .page-wrapper {
      width: 100%;
    }
  }
`;

export default Services;
