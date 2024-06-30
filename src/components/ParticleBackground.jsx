import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const particleColor = "#f97316";

const ParticleBackground = () => {
   const [init, setInit] = useState(false);

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = (container) => {
      console.log(container);
   };

   const options = useMemo(
       () => ({
          fpsLimit: 120,
          interactivity: {
             events: {
                onClick: {
                   enable: true,
                   mode: "push",
                },
                onHover: {
                   enable: true,
                   mode: "grab",
                },
             },
             modes: {
                push: {
                   quantity: 4,
                },
                repulse: {
                   distance: 200,
                   duration: 0.4,
                },
                grab: {
                   distance: 400,
                },
             },
          },
          particles: {
             color: {
                value: particleColor,
             },
             links: {
                color: particleColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
             },
             move: {
                direction: "none",
                enable: true,
                outModes: {
                   default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
             },
             number: {
                density: {
                   enable: true,
                },
                value: 120,
             },
             opacity: {
                value: 0.5,
             },
             shape: {
                type: "circle",
             },
             size: {
                value: { min: 1, max: 5 },
             },
          },
          detectRetina: true,
       }),
       [],
   );

   if (init) {
      return (
          <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
          />
      );
   }

   return <></>;
};

export default ParticleBackground;
