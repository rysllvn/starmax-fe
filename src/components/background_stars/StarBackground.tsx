import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './StarBackground.css';

export default function StarBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
  }, []);

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: "#0f172a"
              },
              detectRetina: false,
              fpsLimit: 30,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  resize: true
                }
              },
              particles: {
                color: {
                  value: "#fff"
                },
                number: {
                  density: {
                    enable: true,
                    area: 1080
                  },
                  limit: 0,
                  value: 400
                },
                opacity: {
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 0.25,
                    sync: false
                  },
                  random: {
                    enable: true,
                    minimumValue: 0.05
                  },
                  value: 1
                },
                shape: {
                  type: "circle"
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 0.5
                  },
                  value: 1
                }
              }
            }}
    />
  )
}
