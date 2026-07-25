"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  ContactShadows,
  AdaptiveDpr,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import * as THREE from "three";
import Sculpture from "./sculpture";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0.5, 0.6, 10], fov: 38 }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
          scene.fog = new THREE.Fog("#f4efe6", 12, 26);
        }}
      >
        <color attach="background" args={["#f4efe6"]} />

        <Suspense fallback={null}>
          <group position={[0, 0.3, 0]}>
            <Sculpture />
            <ContactShadows
              position={[0, -3.4, 0]}
              opacity={0.32}
              scale={22}
              blur={2.6}
              far={9}
              color="#3a2f24"
            />
          </group>

          {/* Studio environment from lightformers — no external HDR. */}
          <Environment resolution={256}>
            <Lightformer
              intensity={2.2}
              position={[0, 5, -5]}
              scale={[12, 6, 1]}
              color="#fff6e8"
            />
            <Lightformer
              intensity={1.4}
              position={[-6, 2, 3]}
              scale={[6, 10, 1]}
              color="#f0d9b8"
            />
            <Lightformer
              intensity={1.1}
              position={[6, -1, 2]}
              scale={[6, 6, 1]}
              color="#cbb894"
            />
            <Lightformer
              intensity={2}
              form="ring"
              position={[0, 1, 7]}
              scale={5}
              color="#ffffff"
            />
          </Environment>

          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 9, 6]}
            intensity={1.5}
            color="#fff2d8"
          />
          <directionalLight
            position={[-6, 2, -4]}
            intensity={0.5}
            color="#e8d3b0"
          />

          <EffectComposer>
            <Bloom
              intensity={0.35}
              luminanceThreshold={0.75}
              luminanceSmoothing={0.3}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>

        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
