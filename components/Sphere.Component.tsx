import React from "react";

const Sphere = () => {
  return (
    <mesh position={[0, 0.2, 0]}>
      <sphereGeometry attach="geometry" args={[0.5, 20, 20]} />
      <meshBasicMaterial attach="material" color="hsla(54, 100%, 55%, 1)" />
    </mesh>
  );
};

export default Sphere;
