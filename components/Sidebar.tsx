import styled from "styled-components";
import { Box, Flex } from "rebass";
import { Input } from "@rebass/forms";
import Button from "./../components/Button";

import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'

function Image() {
  const texture = useLoader(THREE.TextureLoader, '/img/grids/grid_1.png');
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

function Stars() {
  const texture = useLoader(THREE.TextureLoader, '/img/grids/stars.png');
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(-50, -20, -1)}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}

function Badge() {
  const texture = useLoader(THREE.TextureLoader, '/img/grids/badge.png');
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(0.75, 1, -1)}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} opacity={1} transparent/>
    </mesh>
  )
}

function Window() {
  const texture = useLoader(THREE.TextureLoader, '/img/grids/window.png');
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(0.25, 0.75, 0)}>
      <planeBufferGeometry attach="geometry" args={[2, 1]} />
      <meshBasicMaterial attach="material" map={texture} opacity={1} transparent/>
    </mesh>
  )
}

function Atom() {
  const texture = useLoader(THREE.TextureLoader, '/img/grids/atom.png');
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(-0.5, 1.5, 1)}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} opacity={1} transparent/>
    </mesh>
  )
}

// import Sphere from "./../components/Sphere.Component";
// import Plane from "./../components/Plane.Component";
import Controls from "./../components/Controls.Component";
import { Vector3 } from "three";

const Sidebar = (props: any) => {

  return (
    <StyledSidebar className="side-bar" flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" className="breakdown">
        <Box
          as={"p"}
          sx={{ textAlign: "center", p: "2rem" }}
          className="breakdown-text"
        >
          WE ARE A <strong>WEB DESIGN</strong> AND <strong>DEVELOPMENT</strong> AGENCY FROM <strong>BUENOS AIRES,
          ARGENTINA.</strong>
        </Box>
      </Flex>
      <Box className="graphic">
        <Canvas camera={{ position: [2.5, 1.5, 2] }}>
          <Controls />
          <Suspense fallback={null}>
            <Image />
            <Badge />
            <Window />
            <Atom />
            {/* <Stars /> */}
          </Suspense>
          {/* <fog attach="fog" args={["#041830", 5, 10]} /> */}
          {/* <Sphere /> */}
          {/* <Plane /> */}
          {/* <gridHelper /> */}
        </Canvas>
      </Box>
      <Flex className="contact-form" mt="auto" height="3rem">
        <Input className="side-bar-input" />
        <Button className="side-bar-submit">Contact</Button>
      </Flex>
    </StyledSidebar>
  );
};

const StyledSidebar = styled(Flex)`
  grid-area: side-bar;
  border-right: calc(1rem / 16) solid ${(props) => props.theme.color.primary};
  border-bottom: calc(1rem / 16) solid ${(props) => props.theme.color.primary};
  .breakdown {
    border-bottom: calc(1rem / 16) solid ${(props) => props.theme.color.primary};
    .breakdown-text {
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 200;
    }
  }
  .graphic {
    flex-grow: 1;
    /* height: 100%; */
  }
  .contact-form {
    .side-bar-input {
      border-bottom: 0;
      border-left: 0;
      outline: 0;
      font-family: unset;
    }
    .side-bar-submit {
      width: 15rem;
    }
  }
`;

export default Sidebar;
