// Module-level mutable store shared between the DOM scroll layer (Lenis)
// and the WebGL layer (react-three-fiber useFrame). Kept outside React so
// per-frame reads never trigger re-renders.
export const scrollStore = {
  progress: 0, // 0..1 across the whole page
  velocity: 0,
  pointerX: 0, // -1..1
  pointerY: 0, // -1..1
};
