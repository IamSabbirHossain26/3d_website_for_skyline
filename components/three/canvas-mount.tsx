"use client";

import dynamic from "next/dynamic";

// WebGL must never render on the server.
const Scene = dynamic(() => import("./scene"), { ssr: false });

export default function CanvasMount() {
  return <Scene />;
}
