import { Box, Flex, Link } from 'rebass';

const en = {
  mainNavigation: {
    about: 'ABOUT US',
    work: 'WORK',
    services: 'SERVICES',
  },
  about: {
    content: (
      <>
        <div className="content-block">
          <h1>Who are these guys?</h1>
          <p>
            Coyote Web Studio is a near-shore <strong>web design</strong> and <strong>development</strong> studio. We offer integral
            solutions for your web needs, from idea to production.
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
              Tomás is a frontend developer and visual artist. He worked many years for Auth0. He is also a woodworker and artist and
              creates amazing pieces at his workshop.
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
            <p className="card-body">Is a design studio focused on projects which seek to transform the way we communicate.</p>
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
    headerText: (
      <>
        WE ARE A <strong>WEB DESIGN</strong> AND <strong>DEVELOPMENT</strong> STUDIO FROM <strong>BUENOS AIRES, ARGENTINA.</strong>
      </>
    ),
  },
};

export default en;
