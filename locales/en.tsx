import { Box, Flex } from "rebass";

const en = {
  mainNavigation: {
    about: "ABOUT US",
    work: "WORK",
    services: "SERVICES",
  },
  about: {
    content: (
      <>
        <h1>Who are we?</h1>
        <p>
          Coyote Web Studio is a <strong>web design</strong> and{" "}
          <strong>development</strong> studio. We offer integral solutions for
          your web needs, from design to production.
        </p>
        <p>
          We work with design studios and freelance designers, depending on the
          needs of your project.
        </p>
        <h1>Our team</h1>
        <Box className="content-block" mb={"3rem"}>
          <h2>Frontend Development and Project Management</h2>
          <Box p={"1rem"} className="content-card">
            <h3>Guido La Rosa</h3>
            <p>Coyote Web Studio Head</p>
          </Box>
          <Box p={"1rem"} className="content-card">
            <h3>Tomas &quot;Cherna&quot; Chernov</h3>
            <p>Coyote Web Studio Associate</p>
          </Box>
        </Box>
        <Box className="content-block" mb={"3rem"}>
          <h2>Design</h2>
          <Box p={"1rem"} className="content-card">
            <h3>Entrecasa</h3>
            <p>Design Studio</p>
          </Box>
          <Box className="content-card">
            <h3>Metamensaje</h3>
            <p>Design Studio</p>
          </Box>
          <Box className="content-card">
            <h3>Guillermina Teves Bejar</h3>
            <p>Freelance Designer</p>
          </Box>
        </Box>
        <Box className="content-block">
          <h2>Backend Development</h2>
          <Box className="content-card">
            <h3>María de los Ángeles Fortelli</h3>
            <p>Freelance Developer</p>
          </Box>
          <Box className="content-card">
            <h3>Juan Da Graca</h3>
            <p>Freelance Developer</p>
          </Box>
        </Box>
      </>
    ),
  },
  sidebar: {
    headerText: (
      <>
        WE ARE A <strong>WEB DESIGN</strong> AND <strong>DEVELOPMENT</strong>{" "}
        STUDIO FROM <strong>BUENOS AIRES, ARGENTINA.</strong>
      </>
    ),
  },
};

export default en;
