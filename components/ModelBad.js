import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ModelBad(props) {
  const { nodes, materials } = useGLTF(require("./flower_state_bad2.glb"));
  console.log(nodes, materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pot.geometry}
        material={materials.Pot}
        position={[0, 1.019, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stem.geometry}
        material={materials.Stem}
        position={[0, 1.455, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bulb.geometry}
        material={materials.Bulb}
        position={[0.385, 0.055, -2.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leafs.geometry}
        material={materials["Leaf.001"]}
        position={[0.111, 1.18, -3.685]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.219}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dirt.geometry}
        material={materials.Dirt}
        position={[0, 1.019, 0]}
      />
    </group>
  );
}

useGLTF.preload(require("./flower_state_bad2.glb"));
