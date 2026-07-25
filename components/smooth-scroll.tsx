"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { scrollStore } from "@/lib/scroll-store";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ({ scroll, limit, velocity }: any) => {
      scrollStore.progress = limit > 0 ? scroll / limit : 0;
      scrollStore.velocity = velocity;
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onPointer = (e: PointerEvent) => {
      scrollStore.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      scrollStore.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointer);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
