import { Box, Link } from 'rebass';
import locale from './localeSchema';

const en: locale = {
  mainNavigation: {
    about: 'ABOUT US',
    work: 'WORK',
    services: 'SERVICES',
  },
  about: {
    content: (
      <>
        <div className="content-block breakdown">
          <h1>Who are these guys?</h1>
          <p>
            Coyote Web Studio is a near-shore <strong>web design</strong> and <strong>development</strong> studio. We offer integral
            solutions for your web needs, from idea to production.
          </p>
          <p>
            Wether you need a simple <strong>landing page</strong>, a complex <strong>web application</strong>, or maybe you need a dashing{' '}
            <strong>e-commerce site</strong>, we got you covered.
          </p>
          <p>We work with design studios and freelance designers, depending on the needs of your project.</p>
        </div>
        <h1>Our team</h1>
        <Box className="content-block" mb={'3rem'}>
          <h2>Frontend Development and Project Management</h2>
          <Box className="content-card">
            <Link>
              <h3>Guido La Rosa</h3>
              <p>Coyote Web Studio Head</p>
            </Link>
            <p className="card-body">
              He has been a frontend developer since 2012. Guido worked for companies such as Cognizant and Altimetrik. He also loves
              drawing cartoons and illustrations, and recording music on his home studio.
            </p>
          </Box>
          <Box className="content-card">
            <Link>
              <h3>Tomas &quot;Cherna&quot; Chernov</h3>
              <p>Coyote Web Studio Associate</p>
            </Link>
            <p className="card-body">
              Cherna is a frontend developer and visual artist who worked for 6+ years at Auth0 crafting top of the line user experiences. He is also a wood and metalworker and
              explores these crafts at his workshop.
            </p>
          </Box>
        </Box>
        <Box className="content-block" mb={'3rem'}>
          <h2>Design</h2>
          <Box className="content-card">
            <Link href="https://entrecasa.studio/" target="_blank">
              <h3>Entrecasa</h3>
              <p>Design Studio</p>
            </Link>
            <p className="card-body">Entrecasa is a design studio focused on projects which seek to transform the way we communicate.</p>
          </Box>
          <Box className="content-card">
            <Link href="https://metamensaje.studio/" target="_blank">
              <h3>Metamensaje</h3>
              <p>Design Studio</p>
            </Link>
            <p className="card-body">Metamensaje is the independent creative practice of Buenos Aires based designer Lucas Santamarta.</p>
          </Box>
          <Box className="content-card">
            <Link href="https://guilleteves.myportfolio.com/" target="_blank">
              <h3>Guillermina Teves Bejar</h3>
              <p>Freelance Designer</p>
            </Link>
            <p className="card-body">
              Graphic designer based in Buenos Aires, Argentina. Her work is mainly focused on the development of visual identities,
              editorials design, illustrations and typography, all in the cultural fields. Originally from La Pampa (Argentina), she studied
              at the Facultad de Arquitectura, Diseño y Urbanismo, in Buenos Aires, and graduated in 2017 with a degree in Graphic Design
            </p>
          </Box>
        </Box>
        <Box className="content-block">
          <h2>Backend Development</h2>
          <Box className="content-card">
            <Link>
              <h3>María de los Ángeles Fortelli</h3>
              <p>Freelance Developer</p>
            </Link>
            <p className="card-body">She is Technical Lead & Community Lead at Cognizant Softvision.</p>
          </Box>
          <Box className="content-card">
            <Link>
              <h3>Juan Da Graca</h3>
              <p>Freelance Developer</p>
            </Link>
            <p className="card-body">He has worked many years as a backend Developer in Banza, a financial company and broker agency.</p>
          </Box>
        </Box>
      </>
    ),
  },
  sidebar: {
    flags: {
      US: {
        alt: "United States flag",
        title: "Change language to English",
      },
      AR: {
        alt: "Argentina flag",
        title: "Change language to Spanish",
      }
    },
    headerText: (
      <>
        WE ARE A <strong>WEB DESIGN</strong> AND <strong>DEVELOPMENT</strong> STUDIO FROM <br />
        <strong>BUENOS AIRES, ARGENTINA.</strong>
      </>
    ),
  },
};

export default en;
