'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useState } from "react";

const scenes: any = ['forest', 'apartment', 'city', 'dawn', 'lobby']
export default function Home() {
  const [index, setIndex] = useState(0)
  const [scene, setScene] = useState<any>(scenes[index]);

  const gltf = useLoader(GLTFLoader, "/sahmpo.glb");
  const handleChangeScene = () => {
    console.log('inte')
    if (index === 4) {
      setIndex(0)
      setScene(scenes[index]);
    } else {
      setIndex(index + 1)
      setScene(scenes[index]);
    }
  }
  return (
    <main className={styles.main}>
      <Canvas style={{ background: 'transparent', height: '100vh', width: '100vw' }}>
        <OrbitControls />
        <Environment preset={scene} background={true} />
        <mesh

          castShadow
          position={[0, -2, 0]}
          receiveShadow
          scale={1} // Set the initial tilt of the object
        >
          <primitive object={gltf.scene} />
        </mesh>
      </Canvas>
      <button
      style={{position: 'fixed', cursor: 'pointer', zIndex: 10, bottom: 20, right: 20, background: 'transparent', border: '1px solid #fff' , color: '#fff', padding: 10}}
        onClick={handleChangeScene}
      >change scene</button>
    </main>
  );
}
