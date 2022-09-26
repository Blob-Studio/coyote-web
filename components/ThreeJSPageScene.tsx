/* eslint-disable react/no-unknown-property */
import styled from "styled-components";

import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Vector3, TextureLoader, Vector2, PointLightHelper, DoubleSide } from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  ChromaticAberrationEffect,
  SMAAEffect,
  SMAAPreset,
  NoiseEffect,
  BlendFunction,
  DotScreenEffect,
  ScanlineEffect,
  GlitchEffect,
} from "postprocessing";

function Image() {
  const texture = useLoader(TextureLoader, "/img/grids/grid_1.png");
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Banner() {
  const texture = useLoader(TextureLoader, "/img/decorations/banner.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(1.25, 0.6, 1)}>
      <planeBufferGeometry attach="geometry" args={[1, 0.5]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
}

function Badge() {
  const texture = useLoader(TextureLoader, "/img/grids/badge.png");
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
  const texture = useLoader(TextureLoader, "/img/grids/window.png");
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
  const texture = useLoader(TextureLoader, "/img/grids/atom.png");
  return (
    <mesh rotation-y={Math.PI * 0.5} position={new Vector3(-0.5, 1.25, 1)}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        opacity={1}
        transparent={true}
      />
    </mesh>
  );
}

const Effect = ({ children }: any) => {
  const { gl, camera, scene } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));
    comp.addPass(
      new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.ULTRA }))
    );
    comp.addPass(
      new EffectPass(
        camera,
        new ChromaticAberrationEffect({
          radialModulation: true,
          modulationOffset: 0.15,
          offset: new Vector2(0.01, 0.01),
        })
      )
    );
    // comp.addPass(new EffectPass(camera, new NoiseEffect({ premultiply: true, blendFunction: BlendFunction.SOFT_LIGHT })));
    comp.addPass(new EffectPass(camera, new DotScreenEffect({ scale: 20, blendFunction: BlendFunction.LIGHTEN })));
    // comp.addPass(new EffectPass(camera, new ScanlineEffect({ blendFunction: BlendFunction.DARKEN })));
    return comp;
  }, [gl, scene, camera]);

  useEffect(() => {
    // console.log(composer);
  }, [composer]);

  useFrame(() => {
    composer.render();
  }, -1);
  return <></>;
};

const CustomPointLight = ({ color, intensity, position }: any) => {
  const pLight = useRef();
  useHelper(pLight, PointLightHelper, intensity || 1, color);
  return (
    <pointLight
      castShadow
      shadow-mapSize-height={1024}
      shadow-mapSize-width={1024}
      args={[color, 10]}
      ref={pLight}
      position={position}
    />
  );
}

const ThreeJSPageScene = (props: any) => {
  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false,
      }}
      shadows
      // shadowMap={[2000, 2000]}
      camera={{ position: [-10, -5, 10] }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <CustomPointLight color={"#9cb1b1"} position={[2, 5, 5]}/>
        <CustomPointLight color={"#b8cfd4"} position={[-2, -5, 5]}/>
        <mesh receiveShadow position={[0, 0, -2]}>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <meshStandardMaterial attach="material" color="#000000" />
        </mesh>
        <mesh castShadow>
          <sphereBufferGeometry attach="geometry" args={[1, 40, 40]}/>
          <meshStandardMaterial attach="material" color="#383838" />
        </mesh>
        {/* <Image />
        <Badge />
        <Window />
        <Atom />
        <Banner /> */}
        {/* <Effect /> */}
      </Suspense>
      {/* <fog attach="fog" args={["#4b4d50", 0, 12]} /> */}
      {/* <gridHelper /> */}
      {/* <axesHelper /> */}
    </Canvas>
  );
};

export default ThreeJSPageScene;
