/* eslint-disable react/no-unknown-property */
import styled from "styled-components";

import ReactDOM from "react-dom";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector2, PointLightHelper } from "three";
import { OrbitControls, useHelper, MeshDistortMaterial, Environment } from "@react-three/drei";
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
          modulationOffset: 0.05,
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
  // useHelper(pLight, PointLightHelper, intensity || 1, color);
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

const DistortedSphereMesh = () => {
  const BASE_DISTORT = 0.65;
  const MAX_DISTORT = 1.2;
  const BASE_SPEED = 1.15;
  const MAX_SPEED = 4;
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const mesh : any = useRef();

  useEffect(() => {
    // console.log(mesh);
  }, [mesh])

  /*
    Ideas:
    - Interpolate values over time so the shape doesn't change abruptly
  */
  useFrame(() => {
    let curVal = mesh.current._distort.value;
    // console.log(curVal, MAX_DISTORT);
    if (mouseOver && curVal <= MAX_DISTORT) {
      mesh.current._distort.value = curVal + 0.05;
      // console.log(curVal);
    }
    else if (!mouseOver && curVal > BASE_DISTORT) {
      mesh.current._distort.value = curVal - 0.05;
      // console.log(curVal);
    }
  });

  return (
    <mesh
      castShadow
      receiveShadow
      onPointerEnter={e => {
        // setDistort(0.65);
        // setDistortSpeed(2);
        setMouseOver(true);
      }}
      onPointerLeave={e => {
        // resetDistort();
        setMouseOver(false);
      }}
    >
      <OrbitControls/>
      <sphereBufferGeometry attach="geometry" args={[1.77, 100, 100]}/>
      {/* <meshStandardMaterial
        attach="material"
        color="#383838"
        metalness={0.8}
        roughness={0.25}
      /> */}
      <MeshDistortMaterial
        ref={mesh}
        color={theme.color.primary}
        distort={BASE_DISTORT}
        speed={BASE_SPEED}
        metalness={0.5}
        roughness={0.5}
      />
    </mesh>
  );
} 

const ThreeJSPageScene = (props: any) => {
  // const [distort, setDistort] = useState<number>(0.65);
  // const [distortSpeed, setDistortSpeed] = useState<number>(1.15);

  // const resetDistort = () => {
  //   setDistort(0.65);
  //   setDistortSpeed(1.15);
  // };

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
      camera={{ position: [-2, -5, 2] }}
    >
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}
        <ambientLight 
          intensity={0.2} 
          color={theme.color.primary} 
        />
        <CustomPointLight 
          color={theme.color.primary} 
          position={[2, 5, 5]}
        />
        <CustomPointLight 
          color={theme.color.font} 
          position={[-2, -2, -2]}
        />
        <Environment
          background={false}
          // files={undefined}
          // path="/"
          preset='dawn'
        />
        {/* <mesh receiveShadow position={[0, 0, -2]}>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <meshStandardMaterial attach="material" color="#000000" />
        </mesh> */}
        <DistortedSphereMesh />
        <Effect />
      </Suspense>
      {/* <fog attach="fog" args={["#4b4d50", 0, 12]} /> */}
      {/* <gridHelper /> */}
      {/* <axesHelper /> */}
    </Canvas>
  );
};

export default ThreeJSPageScene;
