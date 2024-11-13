import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from "gsap";
import { useEffect } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const { nodes, materials } = useGLTF('/models/c.glb');

  useEffect(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <group {...props} ref={targetRef} dispose={null} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <group scale={0.03}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C++_C++_0'].geometry}
          material={materials.material}
          position={[-50, 50, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/c.glb');
export default Target;
