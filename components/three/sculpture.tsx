"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollStore } from "@/lib/scroll-store";

const FLOORS = 16; // stacked floor plates of the hero tower

/**
 * An architecture-themed hero object: a tower built from stacked floor plates
 * with a structural core. At rest it reads as a building; as the page scrolls
 * the plates spread into an "exploded axonometric" — the way architects present
 * a stack of levels — then settle back. Warm bronze metal for the light theme.
 */
export default function Sculpture() {
  const group = useRef<THREE.Group>(null);
  const floorsRef = useRef<THREE.InstancedMesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const satsRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const metal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#6f5a44"),
        metalness: 0.92,
        roughness: 0.34,
        envMapIntensity: 1.15,
      }),
    []
  );
  const coreMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#3a2f24"),
        metalness: 0.85,
        roughness: 0.45,
        envMapIntensity: 0.9,
      }),
    []
  );

  const slabGeo = useMemo(() => new THREE.BoxGeometry(2.6, 0.12, 2.6), []);
  const coreGeo = useMemo(() => new THREE.BoxGeometry(0.7, 1, 0.7), []);
  const satGeo = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);

  // Slightly varied plate footprints so the tower tapers subtly upward.
  const scales = useMemo(
    () =>
      Array.from({ length: FLOORS }, (_, i) => 1 - (i / FLOORS) * 0.28),
    []
  );

  // A small context skyline of solid massing blocks around the tower.
  const sats = useMemo(
    () =>
      [
        [-4.4, 3.2, -1.5, 0.9],
        [4.2, 2.2, -2.2, 1.1],
        [3.6, 4.6, 1.8, 0.8],
        [-3.8, 5.4, 1.2, 0.7],
        [0.4, 2.0, 4.2, 1.0],
      ] as [number, number, number, number][],
    []
  );

  useFrame((state) => {
    const g = group.current;
    const floors = floorsRef.current;
    const core = coreRef.current;
    if (!g || !floors || !core) return;

    const t = state.clock.elapsedTime;
    const p = scrollStore.progress;

    // Ease the "explode" so it opens then eases; peaks around mid-scroll.
    const explode = Math.sin(Math.min(p, 1) * Math.PI) * 1.0 + p * 0.35;
    const gap = 0.34 + explode * 0.5;

    g.rotation.y = t * 0.14 + p * Math.PI * 0.9 + scrollStore.pointerX * 0.25;
    g.rotation.x = -0.08 + scrollStore.pointerY * 0.1;
    g.position.y = -0.4 + Math.sin(t * 0.4) * 0.08;
    g.position.z = p * 2.2;

    const totalH = (FLOORS - 1) * gap;
    for (let i = 0; i < FLOORS; i++) {
      const s = scales[i];
      const y = i * gap - totalH / 2;
      dummy.position.set(0, y, 0);
      dummy.rotation.set(0, explode * 0.12 * i * 0.1, 0);
      dummy.scale.set(s, 1, s);
      dummy.updateMatrix();
      floors.setMatrixAt(i, dummy.matrix);
    }
    floors.instanceMatrix.needsUpdate = true;

    // Core scales with the stack height so it always spans the plates.
    core.scale.set(1, totalH + 0.6, 1);

    // Satellite massing gentle bob.
    const sm = satsRef.current;
    if (sm) {
      for (let i = 0; i < sats.length; i++) {
        const [x, h, z, w] = sats[i];
        dummy.position.set(x, -1.6 + h / 2 + Math.sin(t * 0.5 + i) * 0.06, z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.set(w, h, w);
        dummy.updateMatrix();
        sm.setMatrixAt(i, dummy.matrix);
      }
      sm.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group}>
      <instancedMesh
        ref={floorsRef}
        args={[slabGeo, metal, FLOORS]}
        frustumCulled={false}
      />
      <mesh ref={coreRef} geometry={coreGeo} material={coreMat} />
      <instancedMesh
        ref={satsRef}
        args={[satGeo, metal, sats.length]}
        frustumCulled={false}
      />
    </group>
  );
}
