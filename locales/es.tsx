import {Box, Flex} from 'rebass';

const es = {
    mainNavigation: {
        about: 'NOSOTROS',
        work: 'TRABAJOS',
        posts: 'POSTS',
        services: 'SERVICIOS',
    },
    about: {
        content: 
            <>
                <h1>¿Quienes somos?</h1>
                <p>Coyote Web Studio fue creado por Guido La Rosa en el 2021 con la idea de ofrecer a sus clientes.</p>
                <p>We work with design studios and freelance designers, depending on the needs of your project.</p>
                <h1>Our Partners</h1>
                <Box className="content-block" mb={"3rem"}>
                    <h2>Frontend Development</h2>
                    <Box p={'1rem'} className="content-card">
                    <h3>Guido La Rosa</h3>
                    <p>Project Manager and Developer</p>
                    </Box>
                </Box>
                <Box className="content-block" mb={"3rem"}>
                    <h2>Design</h2>
                    <Box p={'1rem'} className="content-card">
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
    },
    sidebar: {
        headerText: 
            <>
                SOMOS UN ESTUDIO DE <strong>DISEÑO WEB</strong> Y <strong>DESARROLLO</strong> DE <strong>BUENOS AIRES, ARGENTINA.</strong>
            </>
    }
}

export default es;