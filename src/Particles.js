import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Stars() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particleParams = {
    background: {
      color: {
        value: "#000000", // Couleur du ciel noir
      },
    },
    fpsLimit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 0.8,
          size: 0,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Couleur des étoiles
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: true,
        speed: 0.3, // Vitesse de déplacement des étoiles
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800, // Densité des étoiles
        },
        value: 80, // Nombre d'étoiles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle", // Forme des étoiles
      },
      size: {
        random: true,
        value: 3, // Taille des étoiles
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleParams}
      />
    </div>
  );
}