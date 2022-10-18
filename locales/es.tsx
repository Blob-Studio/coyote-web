import { Box, Flex } from 'rebass';
import locale from './localeSchema';

const es: locale = {
  mainNavigation: {
    about: 'NOSOTROS',
    work: 'TRABAJOS',
    services: 'SERVICIOS',
  },
  about: {
    content: (
      <>
        <h1>¿Quienes somos?</h1>
        <p><strong>Coyote Web Studio</strong> es un estudio de <strong>diseño</strong> y <strong>desarrollo</strong> web. Ofrecemos soluciones integrales para tus necesidades web, de idea a produccion</p>
        <p>Ya sea porque necesites una simple <strong>Landing Page</strong>, una compleja <strong>aplicacion web</strong>, o quizas un deslumbrante <strong>sitio de e-commerce</strong>, tenemos la solucion.</p>
        <p>Trabajamos con otros estudios de diseño y desarrollo y freelancers, dependiendo de las necesidades de tu proyecto.</p>
        <h1>Nuestro Equipo</h1>
        <Box className="content-block" mb={'3rem'}>
          <h2>Desarrollo Frontend y Project management</h2>
          <Box p={'1rem'} className="content-card">
            <h3>Guido La Rosa</h3>
            <p>Director de Coyote Web</p>
          </Box>
          <Box p={'1rem'} className="content-card">
            <h3>Tomas &quot;Cherna&quot; Chernov</h3>
            <p>Socio de Coyote Web</p>
          </Box>
        </Box>
        <Box className="content-block" mb={'3rem'}>
          <h2>Diseño</h2>
          <Box p={'1rem'} className="content-card">
            <h3>Entrecasa</h3>
            <p>Estudio de Diseño</p>
          </Box>
          <Box className="content-card">
            <h3>Metamensaje</h3>
            <p>Estudio de Diseño</p>
          </Box>
          <Box className="content-card">
            <h3>Guillermina Teves Bejar</h3>
            <p>Diseñadora Freelance</p>
          </Box>
        </Box>
        <Box className="content-block">
          <h2>Desarrollo Backend</h2>
          <Box className="content-card">
            <h3>María de los Ángeles Fortelli</h3>
            <p>Desarrolladora Freelance</p>
          </Box>
          <Box className="content-card">
            <h3>Juan Da Graca</h3>
            <p>Desarrollador Freelance</p>
          </Box>
        </Box>
      </>
    ),
  },
  sidebar: {
    flags: {
      US: {
        alt: "Bandera de Estados Unidos",
        title: "Cambiar idioma a Ingles",
      },
      AR: {
        alt: "Bandera de Argentina",
        title: "Cambiar idioma a Espaniol",
      }
    },
    headerText: (
      <>
        SOMOS UN ESTUDIO DE <strong>DISEÑO</strong> Y <strong>DESARROLLO WEB</strong> DE <strong>BUENOS AIRES, ARGENTINA.</strong>
      </>
    ),
  },
};

export default es;
