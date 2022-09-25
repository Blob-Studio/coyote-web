/* eslint-disable react/no-unknown-property */
import styled from "styled-components";

import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Vector3, TextureLoader, Vector2 } from "three";
import { OrbitControls } from "@react-three/drei";
// import { EffectComposer, SMAA} from '@react-three/postprocessing';
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
          modulationOffset: 0.25,
          offset: new Vector2(0.007, 0.007),
        })
      )
    );
    // comp.addPass(new EffectPass(camera, new NoiseEffect({ premultiply: true, blendFunction: BlendFunction.SOFT_LIGHT })));
    // comp.addPass(new EffectPass(camera, new DotScreenEffect({ scale: 20, blendFunction: BlendFunction.LIGHTEN })));
    // comp.addPass(new EffectPass(camera, new ScanlineEffect({ blendFunction: BlendFunction.DARKEN })));
    return comp;
  }, [gl, scene, camera]);

  useEffect(() => {
    // console.log(composer);
  }, [composer]);

  useFrame(() => {
    composer.render();
  }, 1);
  return <></>;
};

const ThreeJSPageScene = (props: any) => {
  return (
    <Canvas
      gl={{
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        depth: false,
      }}
      camera={{ position: [2.5, 1.5, 2] }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <Image />
        <Badge />
        <Window />
        <Atom />
        <Banner />
        <Effect />
      </Suspense>
      {/* <fog attach="fog" args={["#4b4d50", 0, 12]} /> */}
      {/* <Sphere /> */}
      {/* <Plane /> */}
      {/* <gridHelper /> */}
    </Canvas>
  );
};

export default ThreeJSPageScene;
