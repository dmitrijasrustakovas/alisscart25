"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import type { Mesh } from "three";

function HeroObject() {
  const meshRef = useRef<Mesh>(null);
  const scrollProgress = useRef(0);

  useFrame(() => {
    if (typeof window === "undefined") return;
    const max = document.body.scrollHeight - window.innerHeight;
    scrollProgress.current = max > 0 ? window.scrollY / max : 0;
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollProgress.current * Math.PI * 1.5;
      meshRef.current.rotation.x = scrollProgress.current * 0.6;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial
          color="#242424"
          roughness={0.2}
          metalness={0.1}
          distort={0.35}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <HeroObject />
          <Environment preset="studio" />
          <EffectComposer>
            <Bloom intensity={0.25} luminanceThreshold={0.6} />
            <Noise opacity={0.02} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
