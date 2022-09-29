/* eslint-disable react/no-unknown-property */
import styled from "styled-components";

import ReactDOM from "react-dom";
import _ from 'lodash';
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector2, PointLightHelper, Vector3, MathUtils } from "three";
import { OrbitControls, useHelper, MeshDistortMaterial, Environment, SpotLight, useDepthBuffer } from "@react-three/drei";
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
import theme from "../utils/theme";

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
          modulationOffset: 0.1,
          offset: new Vector2(0.02, 0.02)
        })
      )
    );
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

const CustomPointLight = ({ color, intensity, position }: any) => {
  return (
    <pointLight
      args={[color, 3]}
      position={position}
    />
  );
}

const DistortedSphereMesh = () => {
  const BASE_DISTORT = 0.65;
  const MAX_DISTORT = 1.25;

  const BASE_SPEED = 1.1;

  const meshRef = useRef<any>();
  const meshDistortMatRef = useRef<any>();

  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [clicking, setClicking] = useState<boolean>(false);

  useFrame((state, delta) => {
    if (meshDistortMatRef.current) {
      meshDistortMatRef.current.distort = MathUtils.damp(
        meshDistortMatRef.current.distort,
        mouseOver ? MAX_DISTORT : BASE_DISTORT,
        mouseOver ? 4 : 12,
        delta
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      onPointerEnter={e => {
        setMouseOver(true);
      }}
      onPointerLeave={e => {
        setMouseOver(false);
      }}
      onPointerDown={e => {
        setClicking(true)
      }}
      onPointerUp={e => {
        setClicking(false)
      }}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 200, 200]}/>
      <MeshDistortMaterial
        ref={meshDistortMatRef}
        color="#666666"
        distort={BASE_DISTORT}
        speed={BASE_SPEED}
        metalness={0.3}
        roughness={0.8}
      />
    </mesh>
  );
}

const VolSpotLight = () => {
  return (
    <SpotLight
      castShadow
      // shadow-mapSize-width={1024}
      // shadow-mapSize-height={1024}
      shadow-mapSize={new Vector2(1024, 1024)}
      penumbra={1}
      distance={20}
      angle={1}
      attenuation={20}
      anglePower={20}
      color="#6b6"
      position={[4, -2, 8]}
      intensity={4}
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
      shadows={{ enabled: true, needsUpdate: true }}
      camera={{ position: [4.2, 0, 0] }}
    >
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[2]} /> */}
        <ambientLight intensity={4} color={theme.color.primary} />
        <CustomPointLight
          color={theme.color.primary}
          position={[-4, 4, 8]}
          intensity={12}
        />
        <CustomPointLight
          color="#4e42b9"
          position={[6, -8, -8]}
          intensity={4}
        />
        <CustomPointLight
          color="#d82525"
          position={[6, 4, 4]}
          intensity={10}
        />
        <DistortedSphereMesh />
        <Effect />
      </Suspense>
    </Canvas>
  );
};

export default ThreeJSPageScene;
