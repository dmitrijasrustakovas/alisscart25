"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";

/**
 * Drop-in slot for future 3D work: swap the mesh inside <Float> for
 * imported GLTF models, shaders, or particle systems without touching layout.
 */
function HeroObject() {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial
          color="#d8ff3e"
          roughness={0.15}
          metalness={0.6}
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
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 2]} intensity={1.2} />
          <HeroObject />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
