/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import FadeIn from './components/FadeIn';
import SeamlessVideo from './components/SeamlessVideo';
import ShinyText from './components/ShinyText';
import { StorySection, WhatsappSection, InstagramSection, BossSection, AdvisorySection, Footer } from './components/Sections';

export default function App() {
  const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260505_203452_a0ca140a-f02c-4ce5-bb97-f7259e5f37ef.mp4";

  return (
    <main className="relative w-full min-h-[115vh] overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-black scroll-smooth">
      {/* Background Video - Fixed Position for Parallax Effect */}
      <div className="fixed inset-0 z-[0]">
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260506_204312_b409e85b-c9ad-4e16-9875-10bdc8d63bcb.mp4"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          videoClassName="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-10 lg:pb-14 min-h-screen">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0">

          {/* Text block — bottom left */}
          <div className="flex flex-col items-start max-w-sm sm:max-w-xl">
            <h1 className="sr-only">Negocios autónomos con agentes de IA 24/7</h1>
            <FadeIn immediate duration={500}>
              <div
                className="text-[clamp(2.4rem,8vw_+_0.5rem,5rem)] font-black uppercase tracking-tight mb-0 pb-3 leading-[0.95]"
                style={{ filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.95))' }}
              >
                <ShinyText
                  text="NEGOCIOS"
                  color="rgba(238,239,240,0.88)"
                  shineColor="#ffffff"
                  speed={3.5}
                  delay={2}
                  spread={105}
                  direction="left"
                />
                <br />
                <ShinyText
                  text="AUTÓNOMOS."
                  color="rgba(238,239,240,0.88)"
                  shineColor="#ffffff"
                  speed={3.5}
                  delay={2.5}
                  spread={105}
                  direction="left"
                />
              </div>
            </FadeIn>

            <FadeIn immediate delay={300} duration={500}>
              <p className="text-[0.79rem] md:text-[0.9rem] text-gray-300/80 mb-5 max-w-xs leading-relaxed"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
                Agentes de IA para WhatsApp, correo e Instagram. Responden, clasifican y cierran por ti — 24/7.
              </p>
            </FadeIn>

            <FadeIn immediate delay={500} duration={500} className="flex flex-wrap gap-2.5">
              <a
                href="/precios"
                className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                Asesoría Gratuita
              </a>
              <a
                href="/precios#planes"
                className="liquid-glass glass-hover border border-white/20 text-white px-6 py-2.5 rounded-lg text-sm font-medium"
              >
                Nuestros planes
              </a>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* New Sections */}
      <StorySection />
      <WhatsappSection />
      <InstagramSection />
      <BossSection />
      <AdvisorySection />

      {/* Footer */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto">
        <Footer />
      </div>
    </main>
  );
}
