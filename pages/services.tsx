import Image from 'next/image';
import { transparentize } from 'polished';
import { Box } from 'rebass';
import styled from 'styled-components';
import MainViewContent from './../components/MainViewContent';

// import WebIcon from '../public/img/icons/services/web.svg';
import Head from 'next/head';
import { TbDatabaseOff } from 'react-icons/tb';
import { MdWeb, MdDesignServices } from 'react-icons/md';
import { AiOutlineShoppingCart, AiOutlineFileSearch } from 'react-icons/ai';
import { BsWordpress } from 'react-icons/bs';

const OurServices = [
  {
    name: 'Web Development',
    icon: <MdWeb />,
    content:
      'Coding is not easy, we all know that. To bring your project to life you not only want people who can code, but also people that care about quality, good practices, SEO, great design, and all stuff that make websites stand out.',
  },
  {
    name: 'Website + CMS',
    icon: <TbDatabaseOff />,
    content:
      'You probably will need to update the content of your site to make it more dynamic and score higher on search engines. We provide a customized experience for doing this using the Strapi Headless CMS platform.',
  },
  {
    name: 'E-Commerce',
    icon: <AiOutlineShoppingCart />,
    content:
      'Now imagine that you want to sell your products but you dont want to spend time setting up your e-commerce platform. And lets say that you also want that site to look AMAZING. Well... I think we can help you with that...',
  },
  {
    name: 'Website Design',
    icon: <MdDesignServices />,
    content:
      "Here at Coyote we have a saying: 'Design is king'`. Well, to be honest, I just made that up. But that doesn't make it less true! We put design at the center of the process because we believe that good design and planning makes a big difference.",
  },
  {
    name: 'Wordpress',
    icon: <BsWordpress />,
    content:
      "Theres no denying: Wordpress is a widely used tool for making sites that are easy to use and mantain. So yeah... we do Wordpress, but it's not really our cup of tea. We prefer using different tools, but hey, if that's what you want, you got it buddy.",
  },
  {
    name: 'SEO Optimization',
    icon: <AiOutlineFileSearch />,
    content:
      "If you want to create a website, we assume that you want it to be reachable to your target audiences. SEO Optimization makes that a reality. We can integrate your favorite tools to track your site metric and make sure you are reaching for those good ol' KPIs",
  },
];

const OurTechStack: Array<{
  name: string;
  logo: string;
  invertLogo?: boolean;
  ext?: string;
}> = [
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
  },
  {
    name: 'Node',
    logo: 'node',
  },
  {
    name: 'Strapi',
    logo: 'strapi',
  },
  {
    name: 'Google Cloud',
    logo: 'google-cloud',
  },
  {
    name: 'AWS',
    logo: 'aws',
  },
  {
    name: 'Github',
    logo: 'github',
    invertLogo: true,
  },
  {
    name: 'ThreeJS',
    logo: 'threejs',
    invertLogo: true,
  },
];

const Services = (props: any) => {
  return (
    <StyledServices>
      <Head>
        <title>
          CWS - Services we offer
        </title>
      </Head>
      <div className="page-wrapper">
        <Box className="content-block">
          <h1 className="content-welcome-text">We got your back</h1>
          <Box>
            <ul className="services-list">
              {OurServices.map((service, index) => (
                <li className="service-card" key={index}>
                  <div className="service-image">
                    {service.icon}
                  </div>
                  <h2 className="service-title">{service.name}</h2>
                  <p className="service-content">{service.content}</p>
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
                    <Image src={`/img/icons/${tech.logo}.${tech.ext || 'svg'}`} alt={tech.name} layout={'fill'} objectFit={'contain'} />
                  </div>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </div>
    </StyledServices>
  );
};

const StyledServices = styled(MainViewContent)`
  .page-wrapper {
    width: 70%;
    margin: 0 auto;
  }
  .content-block {
    text-align: center;
  }
  .content-welcome-text {
    margin-bottom: 2rem;
    font-size: 3rem;
  }
  .services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .service-card {
    width: 48%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    margin-bottom: 2rem;
    align-items: center;
    padding: 1.2rem 1.2rem;
    background: ${(props) => transparentize(0.9, props.theme.colors.primary)};
  }
  .service-image {
    width: 3rem;
    height: 3rem;
    margin-bottom: 0;
    padding: 0.5rem;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .service-title {
    margin-bottom: 1rem;
  }
  .service-content {
    color: white;
    margin-bottom: auto;
    line-height: 150%;
    font-size: 1rem;
  }
  .logo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .logo-item {
    margin-bottom: 0.8rem;
    display: inline-block;
    align-items: center;
    display: flex;
    justify-content: center;
    width: calc(100% / 10);
    margin: 0 2.5rem;
  }
  .logo-wrapper {
    margin-right: 0.6rem;
    height: 8rem;
    width: 100%;
    position: relative;
    filter: grayscale(1);
    transition: filter 0.3s ease-in-out;
    &.inverted {
      filter: invert(1) grayscale(1);
      &:hover {
        filter: invert(1) grayscale(0);
      }
    }
    &:hover {
      filter: grayscale(0);
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
  @media screen and (${(p) => p.theme.breakpoints.dskt}) {
    .page-wrapper {
      width: 100%;
      .content-block {
        .services-list {
          flex-direction: column;
          .service-card {
            width: 100%;
          }
        }
      }
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
  }
`;

export default Services;
