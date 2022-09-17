import styled from "styled-components";

import * as THREE from "three";
import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas, useLoader, useFrame } from "react-three-fiber";

import { Vector3 } from "three";

function Image() {
  const texture = useLoader(THREE.TextureLoader, "/img/grids/grid_1.png");
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Banner() {
  const texture = useLoader(THREE.TextureLoader, "/img/decorations/banner.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(1.25, 0.6, 1)}>
      <planeBufferGeometry attach="geometry" args={[1, 0.5]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Badge() {
  const texture = useLoader(THREE.TextureLoader, "/img/grids/badge.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(0.75, 1, -1)}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        opacity={1}
        transparent
      />
    </mesh>
  );
}

function Window() {
  const texture = useLoader(THREE.TextureLoader, "/img/grids/window.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(0.25, 0.75, 0)}>
      <planeBufferGeometry attach="geometry" args={[2, 1]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        opacity={1}
        transparent
      />
    </mesh>
  );
}

function Atom() {
  const texture = useLoader(THREE.TextureLoader, "/img/grids/atom.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(-0.5, 1.25, 1)}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        opacity={1}
        transparent
      />
    </mesh>
  );
}

const ThreeJSPageScene = (props: any) => {
  return (
    <StyledThreeJSPageScene camera={{ position: [2.5, 1.5, 2] }}>
      {/* <Controls /> */}
      <Suspense fallback={null}>
        <Image />
        <Badge />
        <Window />
        <Atom />
        <Banner />
      </Suspense>
      {/* <fog attach="fog" args={["#041830", 5, 10]} /> */}
      {/* <Sphere /> */}
      {/* <Plane /> */}
      {/* <gridHelper /> */}
    </StyledThreeJSPageScene>
  );
};

const StyledThreeJSPageScene = styled(Canvas)``;

export default ThreeJSPageScene