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

const Effect = ({ children }: any) => {
  const { gl, camera, scene } = useThree();

  const composer = useMemo(() => {
    const comp = new EffectComposer(gl);
    comp.addPass(new RenderPass(scene, camera));
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
    comp.addPass(
      new EffectPass(camera, new SMAAEffect({ preset: SMAAPreset.ULTRA }))
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
  }, -1);
  return <></>;
};

const CustomPointLight = ({ color, intensity, position }: any) => {
  const pLight = useRef();
  useEffect(() => {
    console.log(pLight);
  });
  // useHelper(pLight, PointLightHelper, intensity || 1, color);
  return (
    <pointLight
      castShadow
      shadow-mapSize={new Vector2(1024, 1024)}
      shadow-needsUpdate={true}
      args={[color, 10]}
      ref={pLight}
      position={position}
    />
  );
}

const DistortedSphereMesh = () => {
  const BASE_DISTORT = 0.45;
  const MAX_DISTORT = 1.2;
  const BASE_SPEED = 1.15;
  const MAX_SPEED = 4;
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const meshRef = useRef();
  const meshDistortMatRef = useRef();
  const scene = useThree();

  useEffect(() => {
    console.log(scene);
    console.log(meshDistortMatRef);
  }, [scene, meshDistortMatRef])

  const logThrottled = _.throttle((...vals: any) => {
    console.log(...vals);
  }, 1000);

  useFrame((state, delta) => {
    // meshDistortMatRef.current.distort = MathUtils.lerp(
    //   meshDistortMatRef.current.distort,
    //   mouseOver ? MAX_DISTORT : BASE_DISTORT,
    //   mouseOver ? 0.15 : 0.05
    // )
    
    meshDistortMatRef.current.distort = MathUtils.damp(
      meshDistortMatRef.current.distort,
      mouseOver ? MAX_DISTORT : BASE_DISTORT,
      mouseOver ? 4 : 1.5,
      delta
    );
  });

  // useFrame(() => {
  //   // logThrottled(mesh.current._time);
  //   if (meshDistortMatRef.current._distort.value) {
  //     let curVal = meshDistortMatRef.current._distort.value;
  //     // console.log(curVal, MAX_DISTORT);
  //     if (mouseOver && curVal <= MAX_DISTORT) {
  //       meshDistortMatRef.current._distort.value = curVal + 0.05;
  //       // console.log(curVal);
  //     }
  //     else if (!mouseOver && curVal > BASE_DISTORT) {
  //       meshDistortMatRef.current._distort.value = curVal - 0.05;
  //       // console.log(curVal);
  //     }
  //   }
  // });

  return (
    <mesh
      ref={meshRef}
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
      <sphereBufferGeometry attach="geometry" args={[1.25, 100, 100]}/>
      {/* <meshStandardMaterial
        attach="material"
        color="#383838"
        metalness={0.8}
        roughness={0.25}
      /> */}
      <MeshDistortMaterial
        needsUpdate={true}
        ref={meshDistortMatRef}
        color="#666666"
        distort={BASE_DISTORT}
        speed={BASE_SPEED}
        metalness={0.5}
        roughness={0.5}
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
      shadows={{ enabled: true, needsUpdate: true }}
      camera={{ position: [-2, -5, 2] }}
    >
      <Suspense fallback={null}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <CustomPointLight color={"#68a1c7"} position={[2, 5, 5]}/>
        <CustomPointLight color={"#c6d1d3"} position={[-2, -2, -2]}/>
        <VolSpotLight />
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
