"use client";

import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const Design = ({ className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
            distance: 400,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.3,
          },
        },
      },
      particles: {
        color: { value: "#00ff00" },
        links: {
          color: "#ccc",
          distance: 120,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        collisions: { enable: true },
        move: {
          directions: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1200 },
          value: 300,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" className={className} particlesLoaded={particlesLoaded} options={options} />;
  }

  return <div className="particle-wrapper"></div>;
};

export default Design;
