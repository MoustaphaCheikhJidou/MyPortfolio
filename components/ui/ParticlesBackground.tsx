"use client";

import { useMemo } from "react";
import { Particles, ParticlesProvider, type ParticlesPluginRegistrar } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const initEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 70,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ["#818cf8", "#06b6d4", "#67e8f9"] },
        links: {
          enable: true,
          color: "#4f46e5",
          distance: 140,
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.2, max: 0.6 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.5 } },
          push: { quantity: 3 },
        },
      },
    }),
    []
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="hero-particles"
        options={options}
        className="pointer-events-auto absolute inset-0"
      />
    </ParticlesProvider>
  );
}
