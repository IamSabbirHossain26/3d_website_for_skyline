import CanvasMount from "@/components/three/canvas-mount";
import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import Trusted from "@/components/sections/trusted";
import Work from "@/components/sections/work";
import Statement from "@/components/sections/statement";
import Services from "@/components/sections/services";
import Stats from "@/components/sections/stats";
import Clients from "@/components/sections/clients";
import Faq from "@/components/sections/faq";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      {/* Fixed WebGL architectural sculpture behind everything */}
      <CanvasMount />

      <Nav />

      <main className="relative">
        {/* Hero is transparent so the 3D building shows through */}
        <Hero />

        {/* Content sits on solid panels for legibility */}
        <div className="relative bg-[var(--bg)]">
          <Trusted />
          <Work />
          <Statement />
          <Services />
          <Stats />
          <Clients />
          <Faq />
        </div>
        <Cta />
      </main>

      <Footer />
    </>
  );
}
